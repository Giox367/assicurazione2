const phoneButton = document.getElementById('phone-button');

phoneButton.addEventListener('mouseover', () => {
    phoneButton.textContent = 'Clicca per chiamare';
});

phoneButton.addEventListener('mouseout', () => {
    phoneButton.textContent = '0221100763';
});

document.getElementById('phone-button').addEventListener('click', function() {
    var phoneNumber = '0221100763';
    window.location.href = 'tel:' + phoneNumber;
});