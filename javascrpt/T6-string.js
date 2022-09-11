const name='raja ';
const greet='welcome to delhi';
console.log(name+greet);

//concat

let html="<h1> who are u</h1>"
+"<p1>just a regular person</p1>";
console.log(html);
console.log(html.length);
html=html.concat("this",'string');
console.log(html);
console.log(html.length);


//tolwercase and uppercase
console.log(html.toLowerCase());
console.log(html.toUpperCase());

//indexof
console.log(html[0],html[1]);
console.log(html.indexOf("h"));
console.log(html.lastIndexOf("h"));

//charat , endwith,include ,substring
console.log(html.charAt(1));
console.log(html.endsWith("string"));
console.log(html.includes("who"));
console.log(html.substring(1,20));
//split,replace
console.log(html.split(0,6));
console.log(html.replace('u','you'))