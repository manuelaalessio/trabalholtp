class NoticiaDestaque extends Noticia {
  constructor(imagem_destaque, publishedAt, author, title, description, url) {
    super(title, publishedAt, author, description, url)
    this._imagem_destaque = imagem_destaque;
  }

  get mostrarImagem(){
    try {
      return this.montarImagem();
    } catch(erro){
      return erro.menssage;
    } finally{
      console.log("Codigo finalizado com sucesso");
    }  
  }
  
 montarImagem() {
   if (this._titulo != ""){
      return "<img src=" + this._imagem_destaque + "<h4>" +"Data da publicação: " + this._publishedAt + "</h4>" + "<h4>" + "Autor da Publicação: " + this._author + "</h4>" +  "<a href=" + this._url +">" + "<h1>" + this._title + "</h1>" + "</a>" + "<p>" + this._description + "</p>";
    } else {
      throw new ErroCustomizado("Item em falta, título não pode ser vazios, preencha o por favor");
    }
  }
}