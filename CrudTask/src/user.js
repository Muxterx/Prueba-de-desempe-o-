const API="http://localhost:3000";
const u=JSON.parse(localStorage.getItem("session"));

async function load(){
 let r=await fetch(`${API}/tasks?userId=${u.id}`);
 let t=await r.json();
 let l=document.getElementById("taskList");
 l.innerHTML="";
 t.forEach(x=>{
  l.innerHTML+=`
   <li class="list-group-item bg-dark text-white">
   ${x.title}-${x.status}
   <button class="btn btn-sm btn-danger float-end" onclick="del(${x.id})">X</button>
   </li>`;
 });
}
async function addTask(){
 await fetch(`${API}/tasks`,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({title:title.value,status:"pending",userId:u.id})
 });
 load();
}
async function del(id){
 await fetch(`${API}/tasks/${id}`,{method:"DELETE"});
 load();
}
load();
