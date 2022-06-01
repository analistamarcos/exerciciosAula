const express = require('express')
const app = express()//Aqui eu chamo o express acima como se fosse uma função
const port = 3000

//Gera as urls estáticas das imagens
app.use(express.static('node'))
app.use("/imagens",express.static("imagens"))

//index (Quando criar o html diretamente no res.end(insira o writeHead)
app.get("/",function(req,res){//recupera informação do servidor e joga na tela
  // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
   //res.end('<h1>Página Home</h1>')
   res.sendFile(`${__dirname}/template_1.html`)
})

app.get("/contato",(req,res)=>{//recupera informação do servidor e joga na tela    
    res.sendFile(`${__dirname}/template_1_contato.html`)
 })

 app.get("/sobre",function(req,res){//recupera informação do servidor e joga na tela
     
    res.sendFile(`${__dirname}/template_1_sobre.html`)
 })

app.listen(port,()=> console.log(`Servidor rodando na porta ${port} - ${__dirname}`))//__dirname é o caminho        