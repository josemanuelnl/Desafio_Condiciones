n1 = document.querySelector("#input-1");
n2 = document.querySelector("#input-2");
n3 = document.querySelector("#input-3");


button = document.querySelector("button");
button.addEventListener('click', function() {
    suma = Number(n1.value) + Number(n2.value) + Number(n3.value)
    texto = document.querySelector("#resultado")

    if(suma<=10){
        
        texto.innerHTML = "Llevas "+ suma +" stickers";

    }
    else{
        
        texto.innerHTML = "Llevas demasiados stickers";
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

