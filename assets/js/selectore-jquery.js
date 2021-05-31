/*------------------------------------------------------------------------------*/


//////*           BIENVENIDA           *//////

$("body").prepend('<h1  id="header" class="alt">Pick & Collect </h1>');

$(".alt").animate({
   
    opacity: "0.2",
    height: "150px",
},
    2500,
    () => {
        console.log("Termino animacion")
    });

///////////////////////////////////////////////////


/*------------------------------------------------------------------------------*/

//////*           ENVIO DE FORMULARIO          *//////

$('#form').on('submit', function(e){
    console.log(e);
    e.preventDefault();


    let nombre = $('#nombre').val();
    console.log(nombre);
    if (nombre == "") {
        $('#falta-usuario').html("No ingresaste nombre de usuario")
        $('#falta-usuario').css({fontSize: '10px', color: 'red'})   
    }


    let contrasenia = $('#contrasenia').val();
    console.log(contrasenia);
    if (contrasenia == "") {
       $('#falta-contrasenia').html("No ingresaste contraseña")
       $('#falta-contrasenia').css({fontSize: '10px', color: 'red'})
    }

    else if (contrasenia == "" && nombre == "");

    else if (nombre == "");

    else {

    $('#falta-usuario').html("")
    $('#falta-contrasenia').html("")

    $('#input-value').html("Hola " + nombre + " Gracias por registrarte");
    $('#input-value').css({padding: '20px'});
    }

})

///////////////////////////////////////////////////

/*------------------------------------------------------------------------------*/