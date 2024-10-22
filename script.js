let botaosom = document.querySelector(".botaosom")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")



botaosom.addEventListener("click", ligarsom)

function ligarsom(){
video.muted = false
}

botao.addEventListener("click", mostraModal)
modal.addEventListener("click", escondermodal)

function mostraModal(){
    modal.style.display = "block"
}

function escondermodal(){
    modal.style.display = "none"
}