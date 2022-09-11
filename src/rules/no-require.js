module.exports = {
  create(ctx) {
    return {
      VariableDeclaration(node) {
        node.declarations.forEach((d) => {
          if (
            d.id.name === "_" &&
            d.init.type === "CallExpression" &&
            d.init.callee.name === "require"
          ) {
            ctx.report({
              node,
              message: "Prefer importing single functions over a full FP library"
            });
          }
        });
      },
      ImportDeclaration(node) {
        node.specifiers.forEach(function (specifier) {
          if (
            specifier.type == "ImportDefaultSpecifier" &&
            specifier.local.type == "Identifier" &&
            specifier.local.name == "_"
          ) {
            ctx.report({
              node,
              message: "Prefer importing single functions over a full FP library"
            });
          }
        });
      },
    };
  },
};
