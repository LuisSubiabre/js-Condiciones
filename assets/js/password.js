const password1 = 991;
const password2 = 714;

function comprobar(){
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let pass3 = document.getElementById("pass3").value;
    let password_ingresada = pass1 + pass2 + pass3;
    if(password_ingresada == password1){

        document.querySelector("span").innerHTML = "password 1 correcto";
        document.querySelector("span").classList.remove("text-red-500"); //remuevo color rojo
        document.querySelector("span").classList.add("text-green-500"); // añado color verde
    }else  if(password_ingresada    == password2){

        document.querySelector("span").innerHTML = "password 2 correcto";
        document.querySelector("span").classList.remove("text-red-500"); //remuevo color rojo
        document.querySelector("span").classList.add("text-green-500"); // añado color verde
    }else{

        document.querySelector("span").innerHTML = "password incorrecto";
        document.querySelector("span").classList.remove("text-green-500"); //remuevo color verde
        document.querySelector("span").classList.add("text-red-500"); // añado color rojo para indicar error

        
    }
}