const primoNumero = parseInt(prompt("inserisci un numero", ));
const secondoNumero = parseInt(prompt("inserisci un altro numero", ));
const stampa = document.getElementById("risultato");

if (primoNumero < secondoNumero) {
    stampa.innerHTML = `il numero più grande é ${secondoNumero}`;
}
else if (primoNumero > secondoNumero){
    stampa.innerHTML = `il numero più grande é ${primoNumero}`;
}
else stampa.innerHTML = `i numeri ${primoNumero} e ${secondoNumero} sono pari`;
console.log(stampa);


