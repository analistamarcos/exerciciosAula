    
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//     

     // dia 27 Criação da lógica de chamada com nome, telefone e email.

     // ---------PARA REDUZIR O CÓDIGO FAZER VARIÁVEIS E SUBSTITUIR CÓDIGOS LONGOS---------------

     a=0 // criando um laço com um contador através do for

     for (key in localStorage){ //estou procurando se tem chamada na chave
        console.log(key.indexof('chamada'))// oque ele me devolve?  
       // key;indexOf('chamada') == 0 ? console.log(key) : null 
       //console.log(key)
       //console.log(a)
        a++   
             
     }

     console.log(localStorage.length)
     for(i=0;i<localStorage.length;i++){
         var chave = localStorage.key(i)
         if(chave.includes('chamada'))
         {
         console.log(chave)
       //  var valor = localStorage.getItem(chave).split(',')
         console.log(valor)
         
         for(y=0;y<valor.length;y++){
         console.log(valor[y])
          //console.log('Nome: ' + valor[0])
         }//for dos valores
        }// if chamada
      }//for principal



         //nome da chave
         //chave.indexOf('chamada') == 0 ? console.log(chave):null
         //valor chave
         //chave.indexOf('chamada') == 0 ? console.log(localStorage.getItem(chave).split(',').length):null
        //localStorage.key(i).indexOf('chamada') == 0 ? console.log(localStorage.key(i)):null
        // indexOf faz uma busca por um caracter ou conjunto. Quando ele encontra, traz um número positivo, 
        // quando não encontra, traz -1
console.log("teste")