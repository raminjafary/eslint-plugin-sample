const r = require("../src");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
});

ruleTester.run("no-require", r.rules["no-require"], {
  valid: [
    "var $ = require('jquery');",
    "var filter = require('lodash/fp/filter')",
    "import $ from 'jquery';",
    "import { filter } from 'lodash/fp'",
  ],
  invalid: [
    {
      code: "var _ = require('your favorite fp library');",
      // output: "var foo = require('foo/f');",
      errors: [
        {
          message: "Prefer importing single functions over a full FP library",
          type: "VariableDeclaration",
        },
      ],
    },
    {
      code: "import _ from 'lodash';",
      // output: "import foo from 'lodash';",
      errors: [
        {
          message: "Prefer importing single functions over a full FP library",
          type: "ImportDeclaration",
        },
      ],
    },
  ],
});
