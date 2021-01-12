var getData = function(){
    var name = document.getElementById('name').value;
    var cellphone = document.getElementById('cellphone').value;
    var email = document.getElementById('email').value;
    var theme= document.getElementById('theme').value;
    var message= document.getElementById('message').value;


    if (name == '') {
        document.getElementById('name').focus();
    } else {
        if (cellphone == '') {
            document.getElementById('cellphone').focus();
        } else {
            if (email == '') {
                document.getElementById('email').focus();
            } else {
                if (theme == '') {
                    document.getElementById('theme').focus();
                } else{
                    if(message=='') {
                        document.getElementById('message').focus();
                    } else{
                        console.log('Nombre y Apellido: ' + name +' '+ 'Celular: ' + cellphone+ ' ' + 'Email: ' + email + ' ' + 'Tema: ' + theme + ' ' + 'Mensaje: ' + message);
                document.getElementById('name').value = '';
                document.getElementById('cellphone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('theme').value = '';
                document.getElementById('message').value = '';
                    }
                }
                
            }
        }
    }
    
}