// selezioniamo l elemento html con id 'outputEmail' salvandolo nella var outputelemento
const outputElemento = document.getElementById('outputEmail');
console.log(outputElemento);


// mi salvo url dell endpoint api in una variabile
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
// mi creo una array vuoto dove salvare le 10 email
const email10 = [];

//creo il ciclo che esegue 10 richieste all'API per ottenere 10 email
for (let i = 0; i < 10; i++) {
    //usando la libreria axios uso il metodo get sul endpoint
    axios.get(endpoint)
        //quando arrivano tutti i dati estraiamo i dati della risposta
        .then(risposta => {
            //la costante mi torna un oggetto preso da 'data'
            const risultato = risposta.data;
            console.log(risultato);
            // la costante mi torna un elemento preso dalla oggetto 'data'
            const email = risultato.response;
            // aggiungo email all array vuoto
            email10.push(email);
            //aggiorno nell html l array creato
            outputElemento.innerText = email10;
        })
        .catch(error => {
            // se si verifica un errore lo stampo
            console.error(error)
        })
};


console.log(email10);


