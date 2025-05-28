const btn=document.querySelector(".btn");
const msg=document.querySelector(".msg");

btn.addEventListener("click",()=>{
  let name=document.querySelector("#name").value.trim();
  const gender=document.querySelector("#gender").value;
  const age = parseInt(document.querySelector("#age").value);


  name=name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
  if(!name || !gender || isNaN(age)){
    msg.textContent="plese fill the fiels correctly!"
  }

  if(gender==="male"){
    if(age>=20){
      msg.textContent=`Hi ${name}, You are Eligible for The Test!`
    } 
    else{
      msg.textContent=`Sorry ${name}, You are NOT Eligible for The Test!`
    }
  }
  else if(gender==="female"){
         if(age>=18){
           msg.textContent=`Hi ${name}, You are Eligible for The Test!`
         } 
         else{
           msg.textContent=`Sorry ${name}, You are NOT Eligible for The Test!`
         }
       }
      else {
        msg.textContent = `${name}, sorry we can't determine eligibility for "${gender}"`;
  }

})



