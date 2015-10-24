function corroborar() {
	var respuestas= ["no"]
	var check = document.getElementsByName("web");
	var respuesta1=document.getElementsByName("respuesta");
	if(respuesta1[0].id=="r1"){
		for(var i=0; i<check.length; i++){
			if(check[i].checked===true){
				respuesta1=check[i].value;
			}
		}
		if(respuesta1==respuestas[0]){
			alert("respuesta correcta, internet: redes hetereogeneas interconectadas; la web hace parte de internet y es un servicio de  que funciona con un protocolo HTTP");
			document.getElementById("cont").disabled =false;
		}else{
			alert("respuesta incorrecta");
		}
	}
	
/*	
	
*/
}