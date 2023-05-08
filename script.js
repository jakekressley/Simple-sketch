const container = document.querySelector('#container');
const defaultValue = 16;
const resizeButton = document.querySelector('#resize-button');

resizeButton.addEventListener('click', () => {
    let userInput = prompt("What would you like your dimensions to be?");
    if (userInput > 64) 
        userInput = prompt("Too large. Enter a number 64 or less");

    container.innerHTML = "";
    createDivs(userInput);

})



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


createDivs(defaultValue);
