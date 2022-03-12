import { remark } from "remark";
import html from "remark-html";

export default function (markdown) {
  const callback = this.async();
  console.log('md:', markdown)
  remark()
    .use(html)
    .process(markdown, (err, file) => {
      if (err) {
        callback(err, null);
        return;
      }
      console.log('result:', file);
      callback(null, `export default \`${String(file)}\``);
    });
};
