const API="http://localhost:3000";

async function login(){
 const e=email.value,p=password.value;
 let r=await fetch(`${API}/users?email=${e}&password=${p}`);
 let d=await r.json();
 if(!d.length)return alert("Error");
 localStorage.setItem("session",JSON.stringify(d[0]));
 location=d[0].role==="admin"?"admin.html":"user.html";
}

async function register(){
 await fetch(`${API}/users`,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({name:name.value,email:email.value,password:password.value,role:"user"})
 });
 location="index.html";
}

function logout(){
 localStorage.removeItem("session");
 location="index.html";
}
