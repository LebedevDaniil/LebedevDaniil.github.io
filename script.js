document.write('<input id="url" value="Введите название сайта:">');
document.write('</br>');
document.write('<button id="search">Поиск</button>');
var sb = document.getElementById('search');
var url = document.getElementById('url');
sb.addEventListener("click",function(){
	if (url.value == "whiten://test"){
		document.location.href = "https://lebedevdaniil.github.io/test.html";
	}
});
