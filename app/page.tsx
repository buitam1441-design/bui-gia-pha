"use client";

import { useEffect, useRef, useState } from "react";
import Tree from "react-d3-tree";
import { familyTree, PersonType } from "./familyData";

type TreeNode = PersonType & {
  __rd3t?: {
    collapsed?: boolean;
  };
  children?: TreeNode[];
};

function cloneTree(person: PersonType): TreeNode {
  return {
    ...person,
    children: (person.children || []).map(cloneTree),
  };
}

function setCollapseByLevel(
  node: TreeNode,
  currentLevel: number,
  maxVisibleLevel: number
): TreeNode {
  const shouldCollapse = currentLevel >= maxVisibleLevel;

  return {
    ...node,
    __rd3t: {
      ...node.__rd3t,
      collapsed: shouldCollapse,
    },
    children: (node.children || []).map((child) =>
      setCollapseByLevel(child, currentLevel + 1, maxVisibleLevel)
    ),
  };
}

function updateNodeCollapse(node: TreeNode, targetId: string): TreeNode {
  if (node.id === targetId) {
    const isCollapsed = node.__rd3t?.collapsed ?? false;

    return {
      ...node,
      __rd3t: {
        ...node.__rd3t,
        collapsed: !isCollapsed,
      },
      children: node.children,
    };
  }

  return {
    ...node,
    children: (node.children || []).map((child) =>
      updateNodeCollapse(child, targetId)
    ),
  };
}

function findPersonById(person: TreeNode, id: string): TreeNode | null {
  if (person.id === id) return person;

  for (const child of person.children || []) {
    const found = findPersonById(child, id);
    if (found) return found;
  }

  return null;
}

function OrnamentLine() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        margin: "12px 0 16px",
        color: "#8a5b35",
      }}
    >
      <span style={{ fontSize: "18px" }}>❦</span>
      <div
        style={{
          width: "70px",
          height: "1px",
          background: "#b88b5c",
        }}
      />
      <span style={{ fontSize: "16px" }}>✦</span>
      <div
        style={{
          width: "70px",
          height: "1px",
          background: "#b88b5c",
        }}
      />
      <span style={{ fontSize: "18px" }}>❦</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: "28px",
        marginTop: 0,
        marginBottom: "12px",
        color: "#5f351c",
      }}
    >
      {children}
    </h3>
  );
}

