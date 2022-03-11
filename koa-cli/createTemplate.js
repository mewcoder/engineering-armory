import ejs from "ejs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import prettier from "prettier";
/**
 * 使用 ejs 模板
 *  根据条件渲染模板
 */


const __dirname = path.dirname(fileURLToPath(import.meta.url)); // ESM没有dirname

export function createIndex(config) {

  const templateCode = fs.readFileSync(
    path.resolve(__dirname, "./template/index.ejs")
  );

  const code = ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    port: config.port,
  });

  return prettier.format(code, { parser: "babel" }); // 格式化代码
};


export function createPackage(config) {

  const templateCode = fs.readFileSync(
    path.resolve(__dirname, "./template/package.ejs")
  );

  const code = ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    packageName: config.packageName,
  });

  return prettier.format(code, { parser: "json" });
};
