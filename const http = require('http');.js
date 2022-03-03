const http = require('http'); 
const fs = require("fs");

const hostname = '127.0.0.1'; 
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fs.writeFile("hello.txt", "Hello мир!", function(error){
if(error) throw error; // если возникла ошибка
console.log("Асинхронная запись файла завершена. Содержимое файла:");
});
let data = fs.readFileSync("hello.txt", "utf8");
console.log(data); 
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});