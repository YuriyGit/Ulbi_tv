const fs = require('fs')
const path = require('path')
// console.log('START')
// fs.mkdir(path.resolve(__dirname,'dir' ),(err) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('Папка создана')
// }) //создать папку dir
// console.log('END')
//
// fs.rmdir(path.resolve(__dirname,'dir'),(err)=>{ // удалит папку dir
//     if(err){
//         throw err;
//     }
// })
//
// fs.writeFile(path.resolve(__dirname, 'test.txt'), '43 f 43 2', (err) => {
//     if (err) {
//         console.log('err')
//     }
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'rrrrrrrrrrrrrrrr', (err) => {
//         if (err) {
//             console.log('err')
//         }
//         console.log("файл создан")
//     })
//     console.log("файл создан")
// })
//
// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'rrrrrrrrrrrrrrrr', (err) => {
//     if (err) {
//         console.log('err')
//     }
//     console.log("файл создан")
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const rmFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, "test.txt"), "data ")
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123 '))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456 '))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789 '))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
// rmFileAsync(path.resolve(__dirname,'test.txt'))
//     .then(console.log('File was remove!'))

// const text = process.env.TEXT || ''

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then((data) => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
//     .then(()=>rmFileAsync(path.resolve(__dirname, 'text.txt')))
