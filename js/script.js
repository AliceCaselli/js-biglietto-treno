const kmPrice = "0.21";

let kmNumber = prompt("Inserisci la lunghezza del tuo viaggio in chilometri");

let userAge = prompt("Quanti anni hai?");

let kmTotal = kmPrice * kmNumber;

if( parseInt(userAge) < 18){

   let kmTwentyDiscount = (kmTotal * 20) / 100;

   console.log(
    `I tuoi chilometri sono: ${kmNumber}
    Il prezzo del biglietto è: ${kmTotal} euro
    Dato che hai meno di 18 anni hai diritto ad uno sconto
    del 20%.
    Totale biglietto: ${kmTwentyDiscount} euro`
   )

} else if(parseInt(userAge) >= 65) {

    let kmFourtyDiscount = (kmTotal * 40) / 100;

    console.log(
        `I tuoi chilometri sono: ${kmNumber}
        Il prezzo del biglietto è: ${kmTotal} euro
        Dato che hai 65 o più anni hai diritto ad uno sconto
        del 40%.
        Totale biglietto: ${kmFourtyDiscount} euro`
    )
} else {

    console.log(
        `I tuoi chilometri sono: ${kmNumber}
        Il prezzo del biglietto è: ${kmTotal} euro`
    )
}
