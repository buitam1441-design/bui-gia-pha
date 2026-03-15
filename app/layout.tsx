import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gia Phả Họ Bùi",
  description: "Website gia phả dòng họ Bùi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        style={{
          margin: 0,
          background:
            "radial-gradient(circle at top, #efe0bc 0%, #e2cda3 45%, #d8bf92 100%)",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#5a341b",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "1720px",
              margin: "0 auto",
              border: "1px solid #9c6a40",
              borderRadius: "28px",
              padding: "14px",
              background:
                "linear-gradient(180deg, rgba(255,248,231,0.38) 0%, rgba(238,221,183,0.25) 100%)",
              boxShadow:
                "0 18px 40px rgba(70, 40, 15, 0.18), inset 0 0 0 1px rgba(255,255,255,0.25)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                width: 70,
                height: 70,
                borderTop: "2px solid #a57447",
                borderLeft: "2px solid #a57447",
                borderTopLeftRadius: "24px",
                pointerEvents: "none",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 70,
                height: 70,
                borderTop: "2px solid #a57447",
                borderRight: "2px solid #a57447",
                borderTopRightRadius: "24px",
                pointerEvents: "none",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                width: 70,
                height: 70,
                borderBottom: "2px solid #a57447",
                borderLeft: "2px solid #a57447",
                borderBottomLeftRadius: "24px",
                pointerEvents: "none",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                width: 70,
                height: 70,
                borderBottom: "2px solid #a57447",
                borderRight: "2px solid #a57447",
                borderBottomRightRadius: "24px",
                pointerEvents: "none",
                opacity: 0.6,
              }}
            />

            <div
              style={{
                border: "2px solid #a57447",
                borderRadius: "22px",
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, #efe2c3 0%, #e4d0aa 38%, #eadabd 100%)",
                boxShadow: "inset 0 0 0 3px rgba(124, 79, 41, 0.12)",
              }}
            >
              <header
                style={{
                  textAlign: "center",
                  padding: "24px 20px 26px",
                  borderBottom: "1px solid #b78b5f",
                  background:
                    "linear-gradient(180deg, rgba(255,250,240,0.24) 0%, rgba(210,175,118,0.08) 100%)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "28px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(42px, 6vw, 74px)",
                      lineHeight: 1,
                      fontWeight: 700,
                      color: "#5a3017",
                      letterSpacing: "2px",
                      whiteSpace: "nowrap",
                      textShadow: "0 1px 0 rgba(255,255,255,0.25)",
                      marginTop: "54px",
                    }}
                  >
                    Gia Phả
                  </div>

                  <div
                    style={{
                      position: "relative",
                      width: "116px",
                      height: "150px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      marginTop: "-10px",
                    }}
                  >
                    <div
                      style={{
                        width: "100px",
                        height: "112px",
                        clipPath:
                          "polygon(50% 0%, 88% 14%, 88% 68%, 50% 100%, 12% 68%, 12% 14%)",
                        background:
                          "radial-gradient(circle at 30% 25%, #b98553 0%, #8b5a36 58%, #6a3d23 100%)",
                        border: "3px solid #c79a6a",
                        boxShadow:
                          "0 10px 20px rgba(70,40,15,0.18), inset 0 0 0 2px rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff6e8",
                        fontSize: "34px",
                        fontWeight: 700,
                        textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                      }}
                    >
                      Bùi
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "clamp(42px, 6vw, 74px)",
                      lineHeight: 1,
                      fontWeight: 700,
                      color: "#5a3017",
                      letterSpacing: "2px",
                      whiteSpace: "nowrap",
                      textShadow: "0 1px 0 rgba(255,255,255,0.25)",
                      marginTop: "54px",
                    }}
                  >
                    Họ Bùi
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    color: "#9a7448",
                  }}
                >
                  <div
                    style={{
                      width: "280px",
                      maxWidth: "20vw",
                      height: "1px",
                      background: "#b88b5c",
                    }}
                  />
                  <span style={{ fontSize: "18px" }}>❦</span>
                  <span style={{ fontSize: "16px" }}>✦</span>
                  <span style={{ fontSize: "18px" }}>❧</span>
                  <span style={{ fontSize: "16px" }}>✦</span>
                  <span style={{ fontSize: "18px" }}>❦</span>
                  <div
                    style={{
                      width: "280px",
                      maxWidth: "20vw",
                      height: "1px",
                      background: "#b88b5c",
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: "18px",
                    color: "#8a5a33",
                    fontSize: "15px",
                    letterSpacing: "3px",
                  }}
                >
                  GÌN GIỮ GIA PHONG • LƯU TRUYỀN HẬU THẾ
                </div>
              </header>

              <div
                style={{
                  padding: "20px",
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}