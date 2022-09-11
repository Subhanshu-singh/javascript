console.log("tut3");
//variable in js___ var ,let,const
//var,const have global scope
//let have local scope
//for variable=string single or double quote is allowed;
var name='subhanshu';
console.log(name);
var channel;
channel='gogo';
console.log(name,channel);

//for interger no quote just number
var mark=89;
console.log(mark);
console.log(name,channel,mark);
console.log(mark+10);

//if no is in string
var num="45"
console.log(num);
console.log(num+10);// work as a concantination of string;

//var dig=35ghdh//not allowed becz it not pure sting or pure number;
//console.log(dig);

/*  rules of var
1 connot start with number;
2. can start with letter ,_,$;
3.are case sensitive;*/

//const 
const owersname='harrylal';//const variable its value not change at any part of prg
 //owername=babu --its through error that u can not change value of owersname
 console.log(owersname);
//const fruit; is not allowed u have to assign some value


//let
var city='mumbai';
{
let city='newdelhi';
console.log(city);//local scope will print
}
console.log(city);//global scope will print


//array
const arr1=[12,6,8,9,0,5];
console.log(arr1);
arr1.push(45);
console.log(arr1);//this is allowed in constant array
//const arr1=[28,46,589,90] this redeclaration is not allowed

/*
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/