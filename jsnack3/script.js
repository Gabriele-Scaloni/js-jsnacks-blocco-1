//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.



let result = 0;

for (let i = 1; i <= 10; i ++) {
    result += parseInt(prompt("inserisci il numero " + i));
}

document.getElementById("risultato").innerText = result;

