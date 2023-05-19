//your JS code here. If required.
let display=document.getElementById("counter");
let increment=document.getElementById("incrementBtn");
let count=0;
display.innerHTML=count;
let handleIncrement=()=>{
	count++;
	display.innerHTML=count;
	alert(count);
}
increment.addEventListener("click",handleIncrement);

