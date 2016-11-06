var numPrimers = [];
var number = 0;

while (numPrimers.le <= 100){    
    if(isPrime(number)==true){
        numPrimers.push(number);
    }    
    number++;
}

function isPrime(n) {
  return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
}

alert("Primers 100 nombres primers: " + numPrimers )