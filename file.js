/*
 * @Description: description
 * @Author: kunyu.cao@hlifetech.com
 * @Date: 2021-12-28 17:59:01
 * @LastEditors: kunyu.cao@hlifetech.com
 * @LastEditTime: 2021-12-28 18:07:09
 */

const files = require.context("/docs/guide", false, /\.md$/)
console.log(files);
const children = {};
files.keys().forEach(key => {
  const name = key.replace(/\.md/g, "")
  children[name] = "/guide/" + name
})
console.log(children);
