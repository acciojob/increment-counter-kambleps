//your JS code here. If required.
let display=document.getElementById("counter");
let increment=document.getElementById("incrementBtn");
let count=0;

display.innerHTML=count;
let handleIncrement=()=>{
	display.innerHTML=count;
	count++;
	alert(count);
}
increment.addEventListener("click",handleIncrement);

