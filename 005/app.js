let filmes=[
    "STAR WARS VI - O RETORNO DO REI",
    "HARRY POTTER E A PEDRA FILOSOFAL",
    "ROCKY V",
    "HOMEM ARANHA",
    "A BRUXA",
    "PANTERA NEGRA",
    "XMAN"
]

document.getElementById("titulo").innerHTML="Filmes"

let conteudo =document.getElementById("conteudo")   
conteudo.innerHTML=filmes
conteudo.innerHTML+="<h3>Número de posições do ARRAY</h3>"
conteudo.innerHTML+=filmes.length
conteudo.innerHTML+="<ul>"
let i=0
//while(i <5){
    //conteudo.innerHTML+="<li>" + filmes[0]+"</li>"
  //conteudo.innerHTML+="<li>" + filmes[i]+"</li>"
  //  i++
//}
//para ordenar a lista
/*
filmes.sort()
for(let i=0;i<=filmes.length;i++){
    conteudo.innerHTML+="<li>" + filmes[i]+"</li>"
}
*/

filmes.sort()
filmes.forEach(function(elemento){
    conteudo.innerHTML+="<li>"+elemento+"</li>"
})

//conteudo.innerHTML+="<li>" + filmes[1]+"</li>"
//conteudo.innerHTML+="<li>" + filmes[2]+"</li>"
//conteudo.innerHTML+="<li>" + filmes[3]+"</li>"
//conteudo.innerHTML+="<li>" + filmes[4]+"</li>"
conteudo.innerHTML+="<ul>"
