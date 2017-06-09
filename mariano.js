
function validar(){
    var campo1si = document.getElementById("campo1si");
    var campo2si = document.getElementById("campo2si");
    var campo3si = document.getElementById("campo3si");
    var campo4si = document.getElementById("campo4si");  
                
    campo1 = document.getElementById("nombre").value;
        
        if( campo1 == null || campo1.length == 0 || /^\s+$/.test(campo1) ) 
            {
                campo1si.innerHTML="<h5>El campo Nombre es obligatorio</h5>";
                return false;
            }
                else 
                    {
                        campo1si.innerHTML="<p>Correcto</p>";
                    }

               
    campo2 = document.getElementById("telefon").value;
                
        if( isNaN(campo2) || campo2 > 999999999 || campo2 < 100000000)  
            {
                campo2si.innerHTML="<h5>El Teléfono es  invalido</h5>";
                return false;
            }
            else 
                {
                    campo2si.innerHTML="<p>Correcto</P>";
                }

                

    var campo3 = document.getElementById("email").value;
    var valida=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
               
        if (!valida.test(campo3)) 
            {
                campo3si.innerHTML="<h5>Email incorrecto</h5>";
                return false;
            }
            else 
                {
                    campo3si.innerHTML="<p>Correcto</P>";
                }

    campo4 = document.getElementById("marcar");
                
        if (!campo4.checked)
            {
                campo4si.innerHTML="<h5>Es obligatotio aceptar los términos y condiciones</h5>";
                return false;
            }
            else 
                {
                    campo4si.innerHTML="<p>Correcto</P>";
                } 
}


                  
function campo1si() {
                var campo1si = document.getElementById("campo1si");
                campo1 = document.getElementById("nombre").value;
                if( campo1 == null || campo1.length == 0 || /^\s+$/.test(campo1) ) 
                    {
                        campo1si.innerHTML="<h5>El campo Nombre es obligatorio</h5>";
                        return false;
                }
                else 
                    {   
                        campo1si.innerHTML="<p>Correcto</P>";
                    }
}
   

function campo2si() {
                var campo2si = document.getElementById("campo2si");
                campo2 = document.getElementById("telefon").value;
                if( isNaN(campo2) || campo2 > 999999999 || campo2 < 100000000)  
                    {
                        camp24si.innerHTML="<h5>En Teléfono es  invalido</h5>";
                        return false;
                }
                else 
                    {
                        campo2si.innerHTML="<p>Correcto</P>";
                    }

}


function campo3si() {
                var campo3si = document.getElementById("campo3si");
                var campo3 = document.getElementById("email").value;
                var valida=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!valida.test(campo3)) 
                    {
                        campo3si.innerHTML="<h5>Email incorrecto</h5>";
                        return false;
                }
                else 
                    {
                        campo3si.innerHTML="<p>Correcto</P>";
                    }
}


function campo4si() {
                var campo4si = document.getElementById("campo4si");
                campo4 = document.getElementById("marcar");
                if (!campo4.checked)
                    {
                        campo4si.innerHTML="<h5>Es obligatotio aceptar los términos y condiciones</h5>";
                        return false;
                }
                else 
                    {
                        campo4si.innerHTML="<p>Correcto</P>";
                    } 
}

/*MAP*/

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

