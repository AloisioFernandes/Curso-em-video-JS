function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    tab.innerHTML = ''

    if(num.value.length == 0){
        window.alert('Digite um número para começar')
    } else{
        n = Number(num.value)
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            res = n * c
            item.text = `${n} X ${c} = ${res}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}