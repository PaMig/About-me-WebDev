//Migklis Paris Ioannis 3160268

//Add my name to both Titles
const x = document.querySelector('h1');
x.textContent += "(By Paris Miglis)";

// Change Unordered list background to yellow
const y = document.querySelector('ul');
y.style.backgroundColor = "dimgrey";
//Change Text color on mouse over and off
function func1(a){
    a.style.color="cyan";
}
function func2(a){
    a.style.color="white";
}
function func3(a){
    const z = document.querySelector('h1');
    z.textContent = "HTML CSS JS";
}
function func4(a){
   document.getElementById("idd").style.backgroundImage="url(images/ddd.jpg)";
}
