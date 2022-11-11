//Readable - чтение
//Writable - запись
// Duplex - для чтения и записи Readable + Writable
// Transform - такой же как и Duplex, но может изменить данные

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'),{})
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.on('end', () => console.log('Закончил чтитать'))
// stream.on('open', () =>console.log('Начал читать'))
// stream.on('error', (e) =>console.log(e))
//
// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for(let i = 1; i < 20; i++){
//     writableStream.write(i + '\n')
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

// const http = require('http')
//
// http.createServer((req, res)=>{
//     // req - readable stream (читаемый поток)
//     // res - writable stream (доступный для записи поток)
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//     // //Стрим закончится раньше чем пользователь скачает
//     // stream.on('data',chunk => res.write(chunk))
//     // stream.on('end',chunk => res.end())
//
//     strem.pipe((res))
// })

