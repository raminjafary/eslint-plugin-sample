module.exports = {
  create(ctx) {
    return {
      Identifier(node) {
        if (
          node.parent.init &&
          node.parent.init.type === "ArrowFunctionExpression"
        ) {
          const { include, exclude } = ctx.options[0] || {};

          const prefix = [...include, ...rulePrefix].sort();

          if (isValidName(node.name, { prefix, exclude })) {
            ctx.report(
              node,
              `${node.name} should start with ${prefix.join(", ")}.`
            );
          }
        }
      },
    };
  },
};

const rulePrefix = ["is", "pre", "on", "post", "get", "set"];

function isValidName(name, { prefix, exclude }) {
  const isValid = (prefix) => name.indexOf(prefix) > -1;
  return exclude.some(isValid) || prefix.some(isValid);
}
