"use strict"
var list = document.getElementsByClassName("ox_list_item");

function click1(){
    list[0].style.boxShadow = "0 0 60px 20px #c1ffff"
    list[1].style.boxShadow = "none"
    list[2].style.boxShadow = "none"
    list[3].style.boxShadow = "none"
    list[4].style.boxShadow = "none"
}
function click2(){
    list[1].style.boxShadow = "0 0 60px 20px #c1ffff"
    list[0].style.boxShadow = "none"
    list[2].style.boxShadow = "none"
    list[3].style.boxShadow = "none"
    list[4].style.boxShadow = "none"
}

function click3(){
    list[2].style.boxShadow = "0 0 60px 20px #c1ffff"
    list[0].style.boxShadow = "none"
    list[1].style.boxShadow = "none"
    list[3].style.boxShadow = "none"
    list[4].style.boxShadow = "none"
}
function click4(){
    list[3].style.boxShadow = "0 0 60px 20px #c1ffff"
    list[0].style.boxShadow = "none"
    list[2].style.boxShadow = "none"
    list[1].style.boxShadow = "none"
    list[4].style.boxShadow = "none"
}
function click5(){
    list[4].style.boxShadow = "0 0 60px 20px #c1ffff"
    list[0].style.boxShadow = "none"
    list[2].style.boxShadow = "none"
    list[3].style.boxShadow = "none"
    list[1].style.boxShadow = "none"
}
function none(){
    list[0].style.boxShadow = "none"
    list[1].style.boxShadow = "none"
    list[2].style.boxShadow = "none"
    list[3].style.boxShadow = "none"
    list[4].style.boxShadow = "none"
}
// var oxLogo = document.getElementsByClassName("ox_logo")[0]
// var text = document.getElementsByTagName("h1")[0]
// function lightAll(){
//     if(list[0].style.boxShadow = "none"){
//         list[0].style.boxShadow = "0 0 60px 20px #c1ffff"
//     }else{
//         list[0].style.boxShadow = "none"
//     }
// }
var mobil1 = document.getElementsByClassName("mobil_menu")
var logo = document.getElementsByClassName("mobil_logo")[0]
function createMobil(){
    if(mobil1[0].style.display == "block"){
        mobil1[0].style.display = "none"
    }else{
        mobil1[0].style.display = "block"
    }
    if(logo.style.transform == "rotate(-90deg)"){
        logo.style.transform = "rotate(0deg)"
    }else{
        logo.style.transform = "rotate(-90deg)"
    }
}