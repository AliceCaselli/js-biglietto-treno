let kmPrice = "0.21";

let kmNumber = parseInt(prompt("Inserisci la lunghezza del tuo viaggio in chilometri"));

let userAge = parseInt(prompt("Quanti anni hai?"));

let kmTotal = kmPrice * kmNumber;

let kmDiscount;


if(userAge < 18){

   kmDiscount = kmTotal - (kmTotal * 20 / 100);

   kmDiscount = kmDiscount.toFixed(2)

   document.writeln(
    `I tuoi chilometri sono: ${kmNumber}. <br>
    Il prezzo del biglietto è: ${kmTotal} euro. <br>
    Dato che hai meno di 18 anni hai diritto ad uno sconto
    del 20%. <br>
    Totale biglietto: ${kmDiscount} euro.`
   )

} else if(userAge >= 65) {


    kmDiscount = kmTotal - (kmTotal * 40 / 100);

    kmDiscount = kmDiscount.toFixed(2)

    document.writeln(
        `I tuoi chilometri sono: ${kmNumber}. <br>
        Il prezzo del biglietto è: ${kmTotal} euro. <br>
        Dato che hai 65 o più anni hai diritto ad uno sconto
        del 40%. <br>
        Totale biglietto: ${kmDiscount} euro.`
    )
} else {

    document.writeln(
        `I tuoi chilometri sono: ${kmNumber}. <br>
        Il prezzo del biglietto è: ${kmTotal} euro.`
    )
}
