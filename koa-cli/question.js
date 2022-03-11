import inquirer from "inquirer";

// 命令行交互

const packageName = {
  type: "input",
  name: "packageName",
  message: "请输入项目名称",
  validate(val) {
    if (val) return true
    return '请输入项目名称'
  }
}

// 多选
const middleware = {
  type: "checkbox",
  message: "选择middleware",
  name: "middleware",
  choices: [
    {
      name: "koaRouter",
    },
    {
      name: "koaStatic",
    },
    {
      name: "koaViews",
    },
    {
      name: "koaBody",
    },
  ],
};

const port = {
  type: "input",
  name: "port",
  message: "设置端口号",
  default() {
    return 3000;
  },
};


export default function () {
  return inquirer.prompt([
    packageName,
    middleware,
    port
  ]);
};


// const ans = await inquirer.prompt([
//   packageName,
//   middleware,
//   port
// ]);

// console.log(ans);