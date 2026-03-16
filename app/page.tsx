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
  const [selectedPerson, setSelectedPerson] = useState<PersonType | null>(null);
  const [activeTab, setActiveTab] = useState<"home" | "tree">("tree");
  const treeWrapperRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 500, y: 100 });

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
  }, [treeData, selectedPerson]);

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
      setActiveTab("tree");
    }
  };

  if (!treeData) return null;

  const showDetailPanel = activeTab === "tree" && !!selectedPerson;

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: showDetailPanel ? "1fr 420px" : "1fr",
        gap: "18px",
      }}
    >
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
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "14px",
          }}
        >
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveTab("home")}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "1px solid #9f6e43",
                background:
                  activeTab === "home"
                    ? "linear-gradient(180deg, #e8d1a8 0%, #d8b98a 100%)"
                    : "linear-gradient(180deg, #fffaf0 0%, #f1dfbf 100%)",
                color: "#5b341c",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 4px 8px rgba(80,50,20,0.06)",
              }}
            >
              Trang chủ
            </button>

            <button
              onClick={() => setActiveTab("tree")}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "1px solid #9f6e43",
                background:
                  activeTab === "tree"
                    ? "linear-gradient(180deg, #e8d1a8 0%, #d8b98a 100%)"
                    : "linear-gradient(180deg, #fffaf0 0%, #f1dfbf 100%)",
                color: "#5b341c",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 4px 8px rgba(80,50,20,0.06)",
              }}
            >
              Cây gia phả
            </button>

            {activeTab === "tree" && (
              <button
                onClick={() => {
                  const resetTree = setCollapseByLevel(
                    cloneTree(familyTree),
                    0,
                    1
                  );
                  setTreeData(resetTree);
                  setSelectedPerson(null);
                }}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid #9f6e43",
                  background:
                    "linear-gradient(180deg, #fffaf0 0%, #f1dfbf 100%)",
                  color: "#5b341c",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: 700,
                  boxShadow: "0 4px 8px rgba(80,50,20,0.06)",
                }}
              >
                Về cây gốc
              </button>
            )}
          </div>

          {activeTab === "tree" && (
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#7a5230",
              }}
            >
              Nhấn vào từng người để xem thông tin và mở rộng nhánh
            </div>
          )}
        </div>

        {activeTab === "home" ? (
          <div
            style={{
              border: "1px solid rgba(157,108,65,0.35)",
              borderRadius: "16px",
              padding: "28px",
              background: "linear-gradient(180deg, #f8efdc 0%, #f1e0bf 100%)",
              minHeight: "820px",
            }}
          >
            <h2
              style={{
                fontSize: "46px",
                marginTop: 0,
                marginBottom: "10px",
                textAlign: "center",
                color: "#5a3017",
              }}
            >
              Giới Thiệu
            </h2>

            <OrnamentLine />

            <p
              style={{
                fontSize: "22px",
                lineHeight: 1.95,
                textAlign: "justify",
                maxWidth: "1000px",
                margin: "0 auto 30px",
              }}
            >
              Đây là nơi lưu giữ gia phả, ký ức, ảnh cũ và các câu chuyện của dòng
              họ Bùi để con cháu đời sau luôn nhớ về cội nguồn và tiếp tục viết
              tiếp hành trình của gia đình.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
                marginTop: "26px",
              }}
            >
              {[
                { id: "bui-van-le", name: "Bùi Văn Lệ", years: "1870-1930" },
                { id: "bui-van-nho", name: "Bùi Văn Nho", years: "1899-1950" },
                { id: "bui-van-toan", name: "Bùi Văn Toàn", years: "1997-nay" },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectOnly(item.id)}
                  style={{
                    border: "1px solid #c9a574",
                    borderRadius: "14px",
                    padding: "18px",
                    background:
                      "linear-gradient(180deg, #fbf3e3 0%, #f2e4c6 100%)",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(80,50,20,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#5a3017",
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      marginTop: "6px",
                      color: "#7a5230",
                    }}
                  >
                    {item.years}
                  </div>
                  <div
                    style={{
                      marginTop: "12px",
                      fontSize: "15px",
                      color: "#8a5b35",
                    }}
                  >
                    Bấm để xem trong cây gia phả
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
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
            <Tree
              data={treeData}
              orientation="vertical"
              pathFunc="step"
              translate={translate}
              collapsible={false}
              zoomable={true}
              draggable={true}
              separation={{ siblings: 1.35, nonSiblings: 1.55 }}
              nodeSize={{ x: 280, y: 145 }}
              renderCustomNodeElement={({ nodeDatum }) => {
                const person = nodeDatum as unknown as PersonType;
                const isSelected = selectedPerson?.id === person.id;
                const spouseText =
                  person.spouses && person.spouses.length > 0
                    ? person.spouses.map((s) => s.name).join(" • ")
                    : "";

                return (
                  <g
                    onClick={() => handleClick(person)}
                    style={{ cursor: "pointer" }}
                  >
                    <rect
                      width="230"
                      height="92"
                      x="-115"
                      y="-46"
                      rx="14"
                      ry="14"
                      fill={isSelected ? "#f8eed8" : person.color || "#fff8eb"}
                      stroke={isSelected ? "#7d4a27" : "#a36f45"}
                      strokeWidth={isSelected ? "2.2" : "1.5"}
                    />
                    <rect
                      width="212"
                      height="72"
                      x="-106"
                      y="-36"
                      rx="10"
                      ry="10"
                      fill="none"
                      stroke="rgba(163,111,69,0.28)"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="-18"
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
                      y="2"
                      textAnchor="middle"
                      style={{
                        fontSize: "11px",
                        fill: "#6b4529",
                        pointerEvents: "none",
                      }}
                    >
                      {person.years || ""}
                    </text>

                    {spouseText && (
                      <text
                        x="0"
                        y="23"
                        textAnchor="middle"
                        style={{
                          fontSize: "10px",
                          fill: "#8a5b35",
                          fontStyle: "italic",
                          pointerEvents: "none",
                        }}
                      >
                        {spouseText}
                      </text>
                    )}
                  </g>
                );
              }}
            />
          </div>
        )}
      </div>

      {showDetailPanel && selectedPerson && (
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

            {selectedPerson.photo && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "22px",
                }}
              >
                <img
                  src={selectedPerson.photo}
                  alt={selectedPerson.name}
                  style={{
                    width: "180px",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "18px",
                    border: "3px solid #c9a46a",
                    boxShadow: "0 10px 24px rgba(90, 52, 27, 0.15)",
                  }}
                />
              </div>
            )}

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

            <SectionTitle>Phối ngẫu</SectionTitle>
            {selectedPerson.spouses && selectedPerson.spouses.length > 0 ? (
              <div style={{ marginBottom: "18px" }}>
                {selectedPerson.spouses.map((spouse, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid rgba(157,108,65,0.28)",
                      borderRadius: "12px",
                      padding: "12px 14px",
                      marginBottom: "10px",
                      background: "rgba(255,255,255,0.28)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#5a3017",
                        marginBottom: "4px",
                      }}
                    >
                      {spouse.title ? `${spouse.title}: ${spouse.name}` : spouse.name}
                    </div>

                    {spouse.years && (
                      <div
                        style={{
                          fontSize: "16px",
                          color: "#764a2a",
                          marginBottom: "6px",
                        }}
                      >
                        {spouse.years}
                      </div>
                    )}

                    {spouse.location && (
                      <div
                        style={{
                          fontSize: "16px",
                          lineHeight: 1.7,
                          marginBottom: spouse.story ? "6px" : 0,
                        }}
                      >
                        Quê quán: {spouse.location}
                      </div>
                    )}

                    {spouse.story && (
                      <div
                        style={{
                          fontSize: "16px",
                          lineHeight: 1.7,
                        }}
                      >
                        {spouse.story}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  marginBottom: "18px",
                }}
              >
                Chưa cập nhật
              </p>
            )}

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
      )}
    </section>
  );
}