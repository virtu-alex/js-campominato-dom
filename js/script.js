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


////# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti


////# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

//// 1- seleziono una cella,
//// 2- prendo dalla cella il numero
//// 3- il numero di cella e' presente nell'array?
//// 3.a- se e' presente coloro la cella di rosso
//// 3.a2- richiamare la memoria del punteggio
//// 3.a3- stampo in console "partita terminata"   
//// 3.b- se non e' presente coloro di azzurro
//// 3.b2- incremento il punteggio

////# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)

//// 1- seleziono la cella
//// 2.a- se non e' una bomba
//// 2.b- e il punteggio ha raggiunto il massimo?
//// 2.c- allora la partita e' terminata
//// 2.d- tramite un alert dico all'utente che ha vinto
//// 3- il punteggio massimo sara' il numero di celle - il numero totale delle bombe



////# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.*/


// let n = 1;
// function increment(){
//     n++;
//     return n;
// }

const grid = document.getElementById('grid');
const button = document.getElementById('button');
const score = document.getElementById('score-point');
const scoreResult = document.getElementById('user-score');

let userResult = 0;
const rows = 10;
const cells = 10;
const totalCells = rows * cells;

//FUNZIONE CREAZIONE CELLA
function createCell() {
    const bombImg = document.createElement('img');
    bombImg.src = '/img/bomb.png';
    bombImg.style.width = (100) + '%';
    bombImg.style.height = (100) + '%';
    const cella = document.createElement('div');
    cella.className = 'cell';
    cella.addEventListener('click', () => {
        cella.classList.add('azure', 'no-event')
        userResult += 1;
        score.innerHTML = `${userResult}`;
        console.log(cella.innerHTML);
        let cellNumber = parseInt(cella.innerHTML);
        console.log(userResult);
        console.log((totalCells - arrayNumber.length - 1));
        if (arrayNumber.includes(cellNumber)) {
            cella.innerHTML = '';
            cella.style.backgroundColor = 'red';
            cella.append(bombImg);
            console.log(userResult);
            console.log('PARTITA TERMINATA');
            alert('Partita terminata, premi play per giocare di nuovo');
            scoreResult.innerHTML = `Mi spiace, hai perso, RIPROVA!`;
        } else if (userResult == (totalCells - arrayNumber.length)) {
            alert('HAI VINTO ' + `Il punteggio e' ` + (totalCells - arrayNumber.length));
            scoreResult.innerHTML = `Congratulazioni hai vinto, non credevo fosse possibile!`;
        }

    })
    return cella;
};

// lista di numeri estratti
let arrayNumber = [];

function randomGenerator(max) {
    for (let i = 0; i < 16; i++) {
        //genere numero random
        let randomNumber = Math.floor(Math.random() * max + 1);

        //controllo se gia esiste nell array
        if (arrayNumber.includes(randomNumber)) {
            // se esiste non lo aggiunge
            do {
                randomNumber = Math.floor(Math.random() * max + 1);
            } while (arrayNumber.includes(randomNumber));
            arrayNumber.push(randomNumber);
        } else {
            // se non esiste lo aggiungo
            arrayNumber.push(randomNumber);
        }
    }

}

randomGenerator(100);

//RECUPERO ELEMENTI DAL DOM

// MOSTRO IN PAGINA LA GRIGLIA TRAMITE UN EVENT LISTNER AL BUTTON
button.addEventListener('click', () => {
    grid.innerHTML = "";
    score.innerHTML = 0;
    // CICLO FOR
    for (let i = 1; i <= totalCells; i++) {
        const cell = createCell();
        grid.appendChild(cell);
        //STAMPO PER OGNI DIV CREATO IL NUMERO A CUI EGLI APPARTIENE NELLA GRIGLA
        cell.innerHTML = i;
        button.innerHTML = 'Play again';
        console.log(cell);
    }

})




