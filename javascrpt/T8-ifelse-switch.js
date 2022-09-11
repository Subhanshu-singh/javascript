console.log('this is tutorial 8');
let age=18;
//here === denote same type of data and same value of data ;
//whereas == denote different type of data but same value
// whereas = denote assigment operator;
if(age==='18')
{
    console.log(" age is 18");
}
else if (age==20) 
{
    console.log("age is 20");
    
} else {
    console.log('age is not 18 or 20')    
}
    
//!= not equal and datatype is liberal;
//!== not equal and datatype strictly same;
 let mark=25;
 if(mark!=25){
    console.log('mark is not equal to25');
 }
 else{
    console.log('mark is 25');
 }

 //to find any variable is present or not
 if(typeof mark !== undefined){
    console.log(' mark is present');
 }
 else{
    console.log('mark is not present ');
 }

 //boolen case and and or;
 let isDrive=true;
 if(isDrive&&age>=18){
    console.log('legal to drive');
 }
 else{
    console.log('illegal to drive');
 }

 //switch case
 switch (age) {
    case 18:
        console.log('age is 18');
        break;
        
    case 20:
        console.log('age is 20');
        break;
        case 35:
            console.log('age is 35');
            break;
            case 56:
                console.log('age is 56');
                break;
    default:
        console.log('age is not known');
        break;
 }
