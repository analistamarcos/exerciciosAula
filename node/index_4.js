const http = require('http')
const fs = require('fs') //módulo

//cria o objeto server       //argumentos req,res
http.createServer(function(req,res){
    fs.readFile('template_1.html',function(err,data){

        if(err) throw err

   
    //escreve um cabeçalho e trata os caracteres especiais
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})   
    res.write(data)
    return res.end ()
    })

}).listen(8080) 
