#!/usr/bin/env node

// shebang

import fs from 'fs';
import path from 'path';
import chalk from 'chalk' // 控制台颜色
import { execa } from 'execa';
import { createIndex, createPackage } from './createTemplate.js'
import question from './question.js'


// 获取用户输入的配置
const answer = await question()

const config = getConfig(answer)

// 1. 创建项目文件夹
console.log(chalk.green(`创建项目文件夹:${config.packageName}`))
fs.mkdirSync(getRootPath())


// 2. 创建index.js
console.log(chalk.green(`创建 index.js`))
fs.writeFileSync(`${getRootPath()}/index.js`, createIndex(config));


// 3. 创建package.json
console.log(chalk.green(`创建 package.json`))
fs.writeFileSync(`${getRootPath()}/package.json`, createPackage(config));


// 4. 安装依赖
console.log(chalk.green(`安装依赖........`))
execa("npm i", {
  cwd: getRootPath(), // 指定路径
  stdio: [2, 2, 2], // 子进程控制台输出到父进程
});

function getRootPath() {
  return path.resolve(process.cwd(), config.packageName)
}


function haveMiddleware(name) {
  return answer.middleware.indexOf(name) !== -1;
};

// 转换配置
function getConfig(answer) {
  const inputConfig = {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      static: haveMiddleware("koaStatic"),
      views: haveMiddleware("koaViews"),
      router: haveMiddleware("koaRouter"),
      body: haveMiddleware("koaBody"),
    },
  };
  return inputConfig;
}
