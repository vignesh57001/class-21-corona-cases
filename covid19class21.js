let div=document.createElement("div");
div.style.textAlign="center";

var inp=document.createElement("input");
inp.setAttribute("type","text");
inp.setAttribute("id","country");
//inp.style.marginLeft="600px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo)
var active=document.createElement("div");
active.setAttribute("id","active");

var recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

var death=document.createElement("div");
death.setAttribute("id","death");



div.append(inp,button,active,recovered,death);
document.body.append(div);

async function foo(){
 let contname=document.getElementById("country").value;
  console.log(contname);

  let url=`https://api.covid19api.com/dayone/country/${contname}`;
  let result=await fetch(url);
  let result1=await result.json();
  console.log(result1);

  let index=result1.length-1;
  console.log(result1[index].Active);
  active.innerHTML=`total active cases:${result1[index].Active}`

  recovered.innerHTML=`total recovered cases:${result1[index].Recovered}`

  death.innerHTML=`total death cases:${result1[index].Deaths}`

}


