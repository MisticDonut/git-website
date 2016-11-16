var radi = prompt("Please enter radius of the cone", 5);
var radi = parseInt(radi);
var high = prompt("please enter Hight of the cone", 10);
var high = parseInt(high);
var are;
var vol;


area = Math.PI * radi * (radi + Math.sqrt(Math.pow(high, 2) + Math.pow(radi, 2)))
vol = Math.PI * Math.pow(radi, 2) * (high / 3)

document.write(" surface area = " + area.toFixed(2)) 
document.write("<p> volume = " + vol.toFixed(2)) 