var array=[]; //Crea el Arraylist
function verificar_usuario(){
    let user=document.getElementById("Usuario").value
    let contra=document.getElementById("Contra").value
    if(user=="Lucas" && contra==2000){
        alert("Bienvenido")
        location.href="calculadora.html"
    }else{
        alert("Algunos de los Campos es Erroneo")
    }
}

function calcular(){
    let n1=parseInt(document.getElementById("valor1").value);
    let n2=parseInt( document.getElementById("valor2").value);
    let op=document.getElementById("operador").value;
    if(op!=""){ // Verifica que el Valor de Operacion no este Vacio
        switch(op){
            case "+":
                var resultado=n1+n2
                document.getElementById("resul").value=resultado
                array.push(resultado) //Añade los Valores al Arraylist
                break;

            case "-":
                var resultado=n1-n2
                document.getElementById("resul").value=resultado
                array.push(resultado)  //Añade los Valores al Arraylist
                break;
            case "/":
                var resultado=n1/n2
                document.getElementById("resul").value=resultado
                array.push(resultado)  //Añade los Valores al Arraylist
                break; 
            case "*":
                var resultado=n1*n2
                document.getElementById("resul").value=resultado
                array.push(resultado)  //Añade los Valores al Arraylist
                break;
        }
    }
    else{
        alert("Ingrese un Valor para Operar")
    }
    document.getElementById("histo").innerText=array //Muestra en un Parrafo el Contenido del Array
}

$(function(){
    $("#btncalcular").click(function(){
        $("#resul").css({"background":"red","color":"white"}) //Cambia el Color del Casillero Resultado a Travers de Jquery
    });
});