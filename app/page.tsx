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
        y: 100,
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
    <main
      style={{
        background: "#e8d8b5",
        minHeight: "100vh",
        padding: "18px",
        color: "#5b341c",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          border: "2px solid #8b5a2b",
          borderRadius: "22px",
          overflow: "hidden",
          background: "#e3d3ae",
        }}
      >
        <header
          style={{
            textAlign: "center",
            padding: "28px 20px 20px",
            borderBottom: "1px solid #b88c5a",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "72px",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            Gia Phả Họ Bùi
          </h1>

          <nav
            style={{
              marginTop: "24px",
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <span>Trang chủ</span>
            <span style={{ fontWeight: 700 }}>Cây gia phả</span>
            <span>Các câu chuyện</span>
            <span>Tin tức</span>
          </nav>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr 420px",
            gap: "18px",
            padding: "20px",
          }}
        >
          <aside
            style={{
              border: "1px solid #c49a6c",
              borderRadius: "18px",
              padding: "22px",
              background: "#efe4ca",
            }}
          >
            <h2 style={{ fontSize: "42px", marginTop: 0, marginBottom: "10px" }}>
              Giới thiệu
            </h2>

            <div
              style={{
                height: "1px",
                background: "#c9a574",
                marginBottom: "18px",
              }}
            />

            <p
              style={{
                fontSize: "24px",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              Đây là nơi lưu giữ gia phả, ký ức, ảnh cũ và các câu chuyện của dòng
              họ Bùi để con cháu sau này còn tiếp tục viết tiếp.
            </p>

            <h3 style={{ fontSize: "34px", marginBottom: "16px" }}>
              Nhân vật nổi bật
            </h3>

            <div
              onClick={() => handleSelectOnly("bui-van-le")}
              style={{
                border: "1px solid #c9a574",
                borderRadius: "14px",
                padding: "16px",
                background: "#f3ead7",
                cursor: "pointer",
                marginBottom: "14px",
              }}
            >
              <div style={{ fontSize: "30px", fontWeight: 700 }}>Bùi Văn Lệ</div>
              <div style={{ fontSize: "20px", marginTop: "6px" }}>1870–1930</div>
            </div>

            <div
              onClick={() => handleSelectOnly("bui-van-nho")}
              style={{
                border: "1px solid #c9a574",
                borderRadius: "14px",
                padding: "16px",
                background: "#f3ead7",
                cursor: "pointer",
                marginBottom: "14px",
              }}
            >
              <div style={{ fontSize: "30px", fontWeight: 700 }}>Bùi Văn Nho</div>
              <div style={{ fontSize: "20px", marginTop: "6px" }}>1899–1950</div>
            </div>

            <div
              onClick={() => handleSelectOnly("bui-van-toan")}
              style={{
                border: "1px solid #c9a574",
                borderRadius: "14px",
                padding: "16px",
                background: "#f3ead7",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "30px", fontWeight: 700 }}>Bùi Văn Toàn</div>
              <div style={{ fontSize: "20px", marginTop: "6px" }}>1997–nay</div>
            </div>
          </aside>

          <div
            style={{
              border: "1px solid #c49a6c",
              borderRadius: "18px",
              background: "#efe3c7",
              padding: "14px",
              minHeight: "900px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                gap: "12px",
                flexWrap: "wrap",
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
                  border: "1px solid #a36f45",
                  background: "#f8f1e4",
                  color: "#5b341c",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                Cây gia phả
              </button>

              <div
                style={{
                  fontSize: "18px",
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
                height: "820px",
                borderRadius: "16px",
                background: "#eadfc3",
                overflow: "hidden",
                boxShadow: "inset 0 0 0 1px rgba(163,111,69,0.15)",
              }}
            >
              <Tree
                data={treeData}
                orientation="vertical"
                pathFunc="step"
                translate={translate}
                collapsible={false}
                zoomable={true}
                draggable={true}
                separation={{ siblings: 1.2, nonSiblings: 1.4 }}
                nodeSize={{ x: 240, y: 120 }}
                renderCustomNodeElement={({ nodeDatum }) => {
                  const person = nodeDatum as unknown as PersonType;

                  return (
                    <g onClick={() => handleClick(person)} style={{ cursor: "pointer" }}>
                      <rect
                        width="210"
                        height="62"
                        x="-105"
                        y="-31"
                        rx="12"
                        ry="12"
                        fill={person.color || "#fffaf5"}
                        stroke="#a36f45"
                        strokeWidth="1.6"
                      />
                      <text
                        x="0"
                        y="-4"
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
                        y="17"
                        textAnchor="middle"
                        style={{
                          fontSize: "11px",
                          fill: "#4e2f1d",
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
              border: "1px solid #c49a6c",
              borderRadius: "18px",
              padding: "26px",
              background: "#f6eddc",
              minHeight: "900px",
            }}
          >
            <h2
              style={{
                fontSize: "64px",
                marginTop: 0,
                marginBottom: "12px",
                textAlign: "center",
                lineHeight: 1.05,
              }}
            >
              {selectedPerson.name}
            </h2>

            <p
              style={{
                fontSize: "28px",
                textAlign: "center",
                marginBottom: "34px",
              }}
            >
              {selectedPerson.years || "Chưa cập nhật"}
            </p>

            <h3 style={{ fontSize: "34px", marginBottom: "8px" }}>Quê quán</h3>
            <p style={{ fontSize: "22px", lineHeight: 1.7, marginBottom: "24px" }}>
              {selectedPerson.location || "Chưa cập nhật"}
            </p>

            <h3 style={{ fontSize: "34px", marginBottom: "8px" }}>Nghề nghiệp</h3>
            <p style={{ fontSize: "22px", lineHeight: 1.7, marginBottom: "24px" }}>
              {selectedPerson.title || "Chưa cập nhật"}
            </p>

            <h3 style={{ fontSize: "34px", marginBottom: "8px" }}>
              Cuộc sống / câu chuyện
            </h3>
            <p style={{ fontSize: "22px", lineHeight: 1.8 }}>
              {selectedPerson.story || "Chưa cập nhật"}
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}