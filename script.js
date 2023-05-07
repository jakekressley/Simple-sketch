const container = document.querySelector('#container');
const userInput = prompt('Dimensions of your grid:');


function createDivs(input) {
    const height = 20 * input;
    const width = 20 * input;
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    for (let i = 0; i < input; i++) {
        const colDiv = document.createElement('div');
        container.appendChild(colDiv);
       
        for (let j = 0; j < input; j++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = "tinier-div";
            rowDiv.style.backgroundColor = 'red';
            rowDiv.style.width = '18px'
            rowDiv.style.height = '18px'
            rowDiv.style.border = '1px solid black';
            colDiv.appendChild(rowDiv);
        }
    }


}


createDivs(userInput);
