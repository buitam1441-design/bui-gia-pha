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
            {/* Góc trang trí */}
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
              {/* Header chung */}
              <header
                style={{
                  textAlign: "center",
                  padding: "34px 20px 22px",
                  borderBottom: "1px solid #b78b5f",
                  background:
                    "linear-gradient(180deg, rgba(255,250,240,0.22) 0%, rgba(210,175,118,0.08) 100%)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "82px",
                    height: "82px",
                    borderRadius: "999px",
                    marginBottom: "8px",
                    border: "2px solid #9d6c41",
                    color: "#fff8ea",
                    fontSize: "34px",
                    fontWeight: 700,
                    background:
                      "radial-gradient(circle at 30% 30%, #9f6e43 0%, #7a4b2d 70%, #673a21 100%)",
                    boxShadow:
                      "0 8px 18px rgba(80, 45, 20, 0.18), inset 0 0 0 2px rgba(255,255,255,0.14)",
                  }}
                >
                  Bùi
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    margin: "12px 0 4px",
                    color: "#8a5b35",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>❦</span>
                  <div
                    style={{
                      width: "90px",
                      height: "1px",
                      background: "#b88b5c",
                    }}
                  />
                  <span style={{ fontSize: "16px" }}>✦</span>
                  <div
                    style={{
                      width: "90px",
                      height: "1px",
                      background: "#b88b5c",
                    }}
                  />
                  <span style={{ fontSize: "18px" }}>❦</span>
                </div>

                <h1
                  style={{
                    margin: "10px 0 0",
                    fontSize: "64px",
                    lineHeight: 1.1,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    color: "#5a3017",
                  }}
                >
                  Gia Phả Họ Bùi
                </h1>

                <div
                  style={{
                    marginTop: "12px",
                    color: "#8a5a33",
                    fontSize: "16px",
                    letterSpacing: "3px",
                  }}
                >
                  GÌN GIỮ GIA PHONG • LƯU TRUYỀN HẬU THẾ
                </div>

                <nav
                  style={{
                    marginTop: "24px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(157,108,65,0.35)",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "26px",
                    flexWrap: "wrap",
                    color: "#6a4124",
                  }}
                >
                  <span>Trang chủ</span>
                  <span>•</span>
                  <span style={{ fontWeight: 700 }}>Cây gia phả</span>
                  <span>•</span>
                  <span>Các câu chuyện</span>
                  <span>•</span>
                  <span>Tin tức</span>
                </nav>
              </header>

              {/* Nội dung từng trang */}
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