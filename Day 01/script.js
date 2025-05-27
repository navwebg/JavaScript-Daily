const btnBody=document.querySelector(".btn-body");
const btnCard=document.querySelector(".btn-card");
const card=document.querySelector("#card");

btnBody.addEventListener("click",()=>{
  const r=Math.floor(Math.random()*256);
  const g=Math.floor(Math.random()*256);
  const b=Math.floor(Math.random()*256);

  const rndColor=`rgb(${r},${g},${b})`;
  document.body.style.background=rndColor;
});

btnCard.addEventListener("click",()=>{
  const r=Math.floor(Math.random()*256);
  const g=Math.floor(Math.random()*256);
  const b=Math.floor(Math.random()*256);

  const rndColor=`rgb(${r},${g},${b})`;

  card.style.background=rndColor;
});