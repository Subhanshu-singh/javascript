//function in js is more similar to function of c
//first u have to declare a function and u have to pass some argument to it
//when function is called

// function fun(name,age)
// {
//    let msg=`my name is ${name} and my age is ${age}!`;
//    console.log(msg)
// }
// fun("subh",18);


//function with return
// function greet( name , reply='thank u')
// {
//    let msg=`happy holi ${name} .hope this festivial bring color in life.${reply}`
//    return msg;
// }
// let val=greet('shubham','thank u bahi');
//console.log(val);
//function in a vriable

var greet=function( name , reply='thank u')
{
   let msg=`happy holi ${name} .hope this festivial bring color in life.${reply}`
   return msg;
}
let val=greet('shubh','thank u bahi');
console.log(val);


