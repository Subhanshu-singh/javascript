console.log('tut14gh');
//single element selector
// multiple element selector
    //getElementById()
        let element=document.getElementById("myfirst");
        // element=element.className;
        // element=element.childNodes;
        // element=element.parentNodes;
        // element=element.style.color='red';
        // element=element.innerText="i m hero";
        // element.innerHTML='<b> boy are best</b>';        
    //  console.log(element);

    // queryselector()
    // let sel=document.querySelector('#myfirst');
    // sel=document.querySelector('.child')
    // sel=document.querySelector('b')
    // sel=document.querySelector('div')
    // sel.style.color="green"
    // console.log(sel);

    //multiple selector
    let elem=document.getElementsByClassName('child');
     elem=document.getElementsByClassName('container');
     elem=document.getElementsByTagName('div');

    // console.log(elem);
    // Array.from(elem).forEach(element=>
    //     {
    //         console.log(element);
    //         element.style.color="purple";
    //     });


    console.log(elem[0].getElementsByClassName('child'));