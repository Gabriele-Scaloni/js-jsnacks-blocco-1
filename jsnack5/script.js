/*  Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

const arr =[];

let dispari = document.getElementById("numArray"); 

for (let i = 0; i<6; i++ ) {
    const quest = parseInt(prompt("inserisci un numero"));
 if (quest % 2 !=0){
    arr.push(quest);
    dispari.innerHTML=`i numeri  dispari sono ${arr} `
}
} 
console.log(arr);