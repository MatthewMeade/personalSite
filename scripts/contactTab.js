var tab = document.getElementById("contactTab");
var back = document.getElementById("contactBG");


tab.addEventListener("click", function(){
    tab.className = "active";
    back.className = "active"
});

back.addEventListener("click", function(){
    tab.className = "inactive";
    back.className = "hidden";
});