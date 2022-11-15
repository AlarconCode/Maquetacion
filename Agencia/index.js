let card = document.querySelectorAll('.card')
// console.log(arrCard);
// console.log(card[0].children);

function getInfo() {

    let arrCard = []
    
    for (i=0;i<card.length;i++) {
        
        let cardJson = {
            img: card[i].querySelector('img').src,
            origen: card[i].querySelector('.origen').innerHTML,
            destino: card[i].querySelector('.destino').innerHTML,
            titulo: card[i].querySelector('.titulo').innerHTML,
            personas: card[i].querySelector('.personas').innerHTML,
            descripcion: card[i].querySelector('.descripcion').innerHTML,
            tiempo: card[i].querySelector('.tiempo').innerHTML,
            precio: card[i].querySelector('.precio').innerHTML
        }
     
        arrCard.push(cardJson)
    }    

    console.log(arrCard); 
    return arrCard
}


function filter() {
   
    let arrCard = getInfo()
    let inputDestino = document.getElementById('destino').value
    let inputOrigen = document.getElementById('origen').value
        
    let arrFilter = []
    for (i=0;i<arrCard.length;i++) {
      
        if (inputDestino.toUpperCase() == arrCard[i].destino.toUpperCase()) {
            
            arrFilter.push(arrCard[i])
        
        }
        
    }
    
    console.log(arrFilter);
    
    let cardContainer = document.querySelector('.card-container')
    cardContainer.innerHTML = ''    
    
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
                <span class="tiempo">${arrFilter[i].tiempo}</span>
                <span class="precio">${arrFilter[i].precio}</span>
            </section>`
    
    }

}