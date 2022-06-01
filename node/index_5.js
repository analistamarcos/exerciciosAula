const http = require('http')
const url = require('url') //módulo
const fs = require ('fs')

//cria o objeto server       //argumentos req,res
http.createServer(function(req,res){
     
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true)       
    let rota = urlProp.pathname //é o que se digita no site
    
    fs.readFile(`.${rota}`,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type': 'text/html;charset=utf-8'})
           return  res.end("<h2>Ops! Não encontramos o que você procura...</h2>")
        }
  
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.write(data)   //está chamando a variável no ${host}
    return res.end()//finaliza a resposta
})

}).listen(8080)//habilita a porta 8080 (http:localhost:8080/?titulo=Missão Impossível&ator=Tom Cruise



