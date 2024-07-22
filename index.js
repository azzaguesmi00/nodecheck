/*
console.log('hello World')

 function add(a,b){
    return (a+b);
 }
 console.log(add(3,6));

console.log('starting fs')
 //core module
 // ()=> = syntax function
const fs = require('fs')
fs.readdir('./',(error,files)=>{
    if (error){
        console.log(error)
    }
    else{
        console.log(files)
    }
    
})
console.log('executing fs');

//core module
fs.readFile('./package.json',{encoding:'utf8'},(error, file)=>{
    if (error){
        console.log(error)    
    }
    else{
        console.log(file)
    }
})
console.log('execute fs')*/

//third party module
const uuid = require('uuid')
function createUser(name ,age){
    return{
        name , 
        age ,
        id:uuid.v4()
    }
}
console.log(createUser('azza',26));
//module local
const myfunction = require('./myFunction')
console.log(myfunction);
console.log("my somme function returns ",myfunction.somme(5,6))
//CREATE SERVER
const http = require('http')
const server=http.createServer(function(req,res){
    res.write('intro to node js')
    res.end()
})

server.listen(5000,(error)=>{
    error?console.log(error):console.log('server is running in port 5000')
})