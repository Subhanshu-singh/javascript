console.log("tut 16");
//creatr li element with class name $ id
let element=document.createElement("li");
element.className='childli';
element.id='ccreatedli';
element.setAttribute('title','mytitle');
// element.innerHTML='created li element';
console.log(element);

let ul=document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);

let text=document.createTextNode("i am the text node");
element.appendChild(text);
console.log(text);


//replace a element
let elem2=document.createElement('h3');
elem2.id="elem2";
elem2.class='elem2';
let tnode=document.createTextNode('created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);
let myul=document.getElementById('myul');
myul.removeChild(element,document.getElementById('fui'));
