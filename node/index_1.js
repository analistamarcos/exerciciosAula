const http = require('http')

//cria o objeto server       //argumentos req,res
http.createServer(function(req,res){
    //escreve um cabeçalho e trata os caracteres especiais
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    let infoUrl = req.url
    res.write(`<h1>Página: <b>${infoUrl} </b></h1> <p>Hello World Node JS - Rio de Janeiro, 31 de Maio de 2022</p>`)   
    res.end()//finaliza a resposta
}).listen(8080)//habilita a porta 8080 (http:localhost:8080)

