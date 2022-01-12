function Alterar(id){
    if (document.getElementById(id).className == 'inputDesligado') {
        document.getElementById(id).className = 'inputLigado'
        document.getElementById('inputSpan').innerHTML = ''
        setTimeout(() => {
            document.getElementById('inputSpan').innerHTML = 'Sim'
        }, 500)  
    } else {
        document.getElementById(id).className = 'inputDesligado'
        document.getElementById('inputSpan').innerHTML = ''
        setTimeout(() => {
            document.getElementById('inputSpan').innerHTML = 'Não'
        }, 500) 
    }
}