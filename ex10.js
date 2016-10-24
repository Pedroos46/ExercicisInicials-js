var ip = prompt("Introdueix una IPv4:");
var separat = ip.split(".");


if (separat.length !== 4){
    alert("La IP entrada no es correcta"); 
}

var it = 0;
while(it <= 4){

    if (separat[it] == null){
        alert("La IP no es correcta");
    }

    if (parseInt(separat[it]) == !isNaN){
        alert("La IP no es correcta");
    }

    it++;
}
