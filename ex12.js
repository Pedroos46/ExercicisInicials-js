while(true){
    var numTaula = prompt("Selecciona la taula de multiplicar que vols:");
    
    if(numTaula > 10){
       alert("No es pot mostrar aquesta taula.");
    }
    if(numTaula == !isNaN){
        alert("No es una taula correcta.");
    }
    if(numTaula == "fi"){
        break;
    }
    
    var table1 = ["1 × 1 = 1."];
    var table2 = [ "2 × 1 = 2", "\n2 × 2 = 4."];
    var table3 = ["3 × 1 = 3", "\n3 × 2 = 6", "\n3 × 3 = 9."];
    var table4 = ["4 × 1 = 4", "\n4 × 2 = 8", "\n4 × 3 = 12", "\n4 × 4 = 16."];
    var table5 = ["5 × 1 = 5", "\n5 × 2 = 10", "\n5 × 3 = 15", "\n5 × 4 = 20", "\n5 × 5 = 25."];
    var table6 = ["6 × 1 = 6", "\n6 × 2 = 12", "\n6 × 3 = 18", "\n6 × 4 = 24", "\n6 × 5 = 30", "\n6 × 6 = 36."];
    var table7 = ["7 × 1 = 7", "\n7 × 2 = 14", "\n7 × 3 = 21", "\n7 × 4 = 28", "\n7 × 5 = 35", "\n7 × 6 = 42", "\n7 × 7 = 49."];
    var table8 = ["8 × 1 = 8", "\n8 × 2 = 16", "\n8 × 3 = 24", "\n8 × 4 = 32", "\n8 × 5 = 40", "\n8 × 6 = 48", "\n8 × 7 = 56", "\n8 × 8 = 64."];
    var table9 = ["9 × 1 = 9", "\n9 × 2 = 18", "\n9 × 3 = 27", "\n9 × 4 = 36", "\n9 × 5 = 45", "\n9 × 6 = 54", "\n9 × 7 = 63", "\n9 × 8 = 72", "\n9 × 9 = 81."];
    var table10 = ["10 × 1 = 10", "\n10 × 2 = 20", "\n10 × 3 = 30", "\n10 × 4 = 40", "\n10 × 5 = 50", "\n10 × 6 = 60", "\n10 × 7 = 70", "\n10 × 8 = 80", "\n10 × 9 = 90", "\n10 × 10 = 100."];

    var tableOfTables = [table1, table2, table3, table4, table5, table6, table7, table8, table9, table10];
    
    alert(tableOfTables[numTaula -1]);
   
}
