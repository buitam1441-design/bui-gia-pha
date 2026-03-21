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

          /* FONT MỚI - DỄ ĐỌC HƠN */
          fontFamily: "Inter, Segoe UI, Arial, sans-serif",

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
                boxShadow: "inset 0 0 0 3px rgba(124,79,41,0.12)",
              }}
            >
              {/* HEADER */}

              <header
                style={{
                  textAlign: "center",
                  padding: "30px 20px 26px",
                  borderBottom: "1px solid #b78b5f",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Gia Phả */}

                  <div
                    style={{
                      fontSize: "clamp(42px,6vw,74px)",
                      fontWeight: 700,
                      letterSpacing: "2px",
                    }}
                  >
                    Gia Phả
                  </div>

                  {/* LOGO */}

                  <div
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "-40px",
                    }}
                  >
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle at 30% 30%, #c89461 0%, #9b643c 55%, #6a3d23 100%)",
                        border: "4px solid #cfa06e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff6e8",
                        fontSize: "36px",
                        fontWeight: 700,
                        boxShadow:
                          "0 10px 20px rgba(70,40,15,0.18), inset 0 0 0 2px rgba(255,255,255,0.15)",
                      }}
                    >
                      Bùi
                    </div>
                  </div>

                  {/* Họ Bùi */}

                  <div
                    style={{
                      fontSize: "clamp(42px,6vw,74px)",
                      fontWeight: 700,
                      letterSpacing: "2px",
                    }}
                  >
                    Họ Bùi
                  </div>
                </div>

                {/* đường trang trí */}

                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    color: "#9a7448",
                  }}
                >
                  <div
                    style={{
                      width: "260px",
                      height: "1px",
                      background: "#b88b5c",
                    }}
                  />

                  <span>❦ ✦ ❧ ✦ ❦</span>

                  <div
                    style={{
                      width: "260px",
                      height: "1px",
                      background: "#b88b5c",
                    }}
                  />
                </div>

                {/* slogan */}

                <div
                  style={{
                    marginTop: "16px",
                    color: "#8a5a33",
                    fontSize: "15px",
                    letterSpacing: "3px",
                  }}
                >
                  GÌN GIỮ GIA PHONG • LƯU TRUYỀN HẬU THẾ
                </div>
              </header>

              {/* CONTENT */}

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