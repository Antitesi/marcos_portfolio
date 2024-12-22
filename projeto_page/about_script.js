const carousel = document.querySelector('.carousel');
const slider = document.querySelector('#slider');


const totalItems = 4; 


slider.max = (totalItems - 1) * 100; 

slider.addEventListener('input', () => {
    const value = slider.value; 
    const maxOffset = (totalItems - 1) * 100; 
    const percent = value / maxOffset; 

    const offset = percent * -(100 * (totalItems - 1)); 
    carousel.style.transform = `translateX(${offset}%)`; 
});
