//TEMPLATE literals
console.log("teste")

let nome="Richard"
let mensagem= "Olá, eu sou" + nome
console.log(mensagem)
let mensagem2=`Olá ${nome}!`
console.log(mensagem2)

let a = 10
let b = 15
let calculo= `o valor total é ${2 * (a+b)}`
console.log(calculo)
//Exemplo3
function info(){
    return 'Hoje é segunda feira'
}
let infoSemana = `Salve! ${info()}. Bora codar!`
console.log(infoSemana)

//Exemplo4
//Date - getDay() [0 - 6] 0 = Domingo 6= Sábado
//getMonth() [0 - 11 ] 0=janeiro  11=dezembro
//getDate() - Dia de hoje
//getHours() getMinutes () getSeconds - Hora, Minuto e Segundos atuais
//getFullyears() -Ano atual

let tempo=new Date()
let diaDaSemana=['Dom','Seg','Ter','Quar','Qui','Sex','Sab']
let mesDoAno=['Jan','Fev','Mar','Abr','Mai','Jun','jul','Ago','Set','Out','Nov','Dez']
function infoParam (dia){
    return `Hoje é  ${dia}`
}
let infoSemanaParam = `Salve! ${infoParam('terça-feira')}`
console.log(infoSemanaParam)
console.log(diaDaSemana[tempo.getDay()])
//Formato Data Ex1
let saudacao= `${diaDaSemana[tempo.getDay()]}, ${tempo.getDate()} de ${mesDoAno[tempo.getMonth()]} de ${tempo.getFullYear()}`
//Recebe a frase com a data
document.querySelector("#p1").innerHTML = saudacao

//Formato Data Ex2
function relogio (){
    let tempo_1=new Date()
    let hora= tempo_1.getHours()
    let minutos=tempo_1.getMinutes()
    let segundos=tempo_1.getSeconds()
    //adiciona zero antes do digito se menor que 10
    hora <10 ? hora = `0${hora}`: null
    minutos <10 ? minutos= `0${minutos}`:null
    segundos <10 ? segundos= `0${segundos}`:null
    //console.log(hora,minutos,segundos)
    document.querySelector("#p2").innerHTML=`${hora}:${minutos}:${segundos}`//depois de verificar no console
}
relogio()
let tempo_intervalo=setInterval(
    function(){
        relogio()
    },1000)

    //Exemplo 5
    let pessoa={
        nome: "Tom Hanks"        
    }
    let msgPessoa=`${pessoa.nome.toUpperCase()}, ator de cinema`
    console.log(msgPessoa)
    
    //ARROW FUNCTIONS (setas)

    let treinamento = function(){
        return "Javascript Back End" //se usar o return tem que usar a chave
    }

    let treinamento_1 = () => { //nova forma de escrever function
        return "Node Js!"
    }
    console.log(treinamento())           
    let calculo_1 = (a,b) => a/b *100 //argumentos nas chaves
    console.log(calculo_1(10,5))//retorna 200

    //quem é o elemento que dispara a função
    //SOBRE A PROPRIEDADE THIS - Função tradicional repasse automático
    let viagem_0 = function(){
        document.querySelector("#p3").innerHTML+= `Vou para o México, este evento foi
        disparado por :${this}<br/>`
    }

    //SOBRE A PROPRIEDADE THIS (Quando arrow function não reconhece o elemento do clique (this)imediato)
    let viagem = (el) => {
    document.querySelector("#p3").innerHTML+= `Vou para o México, este evento foi
    disparado por :${el}<br/>`
    }

    window.addEventListener("load",viagem(this))//disparado por window
    document.querySelector("#bt_teste").addEventListener("click",viagem_0)//disparado pelo botão
    document.querySelector("#bt_teste").onclick= function(){viagem(this.id)}