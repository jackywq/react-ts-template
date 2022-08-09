/* 编译组件 */
const fs = require('fs-extra')
const babel = require('@babel/core')
const path = require('path')
const less = require('less')

const esDir = path.join(__dirname, '../es')
const esComDir = path.join(__dirname, '../es/components')

const compDir = path.join(__dirname, '../src/components')

const babelEsConfig = {
    configFile: path.join(__dirname, '../babel.config.es.json'),
}

const scriptRegExp = /\.(js|jsx|ts|tsx)$/
const lessRegExp = /\.less$/
const isScript = path => scriptRegExp.test(path)
const isLess = path => lessRegExp.test(path)

/**
 * 是否是文件目录
 * @param {string} dir
 */
const isDir = dir => fs.lstatSync(dir).isDirectory()

/**
 * 编译指定目录
 * @param {string} dir
 */
function compile(dir) {
    const files = fs.readdirSync(dir)

    files.forEach(file => {
        const filePath = path.join(dir, file)

        // scan dir
        if (isDir(filePath)) {
            return compile(filePath)
        }
        // compile jsx to js
        if (isScript(file)) {
            const { code } = babel.transformFileSync(filePath, babelEsConfig)
            // jsx中.less引入方式改成.css
            // const newCode = code.replace(/\.less/g, '.css')

            fs.removeSync(filePath)
            fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code)
        }

        // compile less to css
        // if (isLess(file)) {
        //     less.render(
        //         fs.readFileSync(filePath).toString(),
        //         {
        //             compress: true,
        //         },
        //         // eslint-disable-next-line func-names
        //         function (e, output) {
        //             fs.removeSync(filePath)
        //             fs.outputFileSync(filePath.replace(lessRegExp, '.css'), output.css)
        //         }
        //     )
        // }
    })
}

// 清除目录
fs.emptyDirSync(esDir)

// copy components to es
fs.copySync(compDir, esComDir)

compile(esDir)
console.log('es.js文件构建完成')
