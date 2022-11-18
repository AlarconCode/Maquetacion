let card = document.querySelectorAll('.card')
// console.log(arrCard);
// console.log(card[0].children);

let arrCard = []
function getInfo() {

    let cardJson = {
                img: document.getElementById('imagen').value,
                origen: document.getElementById('origen').value,
                destino: document.getElementById('destino').value,
                titulo: document.getElementById('nombre').value,
                personas: document.getElementById('personas').value,
                descripcion: document.getElementById('descripcion').value,
                inicio: document.getElementById('fecha-inicio').value,
                final: document.getElementById('fecha-fin').value,
                precio: document.getElementById('precio').value
            }

    arrCard.push(cardJson)
    console.log(arrCard); 
}


function filter() {

    console.log(arrCard);
    console.log(arrCard[0].destino.toUpperCase());

    let arrFilter = []
    for (i=0;i<arrCard.length;i++) {
      
        if (arrCard[i].destino.toUpperCase() === 'Canarias'.toUpperCase() || arrCard[i].destino.toUpperCase() === 'Mallorca'.toUpperCase() || arrCard[i].destino.toUpperCase() === 'Galicia'.toUpperCase()) {
            
            arrFilter.push(arrCard[i])
        
        }
        
    }

    console.log(arrFilter);
    
    let cardContainer = document.querySelector('.card-container') 
    
    for (let i=0;i<arrFilter.length;i++) {
        
        cardContainer.innerHTML += `<section class="card">
                <img src=${arrFilter[i].img}>
                <div class="origen-container">
                    <span>Origen:</span>
                    <span class="origen">${arrFilter[i].origen}</span>
                </div>
                <div class="destino-container">
                    <span>Destino:</span>
                    <span class="destino">${arrFilter[i].destino}</span>
                </div>
                <h2 class="titulo">${arrFilter[i].titulo}</h2>
                <div class="personas-container">
                    <span>para </span>
                    <span class="personas">${arrFilter[i].personas}</span>
                    <span> personas</span>
                </div>
                <p class="descripcion">${arrFilter[i].descripcion}</p>
                <span class="fecha-inicio">${arrFilter[i].inicio}</span>
                <span class="fecha-fin">${arrFilter[i].final}</span>
                <span class="precio">${arrFilter[i].precio}</span>
            </section>`
    
    }

}