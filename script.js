const gridContainer = document.querySelector('#grid-container');
const defaultValue = 16;

function createDivs(input) {
    for (let i = 0; i < input; i++) {
        const colDiv = document.createElement('div');
        gridContainer.appendChild(colDiv);
       
        for (let j = 0; j < input; j++) {
            const gridContainerWidth = document.querySelector('#grid-container').getBoundingClientRect().width
            const gridContainerHeight = document.querySelector('#grid-container').getBoundingClientRect().height

            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row')
            rowDiv.style.width = gridContainerWidth / input - 2 + 'px';
            rowDiv.style.height = gridContainerHeight / input - 2 + 'px';
            rowDiv.style.border = '1px solid black';
            rowDiv.draggable = 'true';
            colDiv.appendChild(rowDiv);
        }
    }
}

let colorArray = [
    ['#FF0000', '#00FFFF', '#FF00FF'],
    ['#FF8000', '#0080FF', '#964B00'],
    ['#FFFF00', '#0000FF', '#FFFFFF'],
    ['#00FF00', '#8000FF', '#000000']
]

let currentColor = 'black';

const colorSection = document.querySelector('#color-section')
for (let i = 0; i < 4; i++) {
    const colDiv = document.createElement('div');
    colorSection.append(colDiv);
    for (let j = 0; j < 3; j++) {
        const rowDiv = document.createElement('div')
        rowDiv.classList.add('color-div')
        rowDiv.style.backgroundColor = colorArray[i][j];
        rowDiv.addEventListener('click', () => {
            console.log('balls')
        })
        colDiv.append(rowDiv);
    }
}

createDivs(defaultValue);
newEventListeners();

const divs = document.querySelectorAll('.row')
    divs.forEach((div) => {
        div.addEventListener('dragover', (e) => {
            e.preventDefault()
            changeColor(div, currentColor)
        });
    })

function newEventListeners() {
    const divs = document.querySelectorAll('.row')
    divs.forEach((div) => {
        div.addEventListener('dragover', (e) => {
            e.preventDefault()
            changeColor(div)
        });
    })   
}


function updateGridSize(val) {
    document.querySelector('#slider-value').value = val;
    gridContainer.innerHTML = "";
    createDivs(val);
    newEventListeners()
}

function updateSlider(val) {
    document.querySelector('#slider').value = val
    updateGridSize(val)
}

function changeColor(div, color) {
    div.style.backgroundColor = color;
}

let colorSelected = false

function getCurrentColor(div) {
    if (!colorSelected) return 'black'

    const colorDivs = document.querySelectorAll('.color-div')
    console.log(color-divs)
    colorDivs.forEach((colorDiv) => {
        div.addEventListener('click', () => {
            console.log("different color pressed")
            colorSelected = true
            const color = colorDiv.style.backgroundColor
            return color;
        });
    })
}