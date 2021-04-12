// module.exports = {
//   presets: ["@vue/cli-plugin-babel/preset"],
// };
module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"]
  presets: [["@vue/app", { useBuiltIns: "entry" }]]
};