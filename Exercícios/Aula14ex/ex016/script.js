function contar(){
    var inic = document.getElementById('init')
    var final = document.getElementById('fin')
    var passo = document.getElementById('pass')
    var cont = document.querySelector('div#cont')
    cont.innerHTML = ''
    
    if(inic.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        cont.innerHTML = 'Impossível contar, faltam dados'
    } else {
        var i = Number(inic.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido. Considerando valor igual a 1.')
            passo.value = 1
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                cont.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            for(var c = i; c >= f; c -= p){
                cont.innerHTML += ` ${c} \u{1F449}`
            }
        }
        cont.innerHTML += ' \u{1F6A9}'
    }
}