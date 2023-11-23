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

emailjs.init("user_tuo_user_id"); // Sostituisci "tuo_user_id" con il tuo ID utente di Email.js

function inviaModulo() {
    var form = document.getElementById("myForm");

    // Raccogli i dati dal modulo
    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });

    // Invia i dati tramite Email.js
    emailjs.send("service_tuo_servizio_id", "template_tuo_template_id", data)
        .then(function(response) {
            console.log("Email inviata con successo", response);
            window.location.href = "index.html";
        }, function(error) {
            console.log("Errore nell'invio dell'email", error);
        });
}