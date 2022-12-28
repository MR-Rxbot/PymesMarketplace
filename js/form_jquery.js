// $("#guardar").click(function(){
//     alert('boton clickeado')
// })



$.validator.addMethod("terminaengmail", function(value, element, param){

    if(value.endsWith(param)){
        return true;
    }
        return false;
    

}, ("Debe terminar en {0}") )






$("#form").validate({
    rules: {
        nombre:{
            required: true,
            minlength: 3,
            maxlength: 30      
        },
        apellido:{
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email:{
            required: true,
            email: true,
            terminaengmail:"gmail.cl",
        },
        textarea: {
            required: false
        }
    }
})



$("#guardar").click(function(){
    if($("#form").valid() == false){
        alert("No has llenado los todos los campos")
        return;
    }
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let email = $("#email").val();
    let comentario = $("#textarea").val();

    console.log(nombre, apellido, email + "=>" + comentario )
})