export default function Home() {
  const [treeData, setTreeData] = useState<TreeNode | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<PersonType>(familyTree);
  const treeWrapperRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 350, y: 90 });

  useEffect(() => {
    const initialTree = setCollapseByLevel(cloneTree(familyTree), 0, 1);
    setTreeData(initialTree);
  }, []);

  useEffect(() => {
    if (treeWrapperRef.current) {
      const { width } = treeWrapperRef.current.getBoundingClientRect();
      setTranslate({
        x: width / 2,
        y: 110,
      });
    }
  }, [treeData]);

  const handleClick = (person: PersonType) => {
    setSelectedPerson(person);

    setTreeData((prev) => {
      if (!prev) return prev;
      return updateNodeCollapse(prev, person.id);
    });
  };

  const handleSelectOnly = (id: string) => {
    if (!treeData) return;
    const found = findPersonById(treeData, id);
    if (found) {
      setSelectedPerson(found);
    }
  };

  if (!treeData) return null;

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "300px 1fr 420px",
        gap: "18px",
      }}
    >
      <aside
        style={{
          border: "1px solid #c29667",
          borderRadius: "18px",
          padding: "20px",
          background: "linear-gradient(180deg, #f5ead3 0%, #efe0c0 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.26), 0 8px 20px rgba(93, 58, 28, 0.06)",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(157,108,65,0.35)",
            borderRadius: "14px",
            padding: "16px",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginTop: 0,
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            Giới Thiệu
          </h2>

          <OrnamentLine />

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              marginBottom: "22px",
              textAlign: "justify",
            }}
          >
            Đây là nơi lưu giữ gia phả, ký ức, ảnh cũ và các câu chuyện của dòng
            họ Bùi để con cháu đời sau luôn nhớ về cội nguồn và tiếp tục viết
            tiếp hành trình của gia đình.
          </p>

          <SectionTitle>Nhân vật nổi bật</SectionTitle>

          {[
            { id: "bui-van-le", name: "Bùi Văn Lệ", years: "1870–1930" },
            { id: "bui-van-nho", name: "Bùi Văn Nho", years: "1899–1950" },
            { id: "bui-van-toan", name: "Bùi Văn Toàn", years: "1997–nay" },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectOnly(item.id)}
              style={{
                border: "1px solid #c9a574",
                borderRadius: "14px",
                padding: "14px 16px",
                background: "linear-gradient(180deg, #fbf3e3 0%, #f2e4c6 100%)",
                cursor: "pointer",
                marginBottom: "12px",
                boxShadow: "0 4px 10px rgba(80,50,20,0.05)",
              }}
            >
              <div style={{ fontSize: "24px", fontWeight: 700 }}>
                {item.name}
              </div>
              <div style={{ fontSize: "16px", marginTop: "4px" }}>
                {item.years}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div
        style={{
          border: "1px solid #c29667",
          borderRadius: "18px",
          background: "linear-gradient(180deg, #f3e7cc 0%, #ead9b7 100%)",
          padding: "14px",
          minHeight: "920px",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.26), 0 8px 20px rgba(93, 58, 28, 0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            gap: "12px",
            flexWrap: "wrap",
            padding: "4px 4px 8px",
          }}
        >
          <button
            onClick={() => {
              const resetTree = setCollapseByLevel(cloneTree(familyTree), 0, 1);
              setTreeData(resetTree);
              setSelectedPerson(familyTree);
            }}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid #9f6e43",
              background: "linear-gradient(180deg, #fffaf0 0%, #f1dfbf 100%)",
              color: "#5b341c",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 700,
              boxShadow: "0 4px 8px rgba(80,50,20,0.06)",
            }}
          >
            Về cây gốc
          </button>

          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#7a5230",
            }}
          >
            Nhấn vào từng người để xem thông tin và mở rộng nhánh
          </div>
        </div>

        <div
          ref={treeWrapperRef}
          style={{
            width: "100%",
            height: "840px",
            borderRadius: "16px",
            background:
              "linear-gradient(180deg, rgba(255,251,241,0.35) 0%, rgba(233,219,189,0.55) 100%)",
            overflow: "hidden",
            boxShadow: "inset 0 0 0 1px rgba(163,111,69,0.18)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0) 65%)",
            }}
          />

          <Tree
            data={treeData}
            orientation="vertical"
            pathFunc="step"
            translate={translate}
            collapsible={false}
            zoomable={true}
            draggable={true}
            separation={{ siblings: 1.2, nonSiblings: 1.45 }}
            nodeSize={{ x: 240, y: 120 }}
            renderCustomNodeElement={({ nodeDatum }) => {
              const person = nodeDatum as unknown as PersonType;
              const isSelected = selectedPerson.id === person.id;

              return (
                <g
                  onClick={() => handleClick(person)}
                  style={{ cursor: "pointer" }}
                >
                  <rect
                    width="214"
                    height="66"
                    x="-107"
                    y="-33"
                    rx="14"
                    ry="14"
                    fill={isSelected ? "#f8eed8" : person.color || "#fff8eb"}
                    stroke={isSelected ? "#7d4a27" : "#a36f45"}
                    strokeWidth={isSelected ? "2.2" : "1.5"}
                  />
                  <rect
                    width="196"
                    height="48"
                    x="-98"
                    y="-24"
                    rx="10"
                    ry="10"
                    fill="none"
                    stroke="rgba(163,111,69,0.28)"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="-6"
                    textAnchor="middle"
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      fill: "#4e2f1d",
                      pointerEvents: "none",
                    }}
                  >
                    {person.name}
                  </text>
                  <text
                    x="0"
                    y="15"
                    textAnchor="middle"
                    style={{
                      fontSize: "11px",
                      fill: "#6b4529",
                      pointerEvents: "none",
                    }}
                  >
                    {person.years || ""}
                  </text>
                </g>
              );
            }}
          />
        </div>
      </div>

      <aside
        style={{
          border: "1px solid #c29667",
          borderRadius: "18px",
          padding: "20px",
          background: "linear-gradient(180deg, #f8efdc 0%, #f1e0bf 100%)",
          minHeight: "920px",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.26), 0 8px 20px rgba(93, 58, 28, 0.06)",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(157,108,65,0.35)",
            borderRadius: "14px",
            padding: "18px",
            minHeight: "100%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "14px",
              color: "#8a5b35",
              fontSize: "18px",
            }}
          >
            ✦ Gia phả chi tiết ✦
          </div>

          <h2
            style={{
              fontSize: "46px",
              marginTop: 0,
              marginBottom: "8px",
              textAlign: "center",
              lineHeight: 1.1,
              color: "#5a3017",
            }}
          >
            {selectedPerson.name}
          </h2>

          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              marginBottom: "22px",
              color: "#764a2a",
            }}
          >
            {selectedPerson.years || "Chưa cập nhật"}
          </p>

          <OrnamentLine />

          <SectionTitle>Quê quán</SectionTitle>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: "18px",
            }}
          >
            {selectedPerson.location || "Chưa cập nhật"}
          </p>

          <SectionTitle>Nghề nghiệp</SectionTitle>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: "18px",
            }}
          >
            {selectedPerson.title || "Chưa cập nhật"}
          </p>

          <SectionTitle>Cuộc sống / câu chuyện</SectionTitle>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.95,
              marginBottom: 0,
              textAlign: "justify",
            }}
          >
            {selectedPerson.story || "Chưa cập nhật"}
          </p>
        </div>
      </aside>
    </section>
  );
}