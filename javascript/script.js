function calcular(){
    alert('Mensagem completa!!!')
}

function consultacep(){
    var txtv = window.document.getElementById('txtcep')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    
    res.innerHTML = `Você informou o cep de ${vel}`
}