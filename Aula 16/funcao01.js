function parimpar(n){//função verifica se número é par ou ímpar
    if(n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimpar(3)
console.log(res)