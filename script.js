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

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=760",
        descricao: "Uma empresa de tecnologialança um desafio de gamificação, onde os funcionarios devem propor e implementar ideias inovadoras.",
    },

    {
        imagem: "https://unsplash.it/600/400?image=201",
        descricao: "Empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento",
    },

    {
        imagem: "https://unsplash.it/600/400?image=549",
        descricao: "Uma empresa de games implementa uma competição gamificada entre equipes que competem pelo topo do ranking",
    },

    {
        imagem: "https://unsplash.it/600/400?image=15",
        descricao: "Uma empresa de saude promove o bem estar dos funcionarios atraves de um desafio de gamificção e condicionamento fisico",
    },
]

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



