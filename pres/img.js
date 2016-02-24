var i = 1;
function rotar_imagen() {
	var tiempo = 5000;//tiempo en milisegundos
	var arrImagenes = ['http://3.bp.blogspot.com/_bVS2bdfO4As/RkvjtoibTxI/AAAAAAAAAso/c1Y93BkfBrs/s320/01_HomerSimpson.gif','http://www.seeklogo.com/images/H/Homer_Butt_Homero_Trasero-logo-807B1B6A2E-seeklogo.com.gif', 'http://2.bp.blogspot.com/__UX7GOPM7wI/SeAOEWkWsWI/AAAAAAAAAWQ/0xaOwEIue_I/s200/Homer_Simpson.png'];
	var img = document.getElementById('rotativo');
      
      //cargar la 1er imagen
	_img.src = arrImagenes[0];
  var i=1;
  setInterval(function(){
	if(i<2){

    _img.src = arrImagenes[i];
    i = (i == arrImagenes.length-1)? 0 : (i+1);}
  }, tiempo);
      
    }