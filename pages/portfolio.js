function fetchEnPantalla(data) {
    const portfolio = data.items;
    const imagen = data.includes.Asset[0].fields.file.url;

    const contenedor = document.querySelector('.portfolio-bienvenida');
    const template = document.querySelector('#portfolio-template');
    for (const r of portfolio) {
        const titleEl = template.content.querySelector('.portfolio__contenedor-info-titulo');
        titleEl.textContent = r.fields.titulo;

        const subtitleEl = template.content.querySelector(
            '.portfolio__contenedor-info-subtituloUno'
        );
        /* If para saber si mostrar en pantalla "servicios" o "trabajos, accediendo al nombre de la pestaña" */
        if (document.title == 'Portfolio') {
            subtitleEl.textContent = r.fields.subtitulo;
        } else {
            subtitleEl.textContent = r.fields.subtituloDos;
        }

        const imgEl = template.content.querySelector('.portfolio__contenedor-img');
        imgEl.src = imagen;

        const clone = document.importNode(template.content, true);
        contenedor.appendChild(clone);
    }
}
function portfolioMain() {
    fetch(
        'https://preview.contentful.com/spaces/c5dlmdkopz9z/environments/master/entries?access_token=3bdEfZhrdgVYs42k4gTdBAOu4JiZvTSNHfZKwYeEYuk&content_type=desafioM4Portfolio'
    )
        .then((res) => res.json())
        .then((data) => {
            fetchEnPantalla(data);
        });
}
portfolioMain();
