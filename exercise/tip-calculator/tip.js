function calcTip() {
	let subTotal = document.getElementById("subtotal").value * 1;
	let tipPer = document.getElementById("tip").value / 100;
	let total = document.getElementById("total");
	let result = subTotal + subTotal * tipPer;
	total.innerHTML = "$" + result.toFixed(2);
}