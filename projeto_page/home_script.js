const carousel = document.querySelector('.carousel');
const slider = document.querySelector('#slider');

// Define o número total de itens (4 imagens)
const totalItems = 5; 

// Configura o valor máximo do slider com base no número de itens
slider.max = (totalItems - 1) * 100; // 3 * 100 = 300 (0%, 100%, 200%, 300%)

slider.addEventListener('input', () => {
    const value = slider.value; // Valor atual do slider
    const maxOffset = (totalItems - 1) * 100; // Máximo deslocamento
    const percent = value / maxOffset; // Percentual do slider

    const offset = percent * -(100 * (totalItems - 1)); // Deslocamento em %
    carousel.style.transform = `translateX(${offset}%)`; // Move o carrossel
});
