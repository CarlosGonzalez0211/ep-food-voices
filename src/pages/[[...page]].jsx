import { BuilderComponent, builder } from "@builder.io/react";
import "../builder.registry";

if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

export default function Page({ page, error }) {
  // Show fallback content if no Builder.io API key or content
  if (error || !process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
    return (
      <div style={{
        pointerEvents: "auto",
        color: "rgb(237, 237, 237)",
        backgroundColor: "rgb(10, 10, 10)",
        font: "400 16px Arial, Helvetica, sans-serif"
      }}>
        <div style={{
          position: "relative",
          marginTop: "20px",
          height: "auto"
        }}>
          Home Page
          <br />
          <br />
        </div>
        <div style={{
          fontWeight: "400",
          pointerEvents: "auto"
        }}>
          <div style={{
            fontWeight: "400",
            pointerEvents: "auto"
          }}>
            <div style={{
              fontWeight: "400",
              pointerEvents: "auto"
            }}>
              <div style={{
                fontWeight: "400",
                pointerEvents: "auto"
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <BuilderComponent model="page" content={page} />;
}

export async function getStaticProps({ params }) {
  // Return fallback if no API key
  if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
    return {
      props: { page: null, error: 'API key not configured' },
      revalidate: 5,
    };
  }

  try {
    const page = await builder
      .get("page", { url: "/" + (params?.page?.join("/") || "") })
      .toPromise();

    return {
      props: { page: page || null },
      revalidate: 5,
    };
  } catch (error) {
    console.error('Builder.io fetch error:', error);
    return {
      props: { page: null, error: error.message },
      revalidate: 5,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
