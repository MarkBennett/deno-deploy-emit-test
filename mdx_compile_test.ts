// Compile the MDX to a Preact component.
import remarkPresetLintConsistent from "remark-preset-lint-consistent"; // Lint rules to check for consistent markdown.
import { reporter } from "vfile-reporter";
import { compile } from "@mdx-js/mdx";

const file = await compile("*like this* or _like this_?", {
  providerImportSource: "@mdx-js/preact",
  remarkPlugins: [remarkPresetLintConsistent],
});

console.error(reporter(file));

// Write the compiled JS to a file
Deno.writeTextFile("markdown_component.js", file.value.toString());

// Dynamically load the generated component
const { default: mdxComponent } = await import("./markdown_component.js");
console.log("mdxComponent = ", mdxComponent);
