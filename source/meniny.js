var xmlDoc = loadXMLDoc("source/meniny.xml");					
var zaznam = xmlDoc.getElementsByTagName("zaznam");

function loadXMLDoc(XMLname)				//funkcia pre načítanie XML súboru
{
    var xmlDoc;
    if (window.XMLHttpRequest)
    {
        xmlDoc=new window.XMLHttpRequest();		//objekt slúži na výmenu dát medzi servrom a súborom
        xmlDoc.open("GET",XMLname,false);
        xmlDoc.send("");
        return xmlDoc.responseXML;
    }
}

function returnMeniny(dd,mm){						//vstup je den a mesiac a vystup meno v daný den
	if(dd<10){
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	}
	var param="";		//v XML súbore je den 12.5. písany ako 1205, takže je potreba to spojiť
	param=mm+dd;
	var string="";
	var den;
	for(var i=0;i<zaznam.length;i++){				//cyklus prehľadáva 1205 a do stringu zapíše dnešné meniny, sviatky
		den=zaznam[i].getElementsByTagName("den")[0].childNodes[0].nodeValue;	
		if(den==param){
			if(zaznam[i].getElementsByTagName("SK")[0] && zaznam[i].getElementsByTagName("SK")[0].firstChild)	
				string+="SK: "+zaznam[i].getElementsByTagName("SK")[0].childNodes[0].nodeValue;
			if(zaznam[i].getElementsByTagName("SKsviatky")[0] && zaznam[i].getElementsByTagName("SKsviatky")[0].firstChild)	
				string+="<br>SKsviatky: "+zaznam[i].getElementsByTagName("SKsviatky")[0].childNodes[0].nodeValue;
			if(zaznam[i].getElementsByTagName("SKd")[0] && zaznam[i].getElementsByTagName("SKd")[0].firstChild)	
				string+="<br>SKd: "+zaznam[i].getElementsByTagName("SKd")[0].childNodes[0].nodeValue;
		}
	}
	return string;
}

function getDateOrName(vstup){				//fukcia, ktorá zistuje, čí bolo zadané meno alebo priezvisko ako vstup

	var x=parseInt(vstup.charAt(0));	//prvé písmeno vstupu som previedol na int a ak bude v rozmedzí 0-3 tak to považujem za dátum
	if(x>=0 && x<=3){
		var den="";
		var mes="";
		var bodka=0;
		for(i=0;i<vstup.length;i++){
			if(vstup.charAt(i)=="."){
				bodka++;
				continue;
			}
			if(bodka==0){
				den+=vstup.charAt(i);
			}
			if(bodka==1){
				mes+=vstup.charAt(i);
			}
		}
		if(mes<10){
			mes="0"+mes;
		}
		if(den<10){
			den="0"+den;
		}
		mes=parseInt(mes);		//zistujem počet dní daného mesiaca, pr. január,marec... majú 31 dní
		switch(mes){
			case 01:
			case 03:
			case 05:
			case 07:
			case 08:
			case 10:
			case 12:
				if(!(den>=1 && den<=31)){
					alert("Zadajte meno alebo dátum vo formáte dd.mm.");
					return 0;
				}
			break;
			case 04:
			case 06:
			case 09:
			case 11:
				if(!(den>=1 && den<=30)){
					alert("Zadajte meno alebo dátum vo formáte dd.mm.");
					return 0;
				}
			break;
			case 02:
				if(!(den>=1 && den<=29)){
					alert("Zadajte meno alebo dátum vo formáte dd.mm.");
					return 0;
				}
			break;
			default: 
				alert("Zadajte meno alebo dátum vo formáte dd.mm.");
				return 0;
					break;

		}
		document.getElementById("result").innerHTML="Meniny: <br>"+returnMeniny(den,mes);
	}
	else{
		var date="";
		var mena="";
		var meno="";
		var meno2="";

		for(j=0;j<vstup.length;j++){	//ak zadáme meno vo formate mArek, tak nám automaticky meno urpaví na Marek
			if(j==0){
				meno+=vstup.charAt(0).toUpperCase();
			}
			else{
				meno+=vstup.charAt(j).toLowerCase();
			}
		}
		meno2=meno;
				meno=meno.replace('á','a');	//aby bolo možné zadávať mená bez diakritiky tak ich musíme zmeniť
				meno=meno.replace('ľ','l');
				meno=meno.replace('š','s');
				meno=meno.replace('č','c');
				meno=meno.replace('ť','t');
				meno=meno.replace('ž','z');
				meno=meno.replace('ý','y');
				meno=meno.replace('í','i');
				meno=meno.replace('é','e');
				meno=meno.replace('ň','n');
				meno=meno.replace('ó','o');
				meno=meno.replace('ô','o');
		
		//alert(meno);
		for(i=0;i<zaznam.length;i++){
			if(zaznam[i].getElementsByTagName("SK")[0] && zaznam[i].getElementsByTagName("SK")[0].firstChild){	//prechádzame každé meno a v druhom if zistujeme či sme našli naše meno
				mena=zaznam[i].getElementsByTagName("SK")[0].childNodes[0].nodeValue;
				mena=mena.replace('á','a');	//aby bolo možné zadávať mená bez diakritiky tak ich musíme zmeniť
				mena=mena.replace('ľ','l');
				mena=mena.replace('š','s');
				mena=mena.replace('č','c');
				mena=mena.replace('ť','t');
				mena=mena.replace('ž','z');
				mena=mena.replace('ý','y');
				mena=mena.replace('í','i');
				mena=mena.replace('é','e');
				mena=mena.replace('ň','n');
				mena=mena.replace('ó','o');
				mena=mena.replace('ô','o');
			}	
			if(mena.search(meno) != -1) {		//funckia search hladá určité meno, ak ho nenájde vráti -1
				date=zaznam[i].getElementsByTagName("den")[0].childNodes[0].nodeValue;
			}
		}
		if(date!=""){	//ak máme uloženú hodnotu dátumu určiteho mena, tak ju už len funkciou splice vypíšeme 
			document.getElementById("result").innerHTML=meno2+" má meniny "+date.slice(2,4)+"."+date.slice(0,2)+".";
		}
		else{
			alert("Zadajte meno alebo dátum vo formáte dd.mm.");
		}	
	}
}

function showDate(){							//funkcia ukáže dnešny dátum a meniny v daný deň
	var dnes = new Date();
	var den = dnes.getDate();
	var mes = dnes.getMonth()+1;
	var rok = dnes.getFullYear();
	var datum=document.getElementById("datum");
	datum.innerHTML="Dnes je: "+den+"."+mes+"."+rok;
}