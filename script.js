const phoneButton = document.getElementById('phone-button');

phoneButton.addEventListener('mouseover', () => {
    phoneButton.textContent = 'Clicca per chiamare';
});

phoneButton.addEventListener('mouseout', () => {
    phoneButton.textContent = '+1 123-456-7890';
});

document.getElementById('phone-button').addEventListener('click', function() {
    var phoneNumber = '+11234567890'; // Sostituisci con il tuo numero di telefono
    window.location.href = 'tel:' + phoneNumber;
});