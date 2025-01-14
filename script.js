// script.js

// Flip Card Functionality
function flipCard(element) {
    const card = element.closest('.product-card');
    card.classList.toggle('flipped');
}

// Add event listener to all product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => flipCard(card));
});

// FAQs Toggle Functionality
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}