let nav = document.createElement("nav");
let div = document.createElement("div");
let div1 = document.createElement("div1");
let img = document.createElement("img");
let ul = document.createElement("ul");
let li = document.createElement("li");
let a = document.createElement("a");
let a1 = document.createElement("a1");
let a2 = document.createElement("a2");
let a3 = document.createElement("a3");
let button = document.createElement("button");
const body = document.querySelector("body");

// images
img.setAttribute("src", "./images/logo.png");
img.setAttribute("alt", "./images/logo.png");

// nav iteam 
a.innerText = "Home"
a1.innerText = "Our Service"
a2.innerText = "About us"
a3.innerText = "What's New?"
button.innerText = "Contact us"

// ul list 
li.appendChild(a);
li.appendChild(a1);
li.appendChild(a2);
li.appendChild(a3);

// ul
ul.appendChild(li);

// menu div 
div1.appendChild(ul);

// main div 
div.appendChild(img);
div.appendChild(div1);
div.appendChild(button);

div.style.display = "flex";
// div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.padding = "10px 50px ";

div1.style.marginLeft ="550px"

li.style.listStyle = "none";
li.style.display = "flex";
li.style.columnGap = "50px";
li.style.color = "#817382";

a.style.color = "#F95C19"

button.style.marginLeft = "140px"
button.style.padding = "12px 20px"
button.style.borderRadius = "5px"
button.style.background = "#FFE4D9"
button.style.color = "#F95C19"
button.style.border = "none"

div.style.border = "2px solid #F95C19"
div.style.borderRadius = "5px"



body.appendChild(div)



console.log( body);



// // nav.appendChild(div);

// ul.style.marginLeft = "20px";

// ul.style.color = "white";

// li.style.display = "flex";
// li.style.columnGap = "40px";

// ul.style.display = "flex";
// ul.style.marginLeft = "300px"


// button.style.color = "white";
// button.style.textAlign = "center";
// button.style.borderRadius = "100px";
// button.style.fontSize = "1rem";
// button.style.backgroundColor = "transparent";
// button.style.border = "2px solid rgba(244, 246, 252, 0.2)";
// button.style.padding = "16px 24px";



// div.style.display = "flex";
// div.style.justifyContent = "space-between";
// div.style.alignItems = "center";
// div.style.backgroundColor = "#1C1E53";
// div.style.padding = "16px 48px";

// body.appendChild(div);



// console.log(body);