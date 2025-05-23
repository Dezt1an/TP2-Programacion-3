function calcular(){
    const peso = parseFloat (document.getElementById ("peso").value)
    const altura = parseFloat (document.getElementById ("altura").value)

    const total= peso/(altura * altura)
    alert(total)
}