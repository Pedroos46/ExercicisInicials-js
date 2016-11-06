var num = prompt("Entra el numero que del que vols el factorial: ");

// 4! =  4 x 3 x 2 x 1 = 24. 

try{
    if(num <= 0) throw "No es pot fer el factorial de 0 o de un negatiu.";
    
    var res = 1;
    while(num>1){
        res = res * num;
        num--;
    }
    alert(res);

}
catch (err){
    alert(err);
}


