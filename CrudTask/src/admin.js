const API="http://localhost:3000";

async function load(){
 let r=await fetch(`${API}/tasks`);
 let t=await r.json();
 total.innerText=t.length;
 let l=document.getElementById("taskList");
 l.innerHTML="";
 t.forEach(x=>{
  l.innerHTML+=`
   <li class="list-group-item bg-dark text-white">
   ${x.title}-${x.status}
   </li>`;
 });
}
load();
