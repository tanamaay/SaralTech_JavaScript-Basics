document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const greetButton = document.getElementById('greetButton');
    const greeting = document.getElementById('greeting');
    const errorMessage = document.getElementById('errorMessage');

    greetButton.addEventListener('click', function() {
        const name = nameInput.value.trim();

        if (!name) {
            displayError();
            return;
        }

        displayGreeting(name);
    });

    function displayGreeting(name) {
        errorMessage.style.display = 'none';
        greeting.textContent = `Hello, ${name}! Welcome to our page.`;
        greeting.style.display = 'block';
    }

    function displayError() {
        greeting.style.display = 'none';
        errorMessage.style.display = 'block';
    }
});
