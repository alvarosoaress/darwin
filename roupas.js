const roupas = document.querySelectorAll(".roupas");
const background = document.querySelector(".shape")
const paragraph = document.querySelector(".roupa-p")
const sec = document.querySelector(".sec-roupas");
let oldP = 'Escolha uma roupa'

roupas.forEach(r => r.addEventListener("click", (e) => {
    let parent = e.target.parentNode
    let id = parent.getAttribute('id').slice(3);
    if (id == 1) {
        console.log('ola')
        background.classList.toggle("azul")
        sec.classList.toggle("clicked")
        paragraph.classList.toggle("small")
        paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores cum id sit explicabo repellendus voluptates voluptatibus ipsum ducimus ea quod recusandae tenetur iste eos doloremque cumque nobis iusto molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum asperiores ad quae ab eaque vel libero fugit, distinctio amet alias esse, excepturi perspiciatis quam minus blanditiis illo"
        return true
    }
}))
