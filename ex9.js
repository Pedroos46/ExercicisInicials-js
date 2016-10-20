var acumulat = 0;
while (true){
    var sentencia = prompt("Introduiexi un numero:").toLocaleLowerCase();
    if (sentencia == "fi"){
        alert("adeu");
        break;
    }
    if(!isNaN(parseInt(sentencia))){
        var nouNumero = parseInt(sentencia)
        acumulat += nouNumero;
        alert(acumulat);
    }   
}



