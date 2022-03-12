import { remark } from "remark";
import html from "remark-html";

export function md2html(options) {
  return {
    transform(code, id) {
      if (id.endsWith("md")) {
        console.log("code:", code);
        return new Promise((resolve, reject) => {
          remark()
            .use(html, options)
            .process(code, (err, file) => {
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
