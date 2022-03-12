import { remark } from "remark";
import html from "remark-html";
import fs from "fs";

export function md2html(options) {
  return {
    load(path) {
      // 这里的 path 就是 import 的路径
      if (path.endsWith("md")) {
        console.log("path: ", path);
        const markdown = fs.readFileSync(path, "utf-8");
        console.log("markdown: ", markdown);
        return new Promise((resolve, reject) => {
          remark()
            .use(html, options)
            .process(markdown, (err, file) => {
              if (err) {
                reject(err);
                return;
              }
              resolve(`export default \`${String(file.value)}\``);
            });
        });
      }
    },
  };
}
