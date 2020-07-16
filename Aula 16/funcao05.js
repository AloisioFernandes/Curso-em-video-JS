function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1)//recursividade (função chama própria função)
    }
}

console.log(fatorial(5))