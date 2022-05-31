const fs = require ('fs')

fs.writeFile('leiame.txt','Aula 31/05 Nodejs',function(err){
    if(err) throw err//se entrar erro exibe erro
    console.log('Arquivo Criado')
})