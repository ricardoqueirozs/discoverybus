/**Variáveis */
const navMenu = document.getElementById('nav_menu'),
navClose = document.getElementById('nav_close'),
navToggle = document.getElementById('nav_toggle')


/**Menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu')
    })
}
