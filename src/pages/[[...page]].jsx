import { BuilderComponent, builder } from "@builder.io/react";
import "../builder.registry";

if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

export default function Page({ page, error }) {
  // Show fallback content if no Builder.io API key or content
  if (error || !process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui' }}>
        <h1>Welcome to Builder.io App</h1>
        <p>
          {!process.env.NEXT_PUBLIC_BUILDER_API_KEY
            ? 'Please configure your Builder.io API key to load content.'
            : 'Content is being loaded...'}
        </p>
        <div style={{ marginTop: '2rem' }}>
          <p>To configure Builder.io:</p>
          <ol style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>Get your API key from <a href="https://builder.io" target="_blank">builder.io</a></li>
            <li>Set NEXT_PUBLIC_BUILDER_API_KEY environment variable</li>
            <li>Restart the development server</li>
          </ol>
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
