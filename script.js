document.addEventListener('DOMContentLoaded', function() {
    // --- Efeito Interativo 1: Menu Responsivo ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // --- Efeito Interativo 3: Animação de Rolagem (Opcional, se você tiver outros efeitos de rolagem) ---
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // viewport
        threshold: 0.2, // Quando 20% da seção está visível
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove a classe se sair da visão
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });


    // --- Validação do Formulário de Contato ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const formStatus = document.getElementById('form-status');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;

            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            formStatus.textContent = '';
            formStatus.className = 'form-status-message';

            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Por favor, digite seu nome.';
                isValid = false;
            }

            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, digite seu email.';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, digite um email válido.';
                isValid = false;
            }

            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Por favor, digite sua mensagem.';
                isValid = false;
            }

            if (isValid) {
                formStatus.classList.add('success');
                formStatus.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
                formStatus.style.display = 'block';
                contactForm.reset();
            } else {
                formStatus.classList.add('error');
                formStatus.textContent = 'Por favor, corrija os erros no formulário.';
                formStatus.style.display = 'block';
            }
        });

        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    }
});