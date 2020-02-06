document.getElementById('calculateBut').addEventListener("click", function(){
	const a = Number(document.getElementById('a').value);
	const b = Number(document.getElementById('b').value);
	const c = Number(document.getElementById('c').value);
	document.getElementById('result').innerHTML = (c-b)/a;
});