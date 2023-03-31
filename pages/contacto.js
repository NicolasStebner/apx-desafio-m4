function contacto(el) {
    const tituloFormEl = document.createElement('div');
    tituloFormEl.className = 'formulario-contenedorGeneral__titulo';
    tituloFormEl.innerHTML = `<p class="formulario-contenedorGeneral__titulo-info">Escribime</p>`;
    el.appendChild(tituloFormEl);
    const componentFormEl = document.createElement('form');
    componentFormEl.className = 'formulario';
    componentFormEl.innerHTML = `
        <div class="formulario__nombreYEmail">
            <label class="label">
                <div class="nombre">Nombre</div>
                <input
                    class="nombre-texto"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                />
            </label>
            <label class="label">
                <div class="email">Email</div>
                <input
                    class="email-texto"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                />
            </label>
        </div>
        <label class="label">
            <div class="mensaje">Mensaje</div>
            <textarea class="mensaje-texto"></textarea>
        </label>
        <label>
            <button id="botonLoco" class="boton">Enviar</button>
        </label>`;
    el.appendChild(componentFormEl);

    /* Submit */
    componentFormEl.addEventListener('submit', () => {
        const mensaje = {
            to: 'nicolas_stebner@hotmail.com',
            message: 'Desafio del módulo 4',
        };
        fetch('https://apx-api.vercel.app/api/utils/dwf', {
            method: 'POST',
            body: JSON.stringify(mensaje),
            headers: { 'content-type': 'application/json' },
        });
    });
}
function contactMain() {
    const formEl = document.querySelector('.formulario-contenedorGeneral');
    contacto(formEl);
}
contactMain();
