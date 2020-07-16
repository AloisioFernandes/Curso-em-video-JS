let num = [6, 5, 8, 7]//declaração de um vetor
num[4] = 9//atribui 9 ao índice 4 do vetor que é adicionado automaticamente
num.push(4)//adiciona um índice ao vetor e atribui o valor 4 a ele
console.log(`Nosso vetor é o ${num}`)
console.log(`elementos ${num.length}`)//num.length retorna o número de elementos do vetor num
console.log(`crescente ${num.sort()}`)//num.sort organiza os elementos de um vetor em ordem crescente
for(let pos=0; pos<num.length; pos++){//percorrendo um vetor
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
for(let posi in num){//percorrendo um vetor simplificadamente
    console.log(num[posi])
}
var posic = num.indexOf(8)//.indexOf() retorna o índice em que o valor entre parênteses se encontra no vetor
console.log(`O valor 8 está na posição ${posic}`)
var posic = num.indexOf(11)//.indexOf() retorna -1 para valores que não existem no vetor
console.log(`O valor 11 está na posição ${posic}`)