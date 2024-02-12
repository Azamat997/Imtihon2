let openBtn = document.querySelector('#open-btn')
let closeBtn = document.querySelector('#close-btn')
let navlink = document.querySelector('.nav__link')

openBtn.addEventListener('click',()=>{
closeBtn.style.display = 'inline-block'
openBtn.style.display = 'none'
navlink.style.display = 'flex'
})

closeBtn.addEventListener('click',()=>{
    openBtn.style.display = 'inline-block'
    closeBtn.style.display = 'none'
    navlist.style.display = 'none'
    })