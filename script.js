let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#xlogo")
function abrirFecharMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")
        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menuclassList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numerSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < numerSlides - 1) {
        slideAtual++
    } else {
        slideAtual = 0
    }
    banner.classList.add(slides[slideAtual])
}

const mostraSlideAnterior = () => {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {

        slideAtual--
    } else {
        slideAtual = numerSlides - 1
    }


    banner.classList.add(slides[slideAtual])

}

const selecionarSlide = (insdiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = insdiceSlide

    banner.classList.add(slides[insdiceSlide])
}

let listaCases = []

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach( cardCase => {


        template += ` <div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
        </div>`


    })

    elementoLista.innerHTML = template

}

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json()) 
    .then( (dados) => {

        listaCases = dados
        renderizarCases()
    })
    
}

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescreva = document.getElementById("campo-descreva").value
    console.log (valorNome)
    console.log (valorEmail)
    console.log (valorDescreva)



    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescreva
    }


    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta) 
        document.querySelector("#contato form").reset()
        alert("Solicitação cadastrada!!!!")
    })
    .catch(erro => {console.erro(erro)
    alert("Erro desconhecido ")
    })

    event.preventDefalt()
}





