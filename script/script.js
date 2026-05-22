// ====================== BK Proctor Script ======================

document.addEventListener('DOMContentLoaded', function () {

    // ==================== Mobile Menu ====================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }


    // ==================== Contact Form ====================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;

            if (!name || !email || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            showSuccessMessage();
            contactForm.reset();
        });
    }


    // ==================== Success Message ====================
    function showSuccessMessage() {

        const successDiv = document.createElement('div');

        successDiv.className = 'success-message';

        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Thank You!</h3>
            <p>Your message has been received. We'll get back to you soon.</p>
        `;

        Object.assign(successDiv.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '2rem 3rem',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            textAlign: 'center',
            zIndex: '1000',
            maxWidth: '380px',
            border: '2px solid #e63939'
        });

        document.body.appendChild(successDiv);

        setTimeout(() => {
            successDiv.style.opacity = '0';
            setTimeout(() => successDiv.remove(), 600);
        }, 4000);
    }

});