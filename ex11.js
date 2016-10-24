var a=prompt("Entra el valor de A");
var b=prompt("Entra el valor de B");
var c=prompt("Entra el valor de C");

//arrel quadrada
var b2 = Math.pow(b,2);
var ac = (4 * a * c);
var root = (b2 - ac);
var rootResult = Math.sqrt(root);

//divisio de sota
var divA = (2 * a);

//resto de a formula
var sol1 = (( (-b) + (rootResult) ) / divA);
var sol2 = (( (-b) - (rootResult) ) / divA);


alert("Arrel: " + rootResult);
alert("Solució X1: " + sol1);
alert("Solució X2: " + sol2);