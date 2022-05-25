//UTLIZANDO OBJETOS

let lista = { // criando objeto
    nome:'Lista de Tarefas',
    imprimeTitulo:function(el, titulo){//elemento e texto
       el.innerHTML=titulo //parametro que pode modificar o nome ou não
    },
    estiloLista:function(el,corDaBorda){
        el.style.borderWidth='1px'
        el.style.borderStyle='solid'
        el.style.borderColor=corDaBorda
    },
    gravarLista:function(el,Key){
        localStorage.setItem(Key,el.innerHTML)//grava a lista no local
    },
    imprimeLista:function(el,lista){ //imprime na tela
         el.innerHTML=lista
    }
        
}
//impre a lista 'l1' caso exista
if(localStorage.lista_1){
    lista.imprimeLista(document.querySelector('#tarefas_l1'),localStorage.getItem('lista_1'))
}

console.log(lista.nome)
//imprime o nome da lista em tela
lista.imprimeTitulo(document.querySelector('#lista1 h2'),"Lista de Compras")//consulta no console//fora do objeto
lista.imprimeTitulo(document.querySelector('#lista2 h2'),"Lista de Viagem")
//altera a cor da borda da lista
lista.estiloLista(document.querySelector('#tarefas_l1'),'blue')
lista.estiloLista(document.querySelector('#tarefas_l2'),'green')
//grava a lista em localStorage
document.querySelector('#bt_l1').onclick=function(){
    lista.gravarLista(document.querySelector('#tarefas_l1'),'lista_l1')
}