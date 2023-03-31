function fetchEnPantalla2(data) {
    const presentacion = data.items;
    const imagen = data.includes.Asset[0].fields.file.url;

    const contenedor = document.querySelector('.presentacion');
    const template = document.querySelector('#presentacion-template');
    for (const r of presentacion) {
        const titleEl = template.content.querySelector('.presentacion__contenedor-info-titulo');
        titleEl.textContent = r.fields.titulo;

        const descripcionEl = template.content.querySelector(
            '.presentacion__contenedor-info-descripcion'
        );
        descripcionEl.textContent = r.fields.descripcion;

        const imgEl = template.content.querySelector('.presentacion__contenedor-img');
        imgEl.src = imagen;

        const clone = document.importNode(template.content, true);
        contenedor.appendChild(clone);
    }
}
function presentacion() {
    fetch(
        'https://preview.contentful.com/spaces/c5dlmdkopz9z/environments/master/entries?access_token=3bdEfZhrdgVYs42k4gTdBAOu4JiZvTSNHfZKwYeEYuk&content_type=desafioM4Presentacion'
    )
        .then((res) => res.json())
        .then((data) => {
            fetchEnPantalla2(data);
        });
}
presentacion();
