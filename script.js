document.write('<h1 id="title">WhiteNet</h1> </br>');
document.write('<input id="url">');
document.write('<button id="search">Поиск</button>');
var sb = document.getElementById('search');
var url = document.getElementById('url');
sb.addEventListener("click",function(){
	if (url.value == "whiten://test.com"){
		document.location.href = "https://lebedevdaniil.github.io/test.html";
	}
	else if (url.value == "whiten://clicker.com"){
		document.location.href = "https://lebedevdaniil.github.io/clicker.html";
	}
});
