function Alterar(id){
    if (document.getElementById(id).className == 'inputDesligado') {
        document.getElementById(id).className = 'inputLigado'
        document.querySelector('[spanButton]').innerHTML = ''
        setTimeout(() => {
            
            document.querySelector('[spanButton]').innerHTML = 'ON'
        }, 1200)  
    } else {
        document.getElementById(id).className = 'inputDesligado'
        document.querySelector('[spanButton]').innerHTML = ''
        setTimeout(() => {
            document.querySelector('[spanButton]').innerHTML = 'OFF'
        }, 500) 
    }
}