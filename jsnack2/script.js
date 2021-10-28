const primaParola = prompt("inserisci una parola", );
const secondaParola = prompt("inserisci un'altra parola", );
const stampa = document.getElementById("risultato");

if (primaParola.length < secondaParola.length) {
    stampa.innerHTML = `La parola più corta é ${primaParola} e la più lunga é ${secondaParola}`;
}
else if (primaParola.length > secondaParola.length){
    stampa.innerHTML = `La parola più corta é ${secondaParola} e la più lunga é ${primaParola}`;
}
else stampa.innerHTML = `le parole ${primaParola} e ${secondaParola} sono lunghe uguali`;
console.log(stampa);