//Casa Selecionada

const todasCasas = document.querySelectorAll("tbody tr td")
var casaPassada = document.querySelector("tbody tr td[class='!bg-green-500']")

console.log(todasCasas);

todasCasas.forEach(casaSelecionada => {
    casaSelecionada.addEventListener('click', () => {
        if(casaPassada) {
            casaPassada.classList.remove("!bg-green-500");
        }
        casaSelecionada.classList.toggle("!bg-green-500");

        casaPassada = casaSelecionada
    });
});