var novaUloha;
var cisloUlohy = 0;

function vypisUlohy() {
	clearBox();

	if (localStorage.length) {
		for( i = 0; i < localStorage.length-1; i++) {
			var x = "uloha" + i;
			var pridaj = localStorage.getItem("uloha"+i);
			$("#ulohy").append('<div class="tag obl5">'+pridaj+ ' <input type="checkbox" onClick="vymaz(\''+x+'\')"></div>');
		}
	}
}


function newWork() {
	cisloUlohy = localStorage.length-1;
	novaUloha = prompt('Zadaj meno novej ulohy: ', '');
	if (!window.localStorage) { 
		document.write("Nepodporovaný localStorage");
	}

	if (novaUloha === "" || !novaUloha) {
		return false;
	}
	localStorage.setItem("uloha" + cisloUlohy, novaUloha);
	cisloUlohy++;
	vypisUlohy();
}

function clearBox() {
  $("#ulohy").empty();
}

function vymaz(id) {	
	var ktore = id.charAt(5);
	var udaj; 
	var x;
	if( ktore < localStorage.length - 2) {
		for( i = ktore; i < localStorage.length - 2; i++ ) {
			x = i;
			x++;
			var hladam = "uloha" + x;
			udaj = localStorage.getItem(hladam);
			localStorage.setItem("uloha"+i, udaj);
		}
		localStorage.removeItem("uloha"+x);
	} else {
		localStorage.removeItem(id);
	}
	
	vypisUlohy();
}
