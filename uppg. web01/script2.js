function Namn () {
var person = prompt("Please enter your name",);

if (person != null && person !='') {
  document.getElementById("Namn").innerHTML =
    "Hello " + person + "! How are you today?";
}
else if (person==null) {
  document.getElementById("Namn").innerHTML =
  "You pressed cancel!";
}
else{
  document.getElementById("Namn").innerHTML =
  "Why won't you tell me your name?";
}
}