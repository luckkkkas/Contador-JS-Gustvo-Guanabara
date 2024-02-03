

function contador(){
    const inpInicio = document.getElementById('inpInicio');
    const inpFim = document.getElementById('inpFim');
    const inpPasso = document.getElementById('inpPasso')
    var res = document.getElementById('res')
    var c = 1
    
    
    if(inpInicio.value.length == 0 || inpFim.value.length == 0 || inpPasso.value.length == 0){
        alert('Erro, Preencha todos os campos!!!!!!!!!!!!')
    } else{
        let inicio = Number(inpInicio.value) 
        let fim = Number(inpFim.value)
        let passo = Number(inpPasso.value)
        
        if(inicio < fim){
            // contagem Crescente
            for (c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c}  \u{1F603}`
            }
        }else{
            // contagem decrescente
            for ( c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F603}`
               
            }
        }    
        res.innerHTML += `\u{1F3C1}`
    }


}
