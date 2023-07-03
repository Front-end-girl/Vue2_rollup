import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/vue.js",
    format: "umd", // window 挂载Vue new Vue()
    name: "Vue", //全局变量Vue
    sourcemap: true, // 打包后代码出错映射到之前代码
  },
  plugins: [
    babel({ 
      exclude: "node_modules/**", 
    }), // 高级语法转化es5
    serve({
      port: "3000", //开启本地服务
      contentBase:'',//空字符串表示当前目录
      openPage:"/index.html"
    }),
  ],
};
