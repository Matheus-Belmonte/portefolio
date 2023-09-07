

const Key = "1b8ae9cb6437eece26dfbf96140b8ba5"

function colocarDadosNaTela(dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML= "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML= Math.floor (dados.main.temp)  + "°C" 
    document.querySelector(".texto-previsão").innerHTML=dados.weather[0].description
    document.querySelector(".Umidade").innerHTML=dados.main.humidity + "%"
    document.querySelector(".img-previzao").crs = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`      

}


async function buscarCidade(cidade) {
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value 

    buscarCidade(cidade)

}

