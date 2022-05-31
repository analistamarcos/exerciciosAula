const fs = require('fs')//file system

fs.appendFile('leiame.txt','Criando um servidor!',function(err){
    if(err)throw err //se der problema, mostre o problema
    console.log('Arquivo atualizado')
})