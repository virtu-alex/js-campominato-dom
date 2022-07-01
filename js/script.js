/*#Consegna
////Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).



Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati (delle bombe) - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


////# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.


# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti


# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.


# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)


# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.*/


// let n = 1;
// function increment(){
//     n++;
//     return n;
// }

const grid = document.getElementById('grid');
const button = document.getElementById('button');
const score = document.getElementById('score-point');

//IMPOSTAZIONI INIZIALI X DETERMINARE IL NUMERO DI RIGHE E COLONNE

let userResult = 0;

const rows = 10;
const cells = 10;
const totalCells = rows * cells;
//FUNZIONE CREAZIONE CELLA
function createCell() {
    const cella = document.createElement('div');
    cella.className = 'cell';
    cella.addEventListener('click', () => {
        cella.classList.add('azure' , 'none')       
        for (let i = 1; i <= 1; i++) {
            userResult += 1;
            score.innerHTML = `${userResult}`;
        }
    })
    console.log(cella.innerHTML)

    return cella;
};

function randomGenerator() {
    for (let i = 0; i < 16; i++) {
        randomNumbers = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumbers)

    }
}
randomGenerator(1, 100);






//RECUPERO ELEMENTI DAL DOM



// MOSTRO IN PAGINA LA GRIGLIA TRAMITE UN EVENT LISTNER AL BUTTON
button.addEventListener('click', () => {
    grid.innerHTML = "";
    // CICLO FOR
    for (let i = 1; i <= totalCells; i++) {
        const cell = createCell();
        grid.appendChild(cell);
        //STAMPO PER OGNI DIV CREATO IL NUMERO A CUI EGLI APPARTIENE NELLA GRIGLA
        cell.innerHTML = i;
        button.innerHTML = 'Play again'
        console.log(cell);
    }
})




