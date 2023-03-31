function fetchEnPantalla3(data) {
    const trabajos = data.items;
    const imagen = data.includes.Asset[0].fields.file.url;

    const contenedor = document.querySelector('.servicios-fetch');
    const template = document.querySelector('#misServicios-template');
    for (const r of trabajos) {
        const titleEl = template.content.querySelector('.misServicios__contenedor-info-titulo');
        titleEl.textContent = r.fields.titulo;

        const descripcionEl = template.content.querySelector(
            '.misServicios__contenedor-info-descripcion'
        );
        descripcionEl.textContent = r.fields.descripcion;

        const imgEl = template.content.querySelector('.misServicios__contenedor-img');
        imgEl.src = imagen;

        const clone = document.importNode(template.content, true);
        contenedor.appendChild(clone);
    }
}
function servicios() {
    fetch(
        'https://preview.contentful.com/spaces/c5dlmdkopz9z/environments/master/entries?access_token=3bdEfZhrdgVYs42k4gTdBAOu4JiZvTSNHfZKwYeEYuk&content_type=desafioM4Trabajos'
    )
        .then((res) => res.json())
        .then((data) => {
            fetchEnPantalla3(data);
        });
}
servicios();
