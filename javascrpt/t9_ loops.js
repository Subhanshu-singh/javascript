//for loop same as c++
for(let i=0;i<=10;i++)
{
    console.log("count is" + i);
}


//while loop
let j=0;
while ( j<=5) {
    console.log('while count is '+ j);
    j++;
}

//do while loop
let k=0
do {
    console.log("do while "+k);
    k++;
} while (k<=5);



//for arr their are some method 
let arr=[1,2,3,4,5];
// for(let x=0;x<5;x++)
// {   
//     const element=arr[x];
//     console.log(element);
// }
//or foreach(function(element))
arr.forEach(function(element,index,array)
{
    console.log(element,index,array);
});

let obj = {
 name:'subh',
 class:8,
 marks:[2,4,5,6,7]
};
for(const property in obj){
    console.log(`${property}: ${obj[property]}`);
}