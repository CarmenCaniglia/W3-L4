// trovo la mia tabella

const tbody = document.querySelector(".tombola-board tbody");
console.log(tbody);
const button = document.getElementById("extract");

// let calledCell = null; //riferimento cella

// Funzione per estrarre un numero casuale
const extractRandomNumber = function () {
  const min = 1;
  const max = 76;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  //evidenzio la cella corrispondente
  const cellIndex = randomNumber - 1; //perchè il mio indice è (o-75)
  const cell = tbody.querySelectorAll("td");
  const calledCell = cell[cellIndex];
  calledCell.classList.add("lightedCell");

  console.log(`Numero estratto: ${randomNumber}`);
};

//trovo i numeri da 1 a 76 e li metto in tabella

for (let row = 1; row <= 7; row++) {
  const rowElement = document.createElement("tr");
  for (let col = 1; col <= 19; col++) {
    const number = (row - 1) * 10 + col;
    const cell = document.createElement("td");
    cell.textContent = number;
    rowElement.appendChild(cell);
  }
  tbody.appendChild(rowElement);
}

// Attivo il bottone
button.addEventListener("click", extractRandomNumber);
