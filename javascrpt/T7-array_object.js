let mark=[4,5,0,6,7,1];
let fruit=['apple','mango','orange','banana'];
let mixed=[2.3,4,'raja',[5,6,89]];

console.log(mark);
console.log(fruit);
console.log(mixed);

let arr=new Array(23,45,67,'bhim');
console.log(arr);

console.log(arr.length);//length of arr
console.log(Array.isArray("ght"));
arr[0]='baja';
console.log(arr);
let ind=arr.indexOf(67);//finding index of a element in arrAY
console.log(ind);
//MODIFY
arr.push(45,56,78,'arjun');//at add elementat the end of arr
console.log(arr);
arr.unshift(34);//add element at the front of arr
console.log(arr);

arr.pop();//remove elemet from end of arr
console.log(arr);
arr.shift();//remove elemet from front of arr
console.log(arr);
//splice use to remove no of elements from arr it have a strating  index 
//and no of elements to remove and store in originl arr
arr.splice(0,4);
console.log(arr);
arr.reverse();
console.log(arr);
arr=arr.concat(mark);
console.log(arr);

//object
let obj={
    name:'isha',
    dig:[89,67,98,100],
    isact:true,

}
console.log(obj);
console.log(obj.name);
console.log(obj['dig']);

