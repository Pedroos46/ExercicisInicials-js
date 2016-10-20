document.write("-----------DEMO1----------- <br>");

var date = new Date();

document.write("Valor de l'objecte \"date\" abans de passar-lo per paràmetre i modificar-lo: <br>" + date + "<br>");

function incHour (d) {
    d.setHours(d.getHours() + 1);
}

incHour(date);

document.write("Valor posterior de l'objecte \"date\":<br>" + date + "<br>");