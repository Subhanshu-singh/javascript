console.log('tut 17');

//click event
document.getElementById('heading').addEventListener('click', function (e) {
    // console.log('u have click heading')
    //location.href="//google.com"
    // alert("click heading")
    //   console.log(e);

    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;

    
   
    console.log(variable);

});

