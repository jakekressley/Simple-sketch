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
            rowDiv.ondragstart="startDrag(event)"
            rowDiv.ondragend="endDrag(event)"
            colDiv.appendChild(rowDiv);
        }
    }
}

const eraser = document.querySelector('#eraser-button')
eraser.addEventListener('click', () => {
    currentColor = 'white'
    eraser.style.outline = 'solid white 2px;'
})

let colorArray = [
    ['#FF0000', '#00FFFF', '#FF00FF'],
    ['#FF8000', '#0080FF', '#964B00'],
    ['#FFFF00', '#0000FF', '#f1c27d'],
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
        if (i == 3 && j ==2) 
        {
            rowDiv.classList.add('selected-color')
        }
            
        rowDiv.addEventListener('click', () => {
            if (document.querySelectorAll('.selected-color').length == 1) {
                document.querySelectorAll('.selected-color').forEach((e) => {
                    e.classList.remove('selected-color')
                });
            }
            currentColor = rowDiv.style.backgroundColor
            rowDiv.classList.toggle('selected-color')
        })
        colDiv.append(rowDiv);
    }
}

createDivs(defaultValue);
newEventListeners();

const divs = document.querySelectorAll('.row')
divs.forEach((div) => {
    div.addEventListener('click', (e) => {
        e.preventDefault()
        changeColor(div, currentColor)
    });
})
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
            changeColor(div, currentColor)
        });
    })   
}


function startDrag(e) {
    let element = e.target;
  
    element.classList.add('hide');
}

function endDrag(e) {
    let element = e.srcElement;
    
    element.classList.remove('hide');
  }

const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', () => {
    gridContainer.innerHTML = ""
    createDivs(document.querySelector('#slider-value').value)
    newEventListeners()
})



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