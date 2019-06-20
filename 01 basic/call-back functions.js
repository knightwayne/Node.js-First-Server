const function1 = callback =>{
    callback('Done');       
    console.log('Done in function 1!');
}

const function2 = ()=>{
    function1(str=>{
        console.log(str);
        console.log(str+'abc');
    });
    console.log('Done in function2!');
}

function2();
