 
        // Wait until the page loads
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('contactForm');
            const confirmation = document.getElementById('confirmationMessage');

            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Stop form from submitting the normal way

                // Get form values
                const name = document.getElementById('fname').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const message = document.getElementById('comments').value.trim();

                // Basic validation
                if (!name || !email || !phone || !message) {
                    alert(" Please fill in all fields.");
                    return;
                }

                // Email validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }

                // Phone number validation (10 digits)
                if (!/^[0-9]{10}$/.test(phone)) {
                    alert(" Phone number must be 10 digits.");
                    return;
                }

                // If all validations pass
                confirmation.style.display = alert(" thank you."); // Show success message
                form.reset(); // Clear the form
            });
        });
    