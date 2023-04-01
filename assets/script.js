//creer un variable pour l'element body
let elementBody = document.querySelector("body");
// obtenir la valeur du input first-color
    let firstColor = document.querySelector("#firstcolor");
    let valueStColor = firstColor.value;
    console.log(valueStColor);

// obtenir la valeur du input second-color
    let secondColor = document.querySelector("#secondcolor");
    let valueNdColor = secondColor.value;
    console.log(valueNdColor);
//
    firstColor.addEventListener("input", function(){
        elementBody.style = "background: linear-gradient(to right,"+firstColor.value+","+secondColor.value+");";
        document.querySelector('p').innerText=elementBody.style.background;
    });
    secondColor.addEventListener("input", function(){
        elementBody.style = "background: linear-gradient(to right,"+firstColor.value+","+secondColor.value+");";
        document.querySelector('p').innerText=elementBody.style.background;
    });
