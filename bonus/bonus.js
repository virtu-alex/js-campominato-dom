/*# BONUS

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/


//GET ELEMENTS FROM DOM
const score = document.getElementById('score-point');
const scoreResult = document.getElementById('user-score');

//SUPPORT VARIABLES
let userResult = 0;
let totalCells;

// BLACKLIST ARRAY
let arrayNumber = [];


function randomGenerator(max) {
    for (let i = 0; i < 16; i++) {
        //GENERATE A RANDOM NUMBER
        let randomNumber = Math.floor(Math.random() * max + 1);

        //CHECK IF ITS ALREADY IN THE ARRAY?
        if (arrayNumber.includes(randomNumber)) {
            // IF EXIST, DOESN'T PUSH
            do {
                randomNumber = Math.floor(Math.random() * max + 1);
            } while (arrayNumber.includes(randomNumber));
            arrayNumber.push(randomNumber);
        } else {
            // IF NOT, THEN PUSH
            arrayNumber.push(randomNumber);
        }
    }

}
//INVOCATION (MAX = 100);
randomGenerator(100);
//FUNCTION CREATE CELL
function createCell(columnsNumber, rowsNumber) {
    //CREATE DIV ELEMENT
    const cella = document.createElement('div');
    //CREATE IMG ELEMENT (BOMB)
    const bombImg = document.createElement('img');
    //ADD SOURCE TO IMAGE + BOMB LOCATION IN FOLDER
    bombImg.src = '/img/bomb.png';
    //MAKE THE IMAGE 100% WIDTH
    bombImg.style.width = (100) + '%';
    //MAKE THE IMAGE 100% HEIGHT
    bombImg.style.height = (100) + '%';
    //ADAPT GENERATED CELLS TO CHOSEN DIFFICULTY (WIDTH)
    cella.style.width = (100 / columnsNumber) + '%';
    //ADAPT GENERATED CELLS TO CHOSEN DIFFICULTY (HEIGHT)
    cella.style.height = (100 / rowsNumber) + '%';
    //ADD CLASS FROM (STYLE.CSS) FILE
    cella.className = 'cell';
    //CELLS LISTENS TO CLICKS
    cella.addEventListener('click', () => {
        //ADD CLASS FROM CSS (BACKGROUND IF NO BOMB / NO REPEATABLE CLICKS)
        cella.classList.add('azure', 'no-event')
        //STAMP USER SCORE
        userResult += 1;
        score.innerHTML = `${userResult}`;
        //CHECK CELL NUMBER
        console.log(cella.innerHTML);
        //TRANSFROM FROM STRING TO INTEGER
        let cellNumber = parseInt(cella.innerHTML);
        console.log(userResult);
        console.log((totalCells - arrayNumber.length - 1));
        // IF THE USER HITS A "BOMB"...
        if (arrayNumber.includes(cellNumber)) {
            cella.innerHTML = '';
            cella.style.backgroundColor = 'red';
            cella.append(bombImg);
            console.log(userResult);
            console.log('GAME OVER');
            alert('GAME OVER, PRESS THE PLAY AGAIN BUTTON!');
            scoreResult.innerHTML = `I'M SORRY BUDDY! YOU LOST, TRY AGAIN`;
            //ELSE IF USER SCORE IS EQUAL TO THE CELLS LESS THE BOMBS...
        } else if (userResult == (totalCells - arrayNumber.length)) {
            //ALERT YOU WON MESSAGE
            alert('YOU WON ' + `THE SCORE ACHIEVED IS' ` + (totalCells - arrayNumber.length));
            //STAMP IN PAGE YOU WON MESSAGE
            scoreResult.innerHTML = `CONGRATULATIONS YOU WON, DIDNT KNEW IT WAS POSSIBLE!`;
        }
    })
    return cella;
};

//FUNCTION GRID GENERATOR
function gridGenerator(rows, cells) {
    //GET ELEMENTS FROM DOM
    const grid = document.getElementById('grid');
    const button = document.getElementById('button');
    //TOTAL CELLS = EASY(10*10),MEDIUM(9*9),HARD(7*7);
    totalCells = rows * cells;
    //BUTTON LISTENS TO CLICKS
    button.addEventListener('click', (event) => {
        console.log(event)
        //CLEAR GRID
        grid.innerHTML = "";
        //CLEAR SCORE
        score.innerHTML = 0;
        //CLEAR RESULT MESSAGE
        scoreResult.innerHTML = '';


        // FOR CYCLE
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
