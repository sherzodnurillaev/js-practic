const txts = document.querySelectorAll('.tabheader__item') 
const imgs = document.querySelectorAll('.tabcontent') 
const dia = document.querySelector('dialog') 
const btnms = document.querySelectorAll('[data-modal]') 
const mclose = document.querySelector('[data-close]') 

const slider = document.querySelector('offer__slider span')

const lef = document.getElementById('current')
const rig = document.getElementById('total')
const swips = document.querySelectorAll('.swiper-wrapper img')

// lef.innerText = 1
// rig.innerText = 4


swips.forEach((swip, i) => {
    swip.onclick = () => {
        lef.innerText = i + 1
    }
})


btnms.forEach(btnm => {
    btnm.onclick = () => {
        dia.show()
    }
    mclose.onclick = () => {
        dia.close()
    }
})


txts.forEach((txt, index = 0) => {
    txt.onclick = () => {
        txts.forEach(item => {
            item.classList.remove('tabheader__item_active') 
        })
        txt.classList.add('tabheader__item_active')
        txt.style.transition = '.5s ease'
        cont(index)
    }
})

function cont(idx = 0) {
    imgs.forEach((img) =>{
        img.classList.add('hide')
        
    })
    imgs[idx].classList.remove('hide')
    imgs[idx].classList.add('show')
}

cont(0)

let cor = new Date()
console.log(cor);