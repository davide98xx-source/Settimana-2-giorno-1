/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NOME = 'Mario';
const COGNOME = 'Rossi';
console.log('Ciao, mi chiamo ' + NOME + ' ' + COGNOME + '.');

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 3;
let somma = num1 + num2;
let sottrazione = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione = num1 / num2;
let resto = num1 % num2;
let potenza = num1 ** num2;
console.log(`${num1} + ${num2} = ${somma}`);
console.log(`${num1} - ${num2} = ${sottrazione}`);
console.log(`${num1} * ${num2} = ${moltiplicazione}`);
console.log(`${num1} / ${num2} = ${divisione}`);
console.log(`${num1} % ${num2} = ${resto}`);
console.log(`${num1} ** ${num2} = ${potenza}`);
/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ANNONASCITA = 1998;
const ANNOCORRENTE = 2026;
let etaOggi = ANNOCORRENTE - ANNONASCITA;
let etàTra10Anni = etaOggi + 10;
let età5Fa = etaOggi - 5;
console.log('Oggi hai ' + etaOggi + ' anni');
console.log('tra 10 anni avrai ' + etàTra10Anni + ' anni');
console.log('5 anni fa avevi ' + età5Fa + ' anni');
/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let maggiorenne = etaOggi >= 18;
console.log(`età: ${etaOggi} >= ${maggiorenne} — Maggiorenne`);
/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nullo = null;
let ignoto = undefined;
console.log(typeof NOME);
console.log(typeof etaOggi);
console.log(typeof maggiorenne);
console.log(typeof nullo);
console.log(typeof undefined);
/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NUMERO = 5;
const TESTO = "5";
console.log(`NUMERO == TESTO: ${NUMERO == TESTO}`);
console.log(`NUMERO === TESTO: ${NUMERO === TESTO}`);

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
53
2
2
20
*/
console.log('5' + 3);
console.log('5' - 3);
console.log(true + 3);
console.log('5' * '3');

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 12;
let pariODispari = n % 2 === 0;
let divisibile = n % 3 === 0;
let pari = pariODispari == 0;
console.log(`Il numero è pari: ${pariODispari == 0}`);
console.log(`Il numero è divisibile per 3: ${divisibile == true}`);
console.log(`Il numero pari è divisibile per 3: ${pari && divisibile}`);

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
