let nameerror=document.getElementById("errorname");
let phoneerror=document.getElementById("errorphone");
let emailerror=document.getElementById("erroremail");
let messerror=document.getElementById("errormess");
let tickname=document.getElementById("tickname");
let tickphone=document.getElementById("tickphone");
let tickemail=document.getElementById("tickemail");
let tickmess=document.getElementById("tickmess");

let form=document.getElementById("form");
let submitbutt=document.getElementById("subbut");
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    let name1=document.getElementById("fname").value;
let phone1=document.getElementById("fnum").value;
let email1=document.getElementById("femail").value;
let message1=document.getElementById("fmess").value;
let matchname=name1.match(/^[A-Za-z]*\s{1}[A-Za-z]{1,2}]*$/);
let isvalid=true;
isvalid=false;

    if(name1.length===0 || name1.length<5)
    {
        nameerror.textContent="Enter name field and Name should be greater than 5 characters";
        tickname.innerHTML="";
        isvalid=false;
    }
    else if(!matchname)
    {
        nameerror.textContent="Enter the name properly or Enter the Last Name";
        tickname.innerHTML="";
        isvalid=false;
    }
    else 
    {
        nameerror.textContent="";
        tickname.innerHTML="&#10003;";
        isvalid=true
    }
    if(phone1.length===0 )
    {
        phoneerror.textContent="Enter Phone field";
        tickphone.innerHTML="";
        isvalid=false;
    }
    if(phone1.length<10)
        {
            tickphone.innerHTML="";
            phoneerror.textContent="The phone number must be 10 numbers";
            isvalid=false;
        }
    if(phone1.length>=10 && phone1.length<12)
    {
        tickphone.innerHTML="&#10003;"
        phoneerror.textContent="";
        isvalid=true;
    }
    if(email1.length===0)
    {
        emailerror.textContent="Enter Email field";
        tickemail.innerHTML="";
        isvalid=false;
    }
    else if(!email1.match(/^[A-Z0-9a-z._%+-]{3,10}@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/))
    {
        emailerror.textContent="Enter the proper Email address";
        tickemail.innerHTML="";
        isvalid=false;
    }
    else
    {
        tickemail.innerHTML="&#10003;"
        emailerror.textContent="";
        isvalid=true;
    }
    if(message1.length===0 )
    {
        messerror.textContent="Enter mess field";
         tickmess.innerHTML="";
         isvalid=false;
    }
    if(message1.length<20)
        {
             tickmess.innerHTML="";
            messerror.textContent="Message must be minimum 20 characters";
            isvalid=false;
        }
    if(message1.length>20)
        {
            tickmess.innerHTML="&#10003;"
            messerror.textContent="";
            isvalid=true;
        }

    if(isvalid)
    {
        form.removeEventListener("submit",);
    }

})