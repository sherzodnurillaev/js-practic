const txts = document.querySelectorAll('.tabheader__item') 
const imgs = document.querySelectorAll('.tabcontent') 
const dia = document.querySelector('dialog') 
const btnms = document.querySelectorAll('[data-modal]') 
const mclose = document.querySelector('[data-close]') 

const slider = document.querySelector('offer__slider span')

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
