function CriarTabuada(){
   let n1=document.getElementById("numero").value
   n1=parseInt(n1)
   document.getElementById("resultado").innerHTML=""
    for(let i=1;i<=10;i++){
       // document.getElementById("resultado").innerHTML+=i+"x"+n1+"="+i*n1+"<br>"

       //usando interpolação de string
       document.getElementById("resultado").innerHTML+=`${i} x ${n1}=${i*n1}<br>`
    }

}