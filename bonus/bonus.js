/*# BONUS

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/



//FUNZIONE CREAZIONE CELLA
function createCell(columnsNumber, rowsNumber) {
    const cella = document.createElement('div');
    cella.style.width = (100 / columnsNumber) + '%';
    cella.style.height = (100 / rowsNumber) + '%';
    cella.className = 'cell';
    cella.addEventListener('click', () => {
        cella.classList.toggle('azure')
        console.log(cella.innerHTML)
    });
    return cella;
}


function gridGenerator(rows, cells) {
    const grid = document.getElementById('grid');
    const button = document.getElementById('button');
    const totalCells = rows * cells;
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
