// MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

});

// ====================== BK Proctor Script ======================

document.addEventListener('DOMContentLoaded', function() {

    // ==================== Mobile Menu (Hamburger) ====================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // ==================== Contact Form Handling ====================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject') ? document.getElementById('subject').value : '';
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            // Show success message
            showSuccessMessage();

            // Reset form
            contactForm.reset();
        });
    }

    // Success Message Function
    function showSuccessMessage() {
        // Create success message element
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Thank You!</h3>
            <p>Your message has been received. We'll get back to you soon.</p>
        `;

        // Style the message
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

        // Remove message after 4 seconds
        setTimeout(() => {
            successDiv.style.opacity = '0';
            setTimeout(() => successDiv.remove(), 600);
        }, 4000);
    }

});