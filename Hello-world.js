/*
console. log("Hello, World!");

const http= require('http')
const server =http.createServer(function(req,response){
    response.write('Hello, World!')
    response.end()
})
server.listen(3000,(err)=>{
    err?console.log(err):console.log('Server running at http://localhost:3000');
})*/

const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello, World!',(error) => {
    error?console.log(error):console.log('File created and saved!')
})


fs.readFile('./welcome.txt', 'utf8', (error, data) => {
  
  error?console.log(err):console.log(data)
});