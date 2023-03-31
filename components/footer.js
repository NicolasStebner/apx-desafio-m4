function footer() {
    const el = document.querySelector('.footer-content');
    const componentEl = document.createElement('footer');
    componentEl.innerHTML = `<footer class="footer">
    <img src="./src/logoFinal.png" alt="" class="footer__img" />
    <div class="footer__links">
        <div class="footer__link-cont">
            <img src="./src/home.png" alt="" class="footer__link-img" />
            <a class="footer__links-redirect" href="./index.html">Home</a>
        </div>
        <div class="footer__link-cont">
            <img src="./src/usuario.png" alt="" class="footer__link-img" />
            <a class="footer__links-redirect" href="./servicios.html">Servicios</a>
        </div>
        <div class="footer__link-cont">
            <img src="./src/telefono.png" alt="" class="footer__link-img" />
            <a class="footer__links-redirect" href="./contacto.html">Contacto</a>
        </div>
    </div>
    <div class="footer__redes">
        <img src="./src/linkedin.png" alt="" class="footer__redes-redSocial" />
        <img src="./src/github.png" alt="" class="footer__redes-redSocial" />
        <img src="./src/twitter.png" alt="" class="footer__redes-redSocial" />
    </div>
    <div class="footer__copy-school">
        <p class="footer__copy-school-year">2022 -</p>
        <a class="footer__copy-school-link" href="https://apx.school">https://apx.school</a>
    </div>
</footer>`;
    el.appendChild(componentEl);
}
footer();
