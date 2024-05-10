var body = document.body;
var h1 = document.createElement("h1");
var info = document.createElement("div");
var img = document.createElement("img");
var nameEl = document.createElement("section");
var yangon = document.createElement("section");
var myanmar = document.createElement("section");
var text = document.createElement("span");
var orderedli = document.createElement("section");

//ol
var ollist = document.createElement("ol");

//ul
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


//text content
h1.textContent = "Hello World!";
nameEl.textContent = "Small Dog";
yangon.textContent = "He is RoMan";
// myanmar.textContent = "Myanmr";
text.textContent = "My hobbies :"
li1.textContent = "စာဖတ်ခြင်း";
li2.textContent = "ဂီတကို နားဆင်ခြင်း";
li3.textContent = "အားကစားလုပ်ခြင်း ";
li4.textContent = "နည်းပညာကို လေ့လာခြင်း ";


//append
body.appendChild(h1);
body.appendChild(nameEl);
body.appendChild(yangon);
body.appendChild(myanmar);
myanmar.appendChild(img)
// body.appendChild(img);
body.appendChild(text);


//append ol li
body.appendChild(ollist);
ollist.appendChild(li1);
ollist.appendChild(li2);
ollist.appendChild(li3);
ollist.appendChild(li4);


//set attribute
h1.setAttribute("style", "margin: 0 auto; text-align:center; color:blue;");
nameEl.setAttribute("style", "text-align:center; font-size: 25px;")
img.setAttribute("src", "image/small dog.jpg");
img.setAttribute("width", '300px; ');
yangon.setAttribute("style", "text-align:center; font-size: 25px;")
myanmar.setAttribute("style", "text-align:center; font-size: 25px;")
text.setAttribute("style", "font-size:30px; color:black;")
ollist.setAttribute("style", "background-color:#cae4e4; font-size:25px;")