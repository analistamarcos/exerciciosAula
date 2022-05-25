    console.log("teste")

    let inputNumber=document.querySelector("#qtd_telas") //variável let fornece a informação, recebe número
    let resultadoTelas=document.querySelector("#resultado_telas")// imprime na tela, recebe texto
    let btCalcular=document.querySelector("#bt_calcular")// variável botão para o cálculo

    function  calcular(){
        let result = (inputNumber.value * 9.9).toFixed(2)
        result = result.replace('.',',')//segunda forma de calcular
        console.log(result)//mostrando no console

        resultadoTelas.innerHTML= 'R$' + result
       // resultadoTelas.innerHTML=(inputNumber.value * 9.9).toFixed(2)//para 2 digitos depois da virgula
    }

    function  calcularPorcentagem(){
        let pct= (inputNumber.value * 9.9) * 0.07 // 7%
        resultadoTelas.innerHTML= 'R$' + (inputNumber.value * 9.9 + pct).toFixed(2)
    }
            //adicionar a uma lista
    inputNumber.addEventListener('change',calcular) //change, quando muda na seta ele calcula        
    inputNumber.addEventListener('keyup',calcular)//keyup, quando digita calcula
    btCalcular.addEventListener('click',calcularPorcentagem)

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // CONTROLE SOBRE SELECT ++++++++++++++++++++++++++
    let categorias=document.querySelector("#categorias")
    let resultadoCategorias=document.querySelector("#resultado_categorias")
    let boxInfo=document.querySelector("#box_info")


     // exibeInfo insere a imagem conforme a escolha do select
    function exibeInfo(foto){
        let img = new Image()
        img.src=foto
        img.width='150'      
        boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null //desde que a imagem do filho for maior que zero, remova-a        
       // document.querySelector("#box_info").innerHTML='' // faço isso para imagem não ficar repetindo, mas apago tudo        
        boxInfo.appendChild(img)
        //console.log(boxInfo.firstChild.constructor)

    }
    // exibirCategoria é a tomada de decisão relativa a escolha do select
    function exibirCategoria(){
        resultadoCategorias.innerHTML=categorias.value    
        switch(categorias.selectedIndex) {
            case 1 :
                 exibeInfo('imagens/quem-somos-nos.jpg')
            break  
            case 2 :
                 exibeInfo('imagens/mick.jpg')
            break   
            case 3 :
                 exibeInfo('imagens/pequeno-principe.jpg')
            break                        
        }  
    }

    categorias.addEventListener('change',exibirCategoria)