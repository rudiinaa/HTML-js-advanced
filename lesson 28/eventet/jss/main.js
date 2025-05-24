var butoni1 = document.getElementById('btn1')
var butoni2 = document.getElementById('btn2')
var butoni3 = document.getElementById('btn3')
var butoni4 = document.getElementById('btn4')

butoni1.onclick = function(){
    alert("ju sapo keni klikuar butonin")
}
butoni2.onmouseover = function(){
    alert("ju sapo keni klikuar butonin e dyte")
}
butoni3.onmouseleave = function(){
    alert("ju sapo keni klikuar butonin e tret")
}
butoni4.onmousup = function(){
    alert("ju sapo keni klikuar butonin e katert")
}