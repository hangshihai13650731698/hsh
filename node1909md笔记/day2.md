 # fs
里面有同步和异步的方法

如果你使用readFile方法，那就是异步，它需要接受一个回调函数，让1和2先执行，就不会在读文件时候花费时间等待，等到文件读完，再执行回调函数获取数据

读出来的数据是二进制，所以需要借助全局的buffer模块，把二进制转化为字符串

const fs = require('fs')
// 异步 async 默认支持异步
// fs.readFile()
// 同步 sync
// fs.readFileSync()

// 读取./input.txt文件的内容，由于读取需要时间，所以Node设计为异步
console.log(1)
// 读取的是特殊的流文件(视频，音频，图片
// 读取的数据都一般以二进制的形式给你展现
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    // 二进制数据 JSON字符串 buufer二进制转字符串
    console.log(data.toString());
});
// 导出的是一个fs对象
console.log(2)
同步读取

const fs = require('fs')
console.log(1)
// 如果数据量很大，会卡在这个地方
const data = fs.readFileSync('./input.txt')
console.log(data.toString())
console.log(2)
gulp 合并，压缩，转化，重命名

sass -> css 预编译
es6 -> es5 转换语法
less -> css 预编译
压缩html，css，js
gulp.src(引入).pipe(处理).dest(导出)

先把文件读取出来

// gulp.src
fs.readFile()
通过正则或者字符串的方法，然后处理代码(pipe)

// gulp.dest
fs.writeFile()
dist处理后的文件
src需要处理的源文件
gulp.js我们处理文件的逻辑
下面这些代码展示的就是Gulp的原理，Gulp依赖于Node，需要它的系统改写文件的权限

const {
    readFile,
    writeFile
} = require('fs')

// 读取这份源文件，读出来之后需要加工文件
const readCode = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString())
        })
    })
}
// 删除console.log('xxx')
const removeConsole = (code) => {
    let output = code.replace(/console.log\([0-9a-z'\[,\s\]]+\)/g, '')
    return output
}
const let2var = (code)=>{
    return code.replace(/let/g, 'var')
}
- // 写入代码
const writeCode = (path, code) => {
    return new Promise((resolve, reject) => {
        writeFile(path, code, (err) => {
            err ? reject(err) : resolve()
        })
    })
}
; (async () => {
    let code = await readCode('./src/index.js')
    code = removeConsole(code)
    code = let2var(code)
    await writeCode('./dist/index.js', code)
    // console.log(code)
})()
# http
- http模块

require('http')