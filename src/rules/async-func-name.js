module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Prevents variables from being named with an underscore prefix",
      recommended: false,
      url: null,
    },
    fixable: true,
    schema: [],
  },
  create(ctx) {
    return {
      FunctionDeclaration(node) {
        if (node.async && !/Async$/.test(node.id.name)) {
          ctx.report({
            node,
            message: "Async function name must end in 'Async'",
            fix(fixer) {
              return fixer.insertTextAfter(node.id, "Async");
            },
          });
        }
      },
    };
  },
};
