//type conversion and type coercion
console.log("welcome to javascript");
let myVar=String(34);
console.log(myVar,typeof myVar);

//boolean
 let isDrive=String(true);
 console.log(isDrive,typeof isDrive);

 //date to string
 let isdate= String(new Date());
 console.log(isdate, typeof isdate);
 
 //arr
 let arr=([4,6,7,8,9]);
  console.log(arr.length, typeof arr);
  let arr2=String([4,6,7,8,9]);
  console.log(arr.length,typeof arr2);

  let i=7;
  console.log(i.toString());
  

  //number
  let str=Number("34566");//only let and var will convertnot const.
  console.log(typeof str);

  let bool=Number(true);
  console.log(bool,typeof bool);


 // parseInt=chnge to whole number
 let num=parseInt("45.67");
 console.log(num,typeof num);

 //parsefloat =chnge to float
 let dig=parseFloat("85.67");
 console.log(dig.toFixed(10),typeof dig);


 //type coercion
 let a="5678"
 let b=89;
 console.log(a+b);
