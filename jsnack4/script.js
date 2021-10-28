//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/*  creo un prompt dove chiedo il nome
    creo un array con gli invitati
    confronto i nomi
    se corrispondono creo un output dove scrivo che possono entrare
    altrimenti creo un output dove scrivo che non possono entrare
*/



const invitato = prompt("come ti chiami? ");
const lista =[ "pinco","pallo","pippo","pluto", ];

let NomeNellaLista = false;

for (let i=0; i < lista.length; i++) {
    if (invitato === lista[i]) {
        NomeNellaLista = true;
    }
}
if (NomeNellaLista === true){
    document.getElementById('risposta').innerHTML=`Benvenuto ${invitato}, accomodati `;
} else {
    document.getElementById('risposta').innerHTML=`Mi dispiace ${invitato}  ma non puoi entrare`;
}