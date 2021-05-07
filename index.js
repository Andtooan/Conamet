/*fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
      .then(response => response.json())
      .then(json => console.log(json))
*/


let searchInput = document.getElementById('search'); 
let searchBtn = document.getElementById('searchBtn');
let result = document.getElementById('result');

const URL_BASE = 'http://api.openweathermap.org/data/2.5/weather?appid=8e70b17d5b1269028a97e1525e060954&q=';

async function search() {
    try {
        const url = URL_BASE + searchInput.value;
        const response = await fetch(url);
        const info = await response.json();
    
        result.innerHTML = `
            Ciudad ${info.name} esta ${info.weather[0].description}
            y la temperatura es:  ${info.main.temp} °K
    `;
        
    } catch (error) {
        console.log(error);
    }
    

    //fetch(url)
    //.then((response) => response.json)
    //.then(json => console.log(json))
    //.catch(e => console.log(e))
};

searchBtn.addEventListener('click', search);

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' ) {   
    search();
    }
});
