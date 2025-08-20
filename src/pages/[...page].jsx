import { BuilderComponent, builder } from "@builder.io/react";
import "../builder.registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function Page({ page }) {
  return <BuilderComponent model="page" content={page} />;
}

export async function getStaticProps({ params }) {
  const page = await builder
    .get("page", { url: "/" + (params?.page?.join("/") || "") })
    .toPromise();

  return {
    props: { page: page || null },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}