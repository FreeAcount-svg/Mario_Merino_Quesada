// =====================================================
// ========== ELEMENTOS DEL DOM ========== 
// =====================================================

// ===== MENU DE HAMBURGESA =====
const hamburgerBtn = document.getElementById('hamburger');

// ========== CARROUSEL DE SECCIONES ========== 
const navMenu = document.getElementById('nav-menu');
const track = document.getElementById('slide-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide-cv');

// ===== Calcular WIDTH con el ancho del dispositovo =====
let tamanio = screen.width;

// ===== Calcular HEIGHT con el alto del dispositovo =====
let altoPantalla = screen.height;

// ===== Contador =====
let contador = 0;


// ====== (@MEDIAS) IR A LA SECCIÓN ELEGIDA  =====
const linkNav = document.querySelectorAll('li > a');
const secciones = document.querySelectorAll('main > section');
const portada = document.getElementById('portada');
const informacion = document.getElementById('carrousel-secciones');
const contacto = document.getElementById('contacto');

// ========== VENTANA EMERGENTE CON CERTIFICADO ========== 
const titulos = document.querySelectorAll('.titulo-slide');
const certificado = document.getElementById('certificado');
const btnVer = document.querySelectorAll('button[data-image]');
const verCertificado = document.getElementById('img-cert');
const volver = document.getElementById('volver');


// ==========================================
// ====== MENU DE HAMBURGESA =====
// ==========================================
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('activo');
});



// ==========================================
// ====== (@MEDIAS) IR A LA SECCIÓN ELEGIDA  =====
// ==========================================
if (tamanio <= 768) {

    linkNav.forEach((e) => {

        e.addEventListener('click', () => {

            if (e.textContent === 'Inicio') {

                secciones.forEach((i) => {
                    i.classList.remove('ver');
                });
                portada.classList.add('ver');
                navMenu.classList.remove('open');
                hamburgerBtn.classList.remove('activo');


            } else if (e.textContent === 'Información') {

                secciones.forEach((i) => {
                    i.classList.remove('ver');
                });
                informacion.classList.add('ver');
                navMenu.classList.remove('open');
                hamburgerBtn.classList.remove('activo');

            } else if (e.textContent === 'Contacto') {

                secciones.forEach((i) => {
                    i.classList.remove('ver');
                });
                contacto.classList.add('ver');
                navMenu.classList.remove('open');
                hamburgerBtn.classList.remove('activo');

            }
        });
    })
};



// =====================================================
// ========== CARROUSEL DE SECCIONES ========== 
// =====================================================
function actualizarPosicion() {
    track.style.transform = `translateX(${-tamanio * contador}px)`;
}

nextBtn.addEventListener('click', () => {
    if (contador < slides.length - 1) {
        contador++;
    } else {
        contador = 0;
    }
    actualizarPosicion();
});

prevBtn.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    } else {
        contador = slides.length - 1;
    }
    actualizarPosicion();
});



// =====================================================
// ========== VENTANA EMERGENTE CON CERTIFICADO ========== 
// =====================================================
volver.addEventListener('click', () => {
    certificado.style.display = 'none';
});

btnVer.forEach((item) => {

    const imagen = item.dataset.image;

    item.addEventListener('click', (e) => {
        certificado.style.display = 'flex';
        verCertificado.setAttribute('src', imagen);
    })
});

