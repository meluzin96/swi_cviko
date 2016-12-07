function zobrazNavstevy() {
	if( localStorage.getItem("counter") == undefined ) {
		localStorage.setItem("counter", 1)
	} else {
		var cnt = localStorage.getItem("counter");
		cnt++;
		localStorage.setItem("counter", cnt);
	}

	document.getElementById('counter').innerHTML = "Počet návštev: " + localStorage.getItem("counter");
}

