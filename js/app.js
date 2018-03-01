//Escribe tu código aqui----
let galeria = document.getElementById('gallery')
let imagenes = document.querySelectorAll('img');

const insertElements = (figure, figCaption, clone) => {
    galeria.appendChild(figure);
    figure.appendChild(clone);
    figure.appendChild(figCaption);
    figCaption.innerText = clone.alt;
}

const createElements = clone => {
    let figure = document.createElement('figure');
    figure.className = 'cardify-figure';
    let figCaption = document.createElement('figcaption');
    insertElements(figure, figCaption, clone);
}

Array.from(imagenes).forEach(image =>{
    let clone = image.cloneNode();
    createElements(clone);
    galeria.removeChild(image);
});