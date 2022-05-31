const fs = require('fs')

fs.unlink('leiame.txt',function(err){
    if(err)throw errconsole.log('Arquivo excluido com sucesso!')
})