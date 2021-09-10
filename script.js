function Calculate() {
	let a = document.querySelector("#A").value;
    // a represents Amount

	let r = document.querySelector("#R").value;
    // r represents Rate

	let m = document.querySelector("#M").value;
    // m represents Months

	let i = a / r;

    let tsoapi = ((a + i) - m).toFixed(0);
    let se = a * m;
    // tsoapi represents the Total Sum Of Amount Plus Interest

	document.querySelector("#total1").innerHTML = `Your profit for ${m} months is $${tsoapi}`;
    document.querySelector("#total2").innerHTML = `You are to pay back $${r} in ${m} months.`;
}


// lyrics.ovh