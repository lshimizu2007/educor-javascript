/* OPERADORES */

let n1,n2

n1=4
n2=2

document.write("N1+N2= "+(n1+n2)+"<br>")
document.write("N1-N2= "+(n1-n2)+"<br>")
document.write("N1*N2= "+n1*n2+"<br>")
document.write("N1/N2= "+n1/n2+"<br>")


let nome,sobrenome

nome="João"
sobrenome=" Paulo"

document.write(nome +  sobrenome+"<br>")//concatenação
document.write("N1 % N2= "+ n1%n2+"<br>")//módulo
document.write("N1 ** N2= "+ n1**n2+"<br>")//potência
document.write("Raiz Quadrada de 4: "+Math.sqrt(n1)+"<br>")//raiz quadrada

function mensagem(){
    alert("Olá! Seja Bem-Vindo!")
}
function somar(){
    let v1,v2
    v1=parseInt(document.getElementById("valor1").value)
    v2=parseInt(document.getElementById("valor2").value)
    document.getElementById("resultado").value=v1+v2
}