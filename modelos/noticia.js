class Noticia {
  constructor(title, publishedAt, author, description, url) {
    this._title = title;
    this._publishedAt = publishedAt;
    this._author = author;
    this._description = description;
    this._url = url;
  }

  get mostrarNoticia(){
    try {
      return this.montarNoticia();
    } catch(erro){
      return erro.menssage;
    } finally{
      console.log("Codigo finalizado com sucesso");
    }  
  }

  montarNoticia() {
    if (this._title != ""){
      return "<a href="+ this._url +">" + "<h1>" + this._title + "</h1>" + "</a>" + "<h4>" + "Data da Publicação: " + this._publishedAt + "</h4>" + "<h4>" + "Autor da Publicação: " + this._author + "</h4>" + "<p>" + this._description + "</p>" + "<br />";
    } else {
      throw new ErroCustomizado("Item em falta, título não pode estar vazios, preencha o por favor");
    }
  }
}