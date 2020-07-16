var num = document.getElementById("num")
var lista = document.getElementById('numeros')
let res = document.querySelector('div#res')
var valores = []

function isNumber(numer){//verificar se número está entre 1 e 100
    if(Number(numer) >= 1 && Number(numer) <= 100){
        return true
    } else {
        return false
    }
}

function inList(numer, list){//verificar se número se encontra na lista
    if(list.indexOf(Number(numer)) != -1){
        return true
    } else {
        return false
    }
}

function verificar(){
    if (isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))//adiciona valor ao vetor
        let valor = document.createElement('option')//cria elemento opção
        valor.text = `Valor ${num.value} adicionado`
        lista.appendChild(valor)//adiciona elemento a lista
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor adicionade foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}