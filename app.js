const zeroVar = document.querySelector('.off');
const oneVar = document.querySelector('.on');
zeroVar.addEventListener('click', ()=>{
	if (oneVar.classList.contains("on")) {
		oneVar.classList.add("active");
		zeroVar.classList.remove("active");
		document.body.style.color = "black";
		document.body.style.background = "#fffcdc";
	}
})

oneVar.addEventListener('click', ()=>{
	if (zeroVar.classList.contains("off")) {
		zeroVar.classList.add("active");
		oneVar.classList.remove("active");
		document.body.style.background = "#0F2027";
		document.body.style.color = "white";
	}
})

