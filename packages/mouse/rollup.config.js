import { nodeResolve } from "@rollup/plugin-node-resolve" // 识别node_modules中的依赖包
import commonjs from "@rollup/plugin-commonjs" // node_modules中依赖大部分是commonjs，该插件用于将commonjs转为ES6 Module
import typescript from '@rollup/plugin-typescript'
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json"

export default {
    input: "src/mouse.tsx",
    output: [
        {
            file: pkg.main,
            format: "es",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "cjs",
            sourcemap: true
        },
        {
            name: "index",
            file: pkg.browser,
            format: "umd",
            sourcemap: true,
            globals: {
                react: "React",
                reactDOM: "react-dom"
            }
        },
    ],
    external: [
        "react",
        "react-dom"
    ],
    plugins: [
        typescript(),
        commonjs(),
        nodeResolve(),
        // terser()
    ]
}