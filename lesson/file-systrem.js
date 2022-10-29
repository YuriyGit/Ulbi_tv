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

fs.writeFile(path.resolve(__dirname, 'test.txt'), '43 fghg 5 6 6 654 43 2',(err)=>{
    if(err){
        throw err
    }
})