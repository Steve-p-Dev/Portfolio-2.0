<<<<<<< HEAD
const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');


iconToggle.addEventListener('click',() => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click',() => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// Change background header
function scrollHeader () {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/* Hero type efect */
const typed = document.querySelector('.typed');
if (typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed',{
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay:2000
    });
}
// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop =section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

//Resume scroll
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('resume');

function resumeActive () {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 120;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current')
        }else{
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current')
        }
    })
}

window.addEventListener('scroll', resumeActive);

// Portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li')

function activePortfolio () {
    filterItems.forEach(el => {
        el.classList.remove('filter-active')
        this.classList.add('filter-active')
    });
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortfolio);
});

// mixitup filter portfolio
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
    selectors:{
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
});

// Testimonail swiper
let swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

//Services 
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll('.services_modal'),
    modalClose = document.querySelectorAll('.modal_close-icon');


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})
//Switch para modo oscuro
    // Selecciona el interruptor de modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Agrega un event listener para detectar cambios en el interruptor
    darkModeToggle.addEventListener('change', function() {
        // Selecciona el body
        const body = document.getElementById('body');

        // Si el interruptor está activado (modo oscuro)
        if (darkModeToggle.checked) {
            // Agrega una clase al body para aplicar estilos de modo oscuro
            body.classList.add('dark-mode');
        } else {
            // Si el interruptor está desactivado (modo claro), elimina la clase de modo oscuro
            body.classList.remove('dark-mode');
        }
    });

//funcion para cuando se de en descargar cv esta despliegue si en español o ingles
document.addEventListener("DOMContentLoaded", function() {
    var options = document.getElementById("downloadOptions");
    options.style.display = "none"; // Aseguramos que el contenedor esté oculto al cargar la página

    document.getElementById("downloadBtn").addEventListener("click", function() {
        if (options.style.display === "none") {
            options.style.display = "block";
        } else {
            options.style.display = "none";
        }
    });
});


//funcion time line
$(document).ready(function(){
    var inputs = $('.input');
    var containers = $('.description-flex-container').find('.description-container');

    // Función para mostrar el contenido correspondiente al input activo
    function showActiveContent(index) {
        // Ocultar todos los contenedores y eliminar la clase 'active' de todos los inputs
        containers.hide();
        inputs.removeClass('active');

        // Mostrar el contenedor correspondiente al índice y agregar la clase 'active' al input
        containers.eq(index).show();
        inputs.eq(index).addClass('active');
    }

    // Mostrar contenido para el input activo cuando el documento esté listo
    var activeIndex = inputs.filter('.active').index();
    if (activeIndex !== -1) {
        showActiveContent(activeIndex);
    }

    // Manejar clic en los inputs para mostrar el contenido correspondiente
    inputs.click(function(){
        var index = $(this).index();
        showActiveContent(index);
    });
});













=======
const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');


iconToggle.addEventListener('click',() => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click',() => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// Change background header
function scrollHeader () {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/* Hero type efect */
const typed = document.querySelector('.typed');
if (typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed',{
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay:2000
    });
}
// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop =section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

//Resume scroll
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('resume');

function resumeActive () {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 120;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current')
        }else{
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current')
        }
    })
}

window.addEventListener('scroll', resumeActive);

// Portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li')

function activePortfolio () {
    filterItems.forEach(el => {
        el.classList.remove('filter-active')
        this.classList.add('filter-active')
    });
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortfolio);
});

// mixitup filter portfolio
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
    selectors:{
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
});

// Testimonail swiper
let swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

//Services 
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll('.services_modal'),
    modalClose = document.querySelectorAll('.modal_close-icon');


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})
//Switch para modo oscuro
    // Selecciona el interruptor de modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Agrega un event listener para detectar cambios en el interruptor
    darkModeToggle.addEventListener('change', function() {
        // Selecciona el body
        const body = document.getElementById('body');

        // Si el interruptor está activado (modo oscuro)
        if (darkModeToggle.checked) {
            // Agrega una clase al body para aplicar estilos de modo oscuro
            body.classList.add('dark-mode');
        } else {
            // Si el interruptor está desactivado (modo claro), elimina la clase de modo oscuro
            body.classList.remove('dark-mode');
        }
    });

//funcion para cuando se de en descargar cv esta despliegue si en español o ingles
document.addEventListener("DOMContentLoaded", function() {
    var options = document.getElementById("downloadOptions");
    options.style.display = "none"; // Aseguramos que el contenedor esté oculto al cargar la página

    document.getElementById("downloadBtn").addEventListener("click", function() {
        if (options.style.display === "none") {
            options.style.display = "block";
        } else {
            options.style.display = "none";
        }
    });
});


//funcion time line
$(document).ready(function(){
    var inputs = $('.input');
    var containers = $('.description-flex-container').find('.description-container');

    // Función para mostrar el contenido correspondiente al input activo
    function showActiveContent(index) {
        // Ocultar todos los contenedores y eliminar la clase 'active' de todos los inputs
        containers.hide();
        inputs.removeClass('active');

        // Mostrar el contenedor correspondiente al índice y agregar la clase 'active' al input
        containers.eq(index).show();
        inputs.eq(index).addClass('active');
    }

    // Mostrar contenido para el input activo cuando el documento esté listo
    var activeIndex = inputs.filter('.active').index();
    if (activeIndex !== -1) {
        showActiveContent(activeIndex);
    }

    // Manejar clic en los inputs para mostrar el contenido correspondiente
    inputs.click(function(){
        var index = $(this).index();
        showActiveContent(index);
    });
});













>>>>>>> 1348a7d1c1ac1f2418f55ffd283535262307a9b7
