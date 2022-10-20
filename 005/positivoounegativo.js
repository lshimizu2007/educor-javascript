function Verificar(){
    let n1=document.getElementById("numero").value
    n1=parseInt(n1)

    //estrutura de decisão if
    if(n1>=1){
        document.getElementById("resultado").innerHTML="Positivo"
    }else{
        document.getElementById("resultado").innerHTML="Negativo"
    }

}