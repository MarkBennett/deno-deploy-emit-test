import { bundle } from "https://deno.land/x/emit/mod.ts";
const result = await bundle(
  new URL("https://deno.land/std@0.140.0/examples/chat/server.ts")
);

const { code } = result;
console.log(code);
