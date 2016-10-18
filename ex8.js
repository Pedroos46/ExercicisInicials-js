var dateObj = new Date();
var mes = dateObj.getMonth(); //numero de mes
var nommes = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Septembre", "Octubre", "Novembre", "Decembre"];

var dia = dateObj.getDay() - 1; //nuemero del dia de la setmana
var diames = dateObj.getDate(); //dia del mes
var nomdia = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

var any = dateObj.getUTCFullYear();

alert("Data actual: " + nomdia[dia] + ", " + diames + "d'" + nommes[mes]);