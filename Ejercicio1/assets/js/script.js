
img = document.querySelector("img");

mostrarBorde = false;
img.addEventListener("click", function(){

    if(mostrarBorde == false){
        img.style.border = "solid red 2px";
        mostrarBorde = true;
    }
    else{
        img.style.border = "none";
        mostrarBorde = false;
    }
});

