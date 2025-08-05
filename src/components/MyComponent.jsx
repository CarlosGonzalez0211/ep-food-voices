import { RawImg } from "@components";

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
      </div>
    </div>
  );
}
