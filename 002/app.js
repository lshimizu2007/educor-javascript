console.log("Encontro 2")

let concorda=true
console.log(typeof concorda)

document.getElementById("titulo").style.backgroundColor="lightgreen"
console.log(document.getElementById("titulo"))

document.getElementById("titulo").innerText="Melhor Sabor"
let tituloDaPagina 
tituloDaPagina=document.getElementById("titulo").innerText
console.log(tituloDaPagina)

let elementoSubtitulo
elementoSubtitulo=document.getElementById("subtitulo")
console.log(elementoSubtitulo)

elementoSubtitulo.style.backgroundColor="pink"
elementoSubtitulo.innerText="Seu restaurante certo!"


let frutas = ["🍉","🍒","🍇"]
console.log(frutas)

console.dir(frutas)
console.table(frutas)
console.warn(frutas)
console.error(frutas)
    
document.write("<h3>Cardápio</h3>")
document.write(frutas)
alert("Bom dia, seja bem vindo ao meu site!")

let nomeCompleto
nomeCompleto=prompt("Qual é o seu nome?","Digite aqui")
    alert("Olá "+nomeCompleto+" espero que esteja bem!")
document.write("<br>nome: "+nomeCompleto)