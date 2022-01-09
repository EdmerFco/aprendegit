function pluss() {
    var Number1 = parseInt(document.getElementById("Num1").value);
    var Number2 = parseInt(document.getElementById("Num2").value);
    var Number3 = parseInt(document.getElementById("Num3").value);
    var Number4 = parseInt(document.getElementById("Num4").value);

    var Resul;
    Resul= Number1+Number2+Number3+Number4;
    
    alert("The resul of the operation is " + Resul);
}