let butt=document.getElementById("butt");
let output=document.getElementById("output");
let num="123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
let numbers="1234567890";
let lowercase="qwertyuiopasdfghjklzxcvbnm";
let special="!@#$%^&*()_+{}|:<>?,./\][";

let form=document.getElementById("form");


butt.addEventListener("click",()=>
{   
    let length1=document.getElementById("length");
n=length1.value;
    let fruitarr=[];

    let fruits=document.querySelectorAll('[type="checkbox"]');
    fruits.forEach(allop);
    function allop(item)
    {
        if(item.checked===true)
        {
            fruitarr.push(item.value);
        }
    }
    
    let error=document.getElementById("error");

    if(n<5 || n>20)
    {
        output.value="";
        error.textContent="Length of the password minimum 5 or maximum of 20 characters";
        return;
    }
    if(n>=5 && n<20)
    {
        error.textContent="";
    }
    
    if(fruitarr.length===0 )
    {
        output.value="";
        error.textContent="Select Any one of the character list";
        return;
    }
    if(fruitarr.length>=1)
    {
        error.textContent="";
    }
    
    console.log(fruitarr);

    let password="";

    fruitarr.forEach((item)=>{

        if(item==="uppercase")
        {
            password+=uppercase;
        }
        if(item==="lowercase")
        {
            password+=lowercase;
        }
        if(item==="numbers")
        {
            password+=numbers;
        }
        if(item==="special")
        {
            password+=special;
        }
        

    });

    let pass="";
    let i=0;
    while(i<n)
    {
        pass=pass+password[Math.floor(Math.random()*password.length)];
        i++;
    }
    output.value=pass;
    output.textContent=pass;
})
