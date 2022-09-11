console.log('tut20');
localStorage.setItem('name','babu');
localStorage.setItem('name2','bawa');

let imparray=['onion','allo','muli','gobi'];
localStorage.setItem('sabji',JSON.stringify(imparray));

// localStorage.clear();//delete all store

//clear pratical key
// localStorage.removeItem('name');


let name=localStorage.getItem('name');
name=localStorage.getItem('sabji');
name=JSON.parse(localStorage.getItem('sabji'));
console.log(name);


