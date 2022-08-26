/*@jsxRuntime automatic @jsxImportSource react*/
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMDXComponents as _provideComponents } from "@mdx-js/preact";
function _createMdxContent(props) {
  const _components = Object.assign(
    {
      p: "p",
      em: "em",
    },
    _provideComponents(),
    props.components
  );
  return _jsxs(_components.p, {
    children: [
      _jsx(_components.em, {
        children: "like this",
      }),
      " or ",
      _jsx(_components.em, {
        children: "like this",
      }),
      "?",
    ],
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign(
    {},
    _provideComponents(),
    props.components
  );
  return MDXLayout
    ? _jsx(
        MDXLayout,
        Object.assign({}, props, {
          children: _jsx(_createMdxContent, props),
        })
      )
    : _createMdxContent(props);
}
export default MDXContent;
