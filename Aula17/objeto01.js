let obj = {nome:'José',
sexo:'M',
peso:85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p//this faz auto referência ao objeto
} }

obj.engordar(2)
console.log(`${obj.nome} pesa ${obj.peso}Kg`)