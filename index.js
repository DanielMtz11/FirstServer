// console.log("hi bich");

//importar modulo http
const http = require("http");//common modules: ecma script modues


//primer parametro: objeto de peticion
//segundo parametro: objeto de respuesta
const app = http.createServer((requets, response)=>{

    response.end("this is my first server with node.js")
});

const PORT = 8000;

app.listen(PORT);

console.log(`servidor escuchado en el puerto ${PORT}`);
