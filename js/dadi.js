// Devo generare due numeri random

const numComputer = Math.floor(Math.random() * 10) + 1;

const numGiocatore = Math.floor(Math.random() * 10) + 1;

// Confrontare questi due numeri e mostrare un messaggio su quale è maggiore

let vincitore;

if (numComputer > numGiocatore) vincitore = "Computer";
else if (numComputer < numGiocatore) vincitore = "Giocatore";
else console.log("Sono pari");

if (numComputer != numGiocatore) {
  console.log(
    `Il numero del computer è ${numComputer} mentre il numero del giocatore è ${numGiocatore} di conseguenza il vincitore è il ${vincitore} perché ha il numero più grande.`
  );
}
