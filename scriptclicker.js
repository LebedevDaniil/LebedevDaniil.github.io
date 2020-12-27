var moneyInt = 0;
var plus = 1;
document.write('<div id="menu">')
document.write('<h1 id="money">0</h1>');
document.write('<a id="button">Кликай</a>');
document.write('</br> </br>');
document.write('<a id="button2">Магазин</a>');
document.write('</div>');
document.write('</br></br></br><div id="shop">');
document.write('<h1>Магазин</h1>');
document.write('<a id="button3">Назад</a>');
document.write('</div>');
var money = document.getElementById('money');
var button = document.getElementById('button');
var button2 = document.getElementById('button2');
var shop = document.getElementById('shop');
var menu = document.getElementById('menu');
menu.scrollIntoView(true);
var button3 = document.getElementById('button3');
button.addEventListener("click",function(){
	moneyInt+=plus;
	money.textContent=moneyInt;
});
button2.addEventListener("click",function(){
	shop.scrollIntoView(true);
});
button3.addEventListener("click",function(){
	menu.scrollIntoView(true);
});
