const container = document.querySelector('#container');
const defaultValue = 16;

function createDivs(input) {
    for (let i = 0; i < input; i++) {
        const colDiv = document.createElement('div');
        container.appendChild(colDiv);
       
        for (let j = 0; j < input; j++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = "row";
            rowDiv.style.backgroundColor = 'red';
            rowDiv.style.width = 320 / input - 2 + 'px';
            rowDiv.style.height = 320 / input - 2 + 'px';
            rowDiv.style.border = '1px solid black';
            colDiv.appendChild(rowDiv);
        }
    }
}

function updateDivs(val) {
    document.querySelector('#slider-value').value = val;
    container.innerHTML = "";
    createDivs(val);
}

function updateSlider(val) {
    document.querySelector('#slider').value = val
    updateDivs(val)
}


createDivs(defaultValue);
