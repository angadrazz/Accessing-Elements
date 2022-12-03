var element  = document.getElementById("demo");
element.style.border = "2px solid green";

var demoClass = document.querySelectorAll(".demo");

demoClass[0].style.border = "1px solid blue";
demoClass[1].style.border = "1px solid blue";


demoClass[1].innerText = "This is a Second Element Of Class";
demoClass[2].innerText = "This is a Second Element Of Class";

demoClass[2].style.border = "3px solid yellow";
