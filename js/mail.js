// Input mail utente
const inpMail = prompt("Inserisci la tua e-mail");

// Lista mail che possono accedere
const listaMail = ["bob43@gmail.com", "billy92@gmail.com", "fra342@gmail.com"];

let isThere = false;

// Controllo se è nella lista di chi può accedere
for (let i = 0; i < listaMail.length; i++) {
  const currString = listaMail[i];

  // Se la mail è nell'array e isThere è falso
  if (currString === inpMail) {
    isThere = true;
  }
}

if (isThere) console.log(`La mail ${inpMail} è nella lista`);
else console.log(`La mail ${inpMail} non è nella lista`);
