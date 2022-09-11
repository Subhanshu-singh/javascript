/*
primative datatype
1.string
2.number
3.boolean
4.null
5,undefined
6.symbol

reference datatype
1.heap
2.array
3.object
4.function
5.dates

*/
//type of operator -syntax-(typeof variable)
let name='subham';
console.log("my name is "+ name);
console.log("name data is "+ (typeof name));

//number
let mark=46.788;
console.log("mark data is "+ (typeof mark));

//boolean 
let isDriver =true;
console.log( " the isdriver datatype is "+ (typeof isDriver ));

//null
let nulvar=null;
console.log(" the nulvar is "+ (typeof null));

//undfine
let undef=undefined;
console.log(" undef datatype is "+ (typeof undef));

//reference datatype
//array
let arr=[5,7,89,0,7,true ,"shubm"];
console.log("arr datatype is "+(typeof arr));

//object literal
let stmark={
    harry:67,
    shub:89,
    cat:67,
    'shub singh':56
}
console.log(stmark);

//function
function fun() {
    
}
console.log( "datatype of function is "+(typeof fun))

//date
let date=new Date();
console.log( "date data type is "+typeof date);

