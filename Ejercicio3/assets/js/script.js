n1 = document.querySelector("#select-1");
n2 = document.querySelector("#select-2");
n3 = document.querySelector("#select-3");


button = document.querySelector("button");
button.addEventListener('click', function() {
    password = n1.value + n2.value + n3.value;
    texto = document.querySelector("#mensaje")

    if(password == 911){
        texto.innerHTML = "Password 1 correcto";
    }
    else if(password == 714){
        texto.innerHTML = "Password 2 correcto";
    }
    else{
        texto.innerHTML = "Password incorrecto";
    }

})









// img = document.querySelector("img");

// mostrarBorde = false;
// img.addEventListener("click", function(){

//     if(mostrarBorde == false){
//         img.style.border = "solid red 2px";
//         mostrarBorde = true;
//     }
//     else{
//         img.style.border = "none";
//         mostrarBorde = false;
//     }
// });

