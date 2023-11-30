// Funzione per generare un array di 5 numeri casuali compresi tra 1 e 10
function generateRandomNumbers() {
    // Inizializza un array vuoto per contenere i numeri generati
    let numbers = [];

    // Genera 5 numeri casuali e li aggiunge all'array
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 10) + 1);
    }

    // Restituisce l'array di numeri generati
    return numbers;
}

// Funzione per visualizzare i numeri generati nell'elemento con id 'numbers-container'
function displayNumbers(numbers) {
    // Ottiene l'elemento HTML con id 'numbers-container'
    const numbersContainer = document.getElementById('numbers-container');

    // Imposta il testo dell'elemento con i numeri casuali separati da spazi
    numbersContainer.textContent = numbers.join(' ');
}

// Funzione principale per avviare il gioco
function startGame() {
    // Genera e visualizza i numeri casuali
    const numbers = generateRandomNumbers();
    displayNumbers(numbers);

    // Imposta un timer per pulire i numeri dopo 3 secondi e chiamare la funzione per l'input dell'utente
    setTimeout(() => {
        clearNumbers();
        getUserInput(numbers);
    }, 3000);
}

// Funzione per ottenere l'input dell'utente
function getUserInput(numbers) {
    // Richiede all'utente di inserire i numeri separati da spazi attraverso un prompt
    const userInput = prompt('Inserisci i numeri separati da spazi:');
    const userNumbers = userInput.split(' ').map(Number); // Converte gli input dell'utente in un array di numeri

    let correctNumbers = 0;
    let correctNumberList = [];

    // Controlla l'input dell'utente e determina quali numeri sono stati indovinati
    for (let i = 0; i < numbers.length; i++) {
        if (userNumbers.includes(numbers[i])) {
            correctNumbers++;
            correctNumberList.push(numbers[i]);
        }
    }

    // Visualizza il risultato
    displayResult(correctNumbers, correctNumberList);
}

// Funzione per visualizzare il risultato dell'indovinamento dell'utente
function displayResult(correctNumbers, correctNumberList) {
    // Ottiene l'elemento HTML con id 'result'
    const resultContainer = document.getElementById('result');

    // Imposta il testo dell'elemento con il risultato dell'indovinamento
    resultContainer.textContent = `Hai indovinato ${correctNumbers} numero/i: ${correctNumberList.join(', ')}`;
}

// Funzione per pulire i numeri dopo che sono stati visualizzati
function clearNumbers() {
    // Ottiene l'elemento HTML con id 'numbers-container'
    const numbersContainer = document.getElementById('numbers-container');

    // Pulisce il testo dell'elemento, rimuovendo i numeri visualizzati
    numbersContainer.textContent = '';
}

// Chiamata per iniziare il gioco quando la pagina è caricata
startGame();
