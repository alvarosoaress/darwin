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
        roupaClicked("vermelho", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores cum id sit explicabo repellendus voluptates voluptatibus ipsum ducimus ea quod recusandae tenetur iste eos doloremque cumque nobis iusto molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum asperiores ad quae ab eaque vel libero fugit, distinctio amet alias esse, excepturi perspiciatis quam minus blanditiis illo")
        rotateCharacter("vermelho")
        updateRotation("vermelho")
    }
    if (id == 2) {
        roupaClicked("verde", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores cum id sit explicabo repellendus voluptates voluptatibus ipsum ducimus ea quod recusandae tenetur iste eos doloremque cumque nobis iusto molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum asperiores ad quae ab eaque vel libero fugit, distinctio amet alias esse, excepturi perspiciatis quam minus blanditiis illo")
        rotateCharacter("verde")
        updateRotation("verde")
    }
    if (id == 3) {
        roupaClicked("azul", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores cum id sit explicabo repellendus voluptates voluptatibus ipsum ducimus ea quod recusandae tenetur iste eos doloremque cumque nobis iusto molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum asperiores ad quae ab eaque vel libero fugit, distinctio amet alias esse, excepturi perspiciatis quam minus blanditiis illo")
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