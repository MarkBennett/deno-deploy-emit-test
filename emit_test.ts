import { bundle, emit } from "https://deno.land/x/emit@0.7.0/mod.ts";

const url = new URL("./testdata/mod.ts", import.meta.url);
const result = await emit(url);

const code = result[url.href];
console.log(code.includes("export default function hello()"));
console.log("result = ", result);

import remarkPresetLintConsistent from "remark-preset-lint-consistent"; // Lint rules to check for consistent markdown.
import { reporter } from "vfile-reporter";
import { compile } from "@mdx-js/mdx";

const file = await compile("*like this* or _like this_?", {
  providerImportSource: "@mdx-js/preact",
  remarkPlugins: [remarkPresetLintConsistent],
});

console.error(reporter(file));
console.log("file.value = ", file.value);

// Write the compiled JS to a file
const encoder = new TextEncoder();
const data = encoder.encode(file.value.toString());
const output_file = await Deno.open("markdown_component.js", { write: true });
await Deno.write(output_file.rid, data);
Deno.close(output_file.rid);

const module = await import("./markdown_component.js");
console.log("module = ", module);
