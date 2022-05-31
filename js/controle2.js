    console.log("teste")

    let inputNumber=document.querySelector("#qtd_telas") //variável let fornece a informação, recebe número
    let resultadoTelas=document.querySelector("#resultado_telas")// imprime na tela, recebe texto
    let btCalcular=document.querySelector("#bt_calcular")// variável botão para o cálculo

    function  calcular(){ //qt telas
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


    //OBJETOS JAVASCRIPT (Propriedades = variaveis, métodos e funções)





   // EXEMPLO 1

    let movel={
        nome:"Sofá",
        lugares:3
    }
    console.log(movel.sofa)//sofá
    console.log(movel.constructor)//objeto

     //Exemplo 2
    function animal(especie,porte,nome){
        return{ // função que retorna um objeto(ela própria é um objeto)
            _especie:especie, //propriedade/valor
            _porte:porte,
            _nome:nome      //propriedade/valor
        }
    }

    let mike = animal("York Shire","Pequeno"," Mike") 
    console.log("Meu pet se chama" + mike._nome)
    console.log(mike.constructor) //

        //Exemplo 3 (Paradgma de criar uma herança com classe)

    function Produto(nome,tipo){
        this._nome = nome
        this._tipo = tipo
    }
    function MaquinaCafe(cor,voltagem){
        this._cor=cor
        this._voltagem=voltagem
    }
    //instancia
    let produto_1= new Produto("Geladeira","Eletrodoméstico")
    let maquinaCafe_1 = new MaquinaCafe("vermelha","220")
    console.log(produto_1 instanceof MaquinaCafe)//false
    console.log(produto_1 instanceof Produto)//true
    console.log(produto_1._nome)
    console.log(produto_1.constructor)//através do constructor você descobre se são objetos nativos
                                    // ou foram feitos por função
                                    // se é nativo só usa variavel = se não for tem que aplicar herança
                                    // como new pra chamar o código.
    //Classes em JavaScrip
    
    class Pessoa {
        //executa a classe imediatamente
        constructor(nome,idade){ 
        this._nome = nome
        this._idade =idade
     }
    }    
    let aluno_1 = new Pessoa ("Marcos",54)
    console.log('Olá eu sou ' + aluno_1._nome + ', tenho ' + aluno_1._idade + ' anos')
      ///////////////////////////////////////////////////////

   //EXEMPLO 2
    class Carro{
        constructor(modelo,ano){
            this._modelo=modelo
            this._ano=ano           
        }
        //método precisa ser invocado
        acessorios(){
            let bancoDeCouro = true
            return bancoDeCouro
        }
        km(x){
        return x
        }
    }
    
    let carro_1=new Carro("BMW",2015)
    console.log(carro_1._modelo,carro_1.acessorios())//retornou no console. BMW true - 
    carro_1.acessorios() ? console.log("Tem banco de couro") : null //posso fazer um ternário
    let km = carro_1.km(80000)
    console.log('Este ' + carro_1._modelo + ' tem ' + km + ' km' + ' rodados')


    // Exemplo 3 - extends (Uma classe pode conversar com outra classe)
    
    class Mercadoria{
        constructor(tipo,modelo){
            this._tipo= tipo
            this._modelo=modelo
        }
        info(){//método info
          return 'Eu vendo ' + this._tipo + ', modelo ' + this._modelo
       }
     }
    class Fabricante extends Mercadoria{// extend mescla duas classes
        constructor(nome,tipo,modelo,regiao){
            super(tipo,modelo)//procura o tipo dentro da classe acima/pega uma propriedade especifica
            this._nome=nome
            this._regiao=regiao
     }    
     apresentacao(){
         return 'Eu sou a empresa ' + this._nome + ', ' +this.info() + '. Estou na região ' + this._regiao 

       }
     }
     let empresa= new Fabricante('Apple', 'Iphone','Iphone 12 Pro', 'Vale do Silicio')
     console.log(empresa.apresentacao())
