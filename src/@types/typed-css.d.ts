// typed-css.d.ts
// scss模块声明
declare module '*.scss' {
    const content: { [key: string]: any }
    export = content
}
