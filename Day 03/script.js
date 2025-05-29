const input=document.querySelector("#input");
const btn=document.querySelector("#btn");
const taskList=document.querySelector("#taskList");

btn.addEventListener("click",()=>{
  const task=input.value.trim();

  if(task===""){
    alert("Please Enter a Task !!!");  
    return; 
  }

  const div=document.createElement("div");
  div.className="itme-list";
  div.style.cssText="display:flex; justify-content:space-between;align-item:center;margin-top:6px;";

  const li=document.createElement("li");
  li.textContent=task;
  taskList.appendChild(li);
  li.style.cssText="list-style:none;color:white; overflow-wrap: break-word; width:500px; padding:10px 20px; margin-right:10px; background-color:grey;";

  const cross=document.createElement("i");
  cross.className = "fa-solid fa-xmark";
  cross.style.cssText="cursor:pointer; background-color:black; color:white; height: 50px;  padding:15px";

  cross.addEventListener("click",()=>{
    taskList.removeChild(div);
  })


  div.appendChild(li);
  div.appendChild(cross);
  taskList.appendChild(div);
  
  input.value = "";
 
});
  
//  // Create a wrapper div
//   const taskWrapper = document.createElement("div");
//   taskWrapper.className = "task-item";
//   taskWrapper.style.cssText = " display: flex; justify-content: space-between; align-items: center; margin-top: 10px;";

//   // Create li for the task
//   const li = document.createElement("li");
//   li.textContent = task;
//   li.style.cssText = "list-style: none; background-color:pink; width:500px;padding:10px 20px; margin-right:10px";

//   // Create trash icon
//   const trash = document.createElement("i");
//   trash.className = "fa-solid fa-trash";
//   trash.style.cssText = "cursor: pointer; padding: 12px 15px; color: red; background-color:blue;";

//   trash.addEventListener("click", () => {
//     taskList.removeChild(taskWrapper); // remove the whole div
//   });

//   taskWrapper.appendChild(li);
//   taskWrapper.appendChild(trash);
//   taskList.appendChild(taskWrapper);
  
//     input.value = "";
  
  