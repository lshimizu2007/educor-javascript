document.getElementById("frutas").innerHTML=
"<h2>Frutas</h2>"

document.getElementById("filmes").innerHTML=
"<h2>Filmes</h2>"

document.getElementById("tarefas").innerHTML=
"<h2>Tarefas</h2>"

// let frutas=["Maçã","Morango","Pêra"]
// frutas[0]="Maçãs"
// frutas[1]="Morango"
// frutas[0]="Pêra" //vai substituir o item maçãs...


let frutas=new Array("Maçã","Morango","Pêras")

console.table(frutas)
//vamos inserir o array frutas dentro da div frutas
document.getElementById("frutas").innerHTML+=frutas[2] + "<br>"
document.getElementById("frutas").innerHTML+=frutas[0] + "<br>"
document.getElementById("frutas").innerHTML+=frutas[1] + "<br>"

//inserindo item no array
frutas[3]="Banana"

frutas.push("Mexerica")//add item ao final do array

console.table(frutas)
frutas.unshift("Abacaxi")//add item na primeira posição do array
console.table(frutas)


//remover item do array
frutas.pop()//remove item do final do array
console.table(frutas)

frutas.shift()//remove item do início do array
console.table(frutas)

let posicao=frutas.indexOf("Morango")//retorna o índice de um elemento do array
console.log(posicao)

frutas.splice(posicao,1)//remove 1 elemento do array a partir do índice
console.table(frutas)

