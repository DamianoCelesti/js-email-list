// selezioni gli elementi di output
const outputElemento = document.getElementById('outputEmail');
console.log(outputElemento);



const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

axios.get(endpoint)
    .then(risposta => {
        const risultato = risposta.data;
        console.log(risposta);
        const email = risultato.response;
        outputElemento.innerText = email;
    })
    .catch(error => {
        console.error(error)
    })






