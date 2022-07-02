/*# BONUS

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

const score = document.getElementById('score-point');
const scoreResult = document.getElementById('user-score');
let userResult = 0;
let totalCells;


let arrayNumber = [];


//


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
//FUNZIONE CREAZIONE CELLA
function createCell(columnsNumber, rowsNumber) {
    const cella = document.createElement('div');
    const bombImg = document.createElement('img');
    bombImg.src = '/img/bomb.png';
    bombImg.style.width = (100) + '%';
    bombImg.style.height = (100) + '%';
    cella.style.width = (100 / columnsNumber) + '%';
    cella.style.height = (100 / rowsNumber) + '%';
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



function gridGenerator(rows, cells) {
    const grid = document.getElementById('grid');
    const button = document.getElementById('button');
    totalCells = rows * cells;
    button.addEventListener('click', (event) => {
        console.log(event)
        grid.innerHTML = "";
        // CICLO FOR
        for (let i = 1; i <= totalCells; i++) {
            const cell = createCell(cells, rows);
            grid.appendChild(cell);
            //STAMPO PER OGNI DIV CREATO IL NUMERO A CUI EGLI APPARTIENE NELLA GRIGLA
            cell.innerHTML = i;
            button.innerHTML = 'Play again'
            console.log(cell);
        }
    })
}


const dropdown = document.getElementById('dropdown')

gridRegen();

dropdown.addEventListener('change', () => {
    gridRegen();
})

function gridRegen() {

    const value = dropdown.options[dropdown.selectedIndex].value;
    console.log(value);
    if (value === "easy") {
        gridGenerator(10, 10)
    } else if (value === "medium") {
        gridGenerator(9, 9);
    } else {
        gridGenerator(7, 7);
    }
    return value;
}




// MOSTRO IN PAGINA LA GRIGLIA TRAMITE UN EVENT LISTNER AL BUTTON
