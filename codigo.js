function corroborar(a) {
	var respuestas= ["no","Hyper Text Markup Language","<!--...-->","correcto"]
	var check = document.getElementsByName("web");
	var respuesta1=document.getElementsByName("respuesta");
	if(respuesta1[a].id=="r1"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
				check[i].checked=false;
			}
		}
		if(respuesta1=="correcto"){
			alert("respuesta correcta, internet: redes hetereogeneas interconectadas; la web hace parte de internet y es un servicio de  que funciona con un protocolo HTTP");
			document.getElementById('p2').style.display = 'block';
			document.getElementById('p1').style.display = 'none';
		}else{
			alert("respuesta incorrecta");
		}
	}else if(respuesta1[a].id=="r2"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
				check[i].checked=false;
			}
		}
		if(respuesta1=="correcto"){
			alert("Correcto sigue así!");
			document.getElementById('p3').style.display = 'block';
			document.getElementById('p2').style.display = 'none';
		}else{
			alert("respuesta incorrecta");
		}
	}else if(respuesta1[a].id=="r3"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
				check[i].checked=false;
			}
		}
		if(respuesta1=="correcto"){
			alert("Eso!!");
			document.getElementById('p4').style.display = 'block';
			document.getElementById('p3').style.display = 'none';
		}else{
			alert("respuesta incorrecta");
		}
	}else if(respuesta1[a].id=="r4"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
				check[i].checked=false;
			}
		}
		if(respuesta1=="correcto"){
			alert("Eso!!");
			document.getElementById('p5').style.display = 'block';
			document.getElementById('p4').style.display = 'none';			
		}else{
			alert("respuesta incorrecta");
		}
	}else if(respuesta1[a].id=="r5"){
		var ct= document.getElementById('rta5').value;
		if(ct=="post"){
			alert("muy bien!!");
			document.getElementById('p6').style.display = 'block';
			document.getElementById('p5').style.display = 'none';			
		}else{
			alert("respuesta incorrecta");
		}
	}else if(respuesta1[a].id=="r6"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
				check[i].checked=false;
			}
		}
		if(respuesta1=="correcto"){
			alert("Bien!!");
			document.getElementById('p7').style.display = 'block';
			document.getElementById('p6').style.display = 'none';			
		}else{
			alert("respuesta incorrecta");
		}
	}else if(respuesta1[a].id=="r7"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
				check[i].checked=false;
			}
		}
		if(respuesta1=="correcto"){
			alert("Bien!!");
			document.getElementById('p8').style.display = 'block';
			document.getElementById('p7').style.display = 'none';			
		}else{
			alert("respuesta incorrecta");
		}
	}else if(respuesta1[a].id=="r8"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
				check[i].checked=false;
			}
		}
		if(respuesta1=="correcto"){
			alert("Bien!!");
			document.getElementById('p9').style.display = 'block';
			document.getElementById('p8').style.display = 'none';			
		}else{
			alert("respuesta incorrecta");
		}
	}
}
