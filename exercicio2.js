class Pessoa{
    constructor(nome, peso, altura){
      this.nome = nome
      this.peso = peso
      this.altura = altura  
    }

    CalcularImc(){
        return this.peso / (this.altura*this.altura)
    }
}

let pessoa1 = new Pessoa("José", 77, 1.81 )
console.log(pessoa1.CalcularImc())
