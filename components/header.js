function header() {
    const el = document.querySelector('.header-content');
    const componentEl = document.createElement('header');
    componentEl.innerHTML = `
    <div class="ventana">
    <p class="ventana__cierra-ventana">X</p>
    <div class="ventana__cont">
    <a class="ventana__contenido" href="./portfolio.html">Portfolio</a>
    <a class="ventana__contenido" href="./servicios.html">Servicios</a>
    <a class="ventana__contenido" href="./contacto.html">Contacto</a>
    </div>
    </div>
    <header class="header">
    <img src="./src/logoFinal.png" alt="" class="header__img"/>
    <div class="header__PSC-mobile">
    <div class="barra"></div>
    <div class="barra"></div>
    <div class="barra"></div>
    </div>
    <div class="header__PSC-desktop">
    <a class="link" href="./portfolio.html">Portfolio</a>
    <a class="link" href="./servicios.html">Servicios</a>
    <a class="link" href="./contacto.html">Contacto</a>
    </div>
    </header>`;
    el.appendChild(componentEl);

    /* Ventana */
    const botonAbreVentanaEl = document.querySelector('.header__PSC-mobile');
    const ventanaEl = document.querySelector('.ventana');
    const botonCierraVentanaEl = document.querySelector('.ventana__cierra-ventana');

    botonAbreVentanaEl.addEventListener('click', () => {
        ventanaEl.style.display = 'inherit';
    });

    botonCierraVentanaEl.addEventListener('click', () => {
        ventanaEl.style.display = '';
    });
}
header();
