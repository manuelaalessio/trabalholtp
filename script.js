let requestURL = "https://www.luizpicolo.com.br/api.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let elemento = document.getElementById("minhas_noticias");
let d = document.getElementById("destaque");

request.onload = function(){
  var noticias = request.response.articles;

  let destaque = new NoticiaDestaque(noticias[0].urlToImage, noticias[0].publishedAt, noticias[0].author,  noticias[0].title, noticias[0].description, noticias[0].url);

  d.insertAdjacentHTML('afterbegin', '<div id="test">' + destaque.mostrarImagem + '</div>');

  noticias.forEach(function(noticia){
    let n = new Noticia(noticia.title, noticia.publishedAt, noticia.author, noticia.description, noticia.url);

    elemento.insertAdjacentHTML('afterbegin', '<div id="test">' + n.mostrarNoticia + '</div>');
  })
}