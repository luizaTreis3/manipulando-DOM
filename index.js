// Atividade 1: Alterar Cor ao Clicar
const squares = document.querySelectorAll(".square");
const colors = ["blue", "green", "red"]; // Cores iniciais e alternadas

squares.forEach((square, index) => {
    square.style.backgroundColor = colors[index]; // Define a cor inicial para cada quadrado
    square.addEventListener("click", () => {
        // Alterna entre duas cores
        square.style.backgroundColor =
            square.style.backgroundColor === colors[index] ? colors[(index + 1) % colors.length] : colors[index];
    });
});

// Atividade 2: Contador de Cliques
let counter = 0;
document.getElementById("countButton").addEventListener("click", () => {
    counter++;
    document.getElementById("counter").innerText = counter;
});
document.getElementById("resetButton").addEventListener("click", () => {
    counter = 0;
    document.getElementById("counter").innerText = counter;
});

// Atividade 3: Mostrar/Ocultar Texto
const toggleTextButton = document.getElementById("toggleTextButton");
const hiddenText = document.getElementById("hiddenText");
let isTextVisible = false; // Estado inicial: texto oculto

toggleTextButton.addEventListener("click", () => {
    isTextVisible = !isTextVisible; // Inverte o estado
    hiddenText.style.display = isTextVisible ? "block" : "none"; // Mostra ou oculta o texto
    toggleTextButton.innerText = isTextVisible ? "Ocultar" : "Mostrar"; // Atualiza o texto do botão
});

// Atividade 4: Alterar Texto com Prompt
document.getElementById("changeTextButton").addEventListener("click", () => {
    const newText = prompt("Digite o novo texto:");
    if (newText) {
        document.getElementById("defaultText").innerText = newText;
    }
});

// Atividade 5: Mudança de Texto ao Pressionar Tecla
document.addEventListener("keydown", (event) => {
    document.getElementById("keyText").innerText = `Você pressionou: ${event.key}`;
});

// Atividade 6: Eleições Municipais
const candidates = {
    "10": { name: "Candidato 1", photo: "candidate1.jpg" },
    "20": { name: "Candidato 2", photo: "candidate2.jpg" },
    "30": { name: "Candidato 3", photo: "candidate3.jpg" }
};

document.getElementById("voteButton").addEventListener("click", () => {
    const vote = prompt("Digite o número do candidato:");
    const result = candidates[vote] || { name: "Voto Nulo", photo: "" };
    document.getElementById("candidateName").innerText = result.name;
    const photoElement = document.getElementById("candidatePhoto");
    photoElement.src = result.photo;
    photoElement.classList.toggle("hidden", !result.photo);
});