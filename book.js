let addbutt=document.querySelector(".plus");
let popup=document.querySelector(".popup");
let addbookdet=document.querySelector(".addbookdet");
let addbook=document.querySelector(".addbutt");
let cancel=document.querySelector(".cancelbutt");

addbutt.addEventListener("click",()=>
{
    addbookdet.style.display="block";
    popup.style.display="block";
})


cancel.addEventListener("click",()=>
{
    addbookdet.style.display="none";
    popup.style.display="none";
})

let cont=document.querySelector(".cont");
let bookcont=document.querySelector(".bookcont")

let bname=document.getElementById("bname");
let bauth=document.getElementById("bauth");
let bdesc=document.getElementById("bdesc");
let dele=document.getElementById("delete");

function del(event)
{
    event.target.parentElement.remove();
    console.log(event.target);
}

addbook.addEventListener("click",()=>
{
    let bnameval=bname.value;
    let bauthval=bauth.value;
    let bdescval=bdesc.value;

    let newelediv= document.createElement("div");
    let neweleh2= document.createElement("h2");
    let neweleh4= document.createElement("h4");
    let newelep= document.createElement("p");
    let newelebutton= document.createElement("button");

    neweleh2.textContent=bnameval;
    neweleh4.textContent=bauthval;
    newelep.textContent=bdescval;
    newelebutton.textContent="Delete";

    newelediv.append(neweleh2);
    newelediv.append(neweleh4);
    newelediv.append(newelep);
    newelediv.append(newelebutton);



    newelediv.setAttribute("class","bookcont")
    // newelebutton.setAttribute("id","delete");
    newelebutton.setAttribute("onclick","del(event)");


    cont.append(newelediv);

    addbookdet.style.display="none";
    popup.style.display="none";

    bname.value="";
    bauth.value="";
    bdesc.value="";
})
