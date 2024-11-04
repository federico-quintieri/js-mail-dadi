// Input mail utente
const inpMail = prompt("Inserisci la tua e-mail");

// Lista mail che possono accedere
const listaMail = ["bob43@gmail.com", "billy92@gmail.com", "fra342@gmail.com"];

// Controllo se è nella lista di chi può accedere
for (let i = 0; i < listaMail.length; i++) {
  const currString = listaMail[i];

  // Se la mail è nell'array fermo il ciclo e faccio un console.log
  if (currString === inpMail) {
    console.log("La mail inserita è nella lista");
    break;
  }
}
