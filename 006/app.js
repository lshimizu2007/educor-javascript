let data=new Date()

let resposta= document.getElementById("resposta")
resposta.innerHTML=data
resposta.innerHTML+=`<br>Dia da Semana: <br>${data.getDay()}`

if(data.getDay()==0){
    resposta.innerHTML+="<br>Domingo"
}else if(data.getDay()==1){
    resposta.innerHTML+="<br>Segunda"
}else if(data.getDay()==2){
    resposta.innerHTML+="<br>Terça"
}else if(data.getDay()==3){
    resposta.innerHTML+="<br>Quarta"
}else if(data.getDay()==4){
    resposta.innerHTML+="<br>Quinta"
}else if(data.getDay()==5){
    resposta.innerHTML+="<br>Sexta"
}else{
    resposta.innerHTML+="<br>Sábado"
}

let diasdasemana=[
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]
resposta.innerHTML=`<br> ${diasdasemana[data.getDay()]}`