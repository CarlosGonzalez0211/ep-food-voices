import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("./components/Header")),
  {
    name: "Header",
    inputs: []
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Counter")),
  {
    name: "Counter",
    inputs: [{ name: "initialCount", type: "number" }]
  }
);
