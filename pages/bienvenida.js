function fetchEnPantalla(data) {
    const bienvenida = data.items;
    const imagen = data.includes.Asset[0].fields.file.url;

    const contenedor = document.querySelector('.bienvenida');
    const template = document.querySelector('#bienvenida-template');
    for (const r of bienvenida) {
        const titleEl = template.content.querySelector('.bienvenida__contenedor-info-titulo');
        titleEl.textContent = r.fields.titulo;

        const subtitleEl = template.content.querySelector('.bienvenida__contenedor-info-subtitulo');

        subtitleEl.textContent = r.fields.subTitulo;

        const imgEl = template.content.querySelector('.bienvenida__contenedor-img');
        imgEl.src = imagen;

        const clone = document.importNode(template.content, true);
        contenedor.appendChild(clone);
    }
}
function Bienvenida() {
    fetch(
        'https://preview.contentful.com/spaces/c5dlmdkopz9z/environments/master/entries?access_token=3bdEfZhrdgVYs42k4gTdBAOu4JiZvTSNHfZKwYeEYuk&content_type=desafioM4Bienvenida'
    )
        .then((res) => res.json())
        .then((data) => {
            /* console.log(data); */
            fetchEnPantalla(data);
        });
}
Bienvenida();
