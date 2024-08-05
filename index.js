document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Obrigado pelo contato, ${name}! Recebemos sua mensagem.`);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
