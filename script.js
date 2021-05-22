let num = document.querySelector('input#fnum') //pegando o numero usuario digitou no input
let lista = document.querySelector('select#flista') //criando uma relação com o select para add uma lista
let res = document.querySelector('div#res') //criando uma relação com a div para imprimir o resultado
let valores = [] //criando um vetor vazio para analizar os dados

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { //verificando se é um Numero. entre um e cem.
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //verifificando se o numero esta na lista o
        return true // -1 indica que o numero não foi encontrado na lista  
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //verificando se existe o numero na lista
        valores.push(Number(num.value)) //add o numero no vetor valores
        let item = document.createElement('option') // criando um elemento(tag) para mostrar na tabela 
        item.text = `Valor ${num.value} Adicionado ` // escreve o texto na tela
        lista.appendChild(item) //adicionado o valor na lista
        res.innerHTML = '' // limpar o campo de resultados
    } else {
        window.alert('Valor Invalido ou encontrado na lista.')
    }
    num.value = '' //zera a caixa de texto para colocar outro
    num.focus() //colaca o cursor a piscar no campo
}

function finalizar() {
    if (valores.length == 0) { // verificando se o vetor esta vazio
        window.alert('Adicione Valores Antes de Finalizar!')
    } else {
        let tot = valores.length // 1-verificando quantos valores existe na lista
            //verificando quem é o menor e o maior
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML += '' //zerando os valores campo do res 
        res.innerHTML += `<p><li>Ao todo, temos ${tot} numeros cadastrado.</li></p>`
        res.innerHTML += `<p><li>O maior valor informado foi ${maior}.</li></p>`
        res.innerHTML += `<p><li>O menor valor informado foi ${menor}.</></p>`
        res.innerHTML += `<p><li>Somando os valores, temos ${soma}.</></p>`
        res.innerHTML += `<p><li>A media dos valores somados é ${media}.</></p>`
    }
}