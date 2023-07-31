let teal = document.getElementById("teal");
let aqua = document.getElementById("aqua");
let pink = document.getElementById("pink")
let colorless = document.getElementById("colorless")
let purple = document.getElementById("purple")
let  color_display = document.getElementById("color-display");

pink.addEventListener("click", changePink);
teal.addEventListener("click", changeTeal);
aqua.addEventListener("click", changeAqua);
purple.addEventListener("click", changePurple);
colorless.addEventListener("click", changeWhite);


function changeAqua(){
    color_display.style.display = "block"
    color_display.style.backgroundColor = "#00FFFF"
    color_display.innerHTML = "Aqua"
}

function changeTeal(){
    color_display.style.display = "block"
    color_display.style.backgroundColor = "#00BABA"
    color_display.innerHTML = "Teal"
}

function changePink(){
    color_display.style.display = "block"
    color_display.style.backgroundColor = "#FFC0CB"
    color_display.innerHTML = "Pink"
}

function changePurple(){
    color_display.style.display = "block"
    color_display.style.backgroundColor = "#800080"
    color_display.innerHTMl = "Purple"
}

function changeWhite(){
    color_display.style.display = "block"
    color_display.style.backgroundColor = "#FFFFFF"
    color_display.innerHTML = "colorless"

}