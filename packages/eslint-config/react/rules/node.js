import nodePlugin from "eslint-plugin-n";

const essentialNodeRules = {
  "n/no-callback-literal": "off",
};

const node = [
  {
    plugins: {
      n: nodePlugin,
    },
    rules: essentialNodeRules,
  },
];

export default node;
