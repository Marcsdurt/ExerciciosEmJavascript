class Carros{
    constructor(marca, cor, gastoCombustivelPorKM){
        this.marca = marca
        this.cor = cor
        this.gastoCombustivelPorKM = gastoCombustivelPorKM
    }

    CalcularViagem(distancia, precoCombustivel){
        console.log("Você vai gastar "+distancia*this.gastoCombustivelPorKM*precoCombustivel+" para percorrer "+distancia+" km")
    }
}

let uno = new Carros("Fiat","prata", 1/12 )
uno.CalcularViagem(70, 5)
