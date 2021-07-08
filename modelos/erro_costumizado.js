class ErroCustomizado extend Error {
  constructor(mensagem){
    super(mensagem);
    this.name = "ParameterError"
  }
}
