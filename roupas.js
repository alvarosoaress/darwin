const roupas = document.querySelectorAll(".roupas");
const shape1 = document.querySelector("#shape-1")
const shape2 = document.querySelector("#shape-2")
const paragraph = document.querySelector(".roupa-p")
const sec = document.querySelector(".sec-roupas");
const popup = document.querySelector(".roupa-popup")
const body = document.querySelector("body")
const button = document.querySelector(".roupa-button")
const popupImg = document.querySelector(".popup-img")
const popupClose = document.querySelector(".popup-button")
let open = 0;
let rotation = 1;
let rodar = 0;

roupas.forEach(r => r.addEventListener("click", (e) => {
    let parent = e.target.parentNode
    let id = parent.getAttribute('id').slice(3);
    if (id == 1) {
        roupaClicked("vermelho", "O vermelho é uma cor forte, poderosa e com muita energia por trás dela. Pode ser ousado ou intenso, mas também é quente e convidativo. É uma cor ousada e apaixonada que pode fazer uma pessoa se sentir confiante e ousada em qualquer situação. O vermelho também pode ser usado para expressar raiva ou frustração quando você está se sentindo fortemente em relação a algo.")
        rotateCharacter("vermelho")
        updateRotation("vermelho")
    }
    if (id == 2) {
        roupaClicked("verde", "O verde é a cor da natureza, do crescimento e da renovação. É uma cor que tem sido associada à paz, harmonia e equilíbrio por milhares de anos. As pessoas costumam usar o verde porque querem sentir-se calmas e aterrorizadas em seu entorno.")
        rotateCharacter("verde")
        updateRotation("verde")
    }
    if (id == 3) {
        roupaClicked("azul", "O azul é a cor da tranquilidade, trazendo um efeito calmante sobre o corpo, sendo bastante usado quando a pessoa está se sentindo em baixo ou ansioso, usar o azul pode ajudá-lo a se acalmar, pensar racionalmente e se sentir melhor.")
        rotateCharacter("azul")
        updateRotation("azul")
    }
}))

function resetRotation() {
    rotation = 1;
}

function updateRotation(cor) {
    resetRotation()
    popupImg.addEventListener('click', () => {
        
        if (rotation >= 4) {
            rotation = 1
            rotateCharacter(cor)
        }
        else {
            rotation++;
            rotateCharacter(cor)
        }
    })
    
    }

function rotateCharacter(cor) {
    let path = "/imgs/%.png"
    let newPath = path.replace("%", cor.concat(rotation))
    popupImg.src = newPath
}

function roupaClicked(cor, texto) {
    if (shape1.classList.contains(cor)) {
        button.classList.remove("appear")
        paragraph.textContent = " ";
        shape1.classList.remove(cor)
        shape2.classList.remove(cor)
        sec.classList.remove("clicked")
    }
    else {
        shape1.className = ''
        shape2.className = ''

        button.classList.add("appear")
        shape1.classList.add("shape", cor)
        shape2.classList.add("shape", cor)
        sec.classList.add("clicked")
        paragraph.textContent = texto
    }
}

function popupBlockScroll() {
    if (open == 1) {
        popup.style = "display: none";
        body.style = "height: 100vw; overflow: y"
        open = 0;
    }
    else {
        popup.style = "display: flex";
        body.style = "height: 100%; overflow: hidden"
        open++;
    }
}