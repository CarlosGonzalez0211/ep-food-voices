import { RawImg } from ".";

export default function MyComponent(props) {
  return (
    <div
      style={{
        pointerEvents: "auto",
        color: "rgb(237, 237, 237)",
        backgroundColor: "rgb(10, 10, 10)",
        font: "400 16px Arial, Helvetica, sans-serif ",
      }}
    >
      <div
        style={{
          fontWeight: "400",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            position: "relative",
            marginTop: "20px",
            height: "auto",
          }}
        >
          This is the Homepage
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            fontFamily: 'Geist, "Geist Fallback"',
            fontWeight: "400",
            gap: "64px",
            gridTemplate: "20px 1fr 20px / none",
            gridTemplateRows: "20px 1fr 20px",
            justifyItems: "center",
            minHeight: "1006px",
            pointerEvents: "auto",
            padding: "80px",
          }}
        >
          <footer
            style={{
              display: "flex",
              fontWeight: "400",
              gap: "24px",
              gridArea: "3",
              gridRow: "3",
              pointerEvents: "auto",
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "400",
                gap: "8px",
                pointerEvents: "auto",
              }}
            >
              <RawImg
                aria-hidden="true"
                alt="File icon"
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                image="https://3e279fc6a40f4f6eba58cd36d31dc9ad-e72ad7ca880b4250b2b198745.fly.dev/file.svg"
                style={{
                  display: "block",
                  aspectRatio: "auto 16 / 16",
                  color: "rgba(0, 0, 0, 0)",
                  fontWeight: "400",
                  height: "16px",
                  width: "16px",
                  pointerEvents: "auto",
                }}
              />
              Learn
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "400",
                gap: "8px",
                pointerEvents: "auto",
              }}
            >
              <RawImg
                aria-hidden="true"
                alt="Window icon"
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                image="https://3e279fc6a40f4f6eba58cd36d31dc9ad-e72ad7ca880b4250b2b198745.fly.dev/window.svg"
                style={{
                  display: "block",
                  aspectRatio: "auto 16 / 16",
                  color: "rgba(0, 0, 0, 0)",
                  fontWeight: "400",
                  height: "16px",
                  width: "16px",
                  pointerEvents: "auto",
                }}
              />
              Examples
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "400",
                gap: "8px",
                pointerEvents: "auto",
              }}
            >
              <RawImg
                aria-hidden="true"
                alt="Globe icon"
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                image="https://3e279fc6a40f4f6eba58cd36d31dc9ad-e72ad7ca880b4250b2b198745.fly.dev/globe.svg"
                style={{
                  display: "block",
                  aspectRatio: "auto 16 / 16",
                  color: "rgba(0, 0, 0, 0)",
                  fontWeight: "400",
                  height: "16px",
                  width: "16px",
                  pointerEvents: "auto",
                }}
              />
              Go to nextjs.org →
            </a>
          </footer>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            flexDirection: "column",
            flexGrow: "1",
            fontWeight: "400",
            maxWidth: "1200px",
            minHeight: "100px",
            position: "relative",
            width: "100%",
            pointerEvents: "auto",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "400",
              marginTop: "20px",
              position: "relative",
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                fontWeight: "400",
                gap: "20px",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  width: "50%",
                  pointerEvents: "auto",
                }}
              >
                <RawImg
                  loading="lazy"
                  alt=""
                  image="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2F594dad2075fd46cfb1b0569525c91cf0"
                  style={{
                    display: "block",
                    aspectRatio: "1 / 1",
                    fontWeight: "400",
                    marginTop: "20px",
                    minHeight: "20px",
                    minWidth: "20px",
                    objectFit: "cover",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                />
              </div>
              <div
                style={{
                  fontWeight: "400",
                  position: "relative",
                  pointerEvents: "auto",
                  marginLeft: "20px",
                  width: "50%",
                  paddingTop: "20px",
                }}
              >
                "Historical recipes humanize the past."
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            flexDirection: "column",
            flexGrow: "1",
            fontWeight: "400",
            maxWidth: "1200px",
            minHeight: "100px",
            position: "relative",
            width: "100%",
            pointerEvents: "auto",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "400",
              marginTop: "20px",
              position: "relative",
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                fontWeight: "400",
                gap: "20px",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  width: "50%",
                  pointerEvents: "auto",
                }}
              >
                <RawImg
                  loading="lazy"
                  alt=""
                  image="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2Fba62e9019a3d4b5fa797b6d51999c057"
                  style={{
                    display: "block",
                    aspectRatio: "1 / 1",
                    fontWeight: "400",
                    marginTop: "20px",
                    minHeight: "20px",
                    minWidth: "20px",
                    objectFit: "cover",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                />
              </div>
              <div
                style={{
                  fontWeight: "400",
                  position: "relative",
                  pointerEvents: "auto",
                  marginLeft: "20px",
                  width: "50%",
                  paddingTop: "20px",
                }}
              >
                <div>
                  "creating opportunities while teaching with food"
                </div>
                <div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            flexDirection: "column",
            flexGrow: "1",
            fontWeight: "400",
            maxWidth: "1200px",
            minHeight: "100px",
            position: "relative",
            width: "100%",
            pointerEvents: "auto",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "400",
              marginTop: "20px",
              position: "relative",
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                fontWeight: "400",
                gap: "20px",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "400",
                  width: "50%",
                  pointerEvents: "auto",
                }}
              >
                <RawImg
                  loading="lazy"
                  alt=""
                  image="https://cdn.builder.io/api/v1/image/assets%2F6f41939355d9410ba9233715debe7bb0%2Fcbebf84fbf684a94ad0562adbd67a850"
                  style={{
                    display: "block",
                    aspectRatio: "1 / 1",
                    fontWeight: "400",
                    marginTop: "20px",
                    minHeight: "20px",
                    minWidth: "20px",
                    objectFit: "cover",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                />
              </div>
              <div
                style={{
                  fontWeight: "400",
                  position: "relative",
                  pointerEvents: "auto",
                  marginLeft: "20px",
                  width: "50%",
                  paddingTop: "20px",
                }}
              >
                <div>
                  <div>"I'm a damn good chef, and I show it."</div>
                  <div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
