document.addEventListener('DOMContentLoaded', function() {

    // Header scroll hide/show functionality
    const header = document.querySelector('header'); 
    let lastScrollY = window.scrollY; 
    const scrollThreshold = 50; 

    if (header) {
        window.addEventListener('scroll', () => {
           
            if (window.scrollY > header.offsetHeight + scrollThreshold) {
                if (window.scrollY < lastScrollY) {
                    header.classList.remove('header-hidden');
                } else {
                    header.classList.add('header-hidden');
                }
            } else {
                header.classList.remove('header-hidden');
            }
            // Update the last scroll position for the next scroll event
            lastScrollY = window.scrollY;
        });
    } else {
        console.error('Error: Header element not found for smart scroll logic.');
    }


    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = document.querySelector('input[placeholder="Your Name"]').value;
            const email = document.querySelector('input[placeholder="Your Email"]').value;
            const subject = document.querySelector('input[placeholder="Subject"]').value;
            const message = document.querySelector('textarea[placeholder="Your Message"]').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all required fields (Name, Email, and Message).');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Create mailto link
            const mailtoSubject = subject || 'Portfolio Contact Form Submission';
            const mailtoBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${mailtoSubject}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            const mailtoLink = `mailto:Thongking1280@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${mailtoBody}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success alert
            alert('Thank you for your message! Your email client will open to send the message. Please click send in your email application.');
            
            // Reset form
            contactForm.reset();
            
            // Optional: Show a more styled success message
            setTimeout(() => {
                const successMsg = document.createElement('div');
                successMsg.innerHTML = `
                    <div style="position: fixed; top: 20px; right: 20px; background: #10B981; color: white; 
                                padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
                                z-index: 9999; font-family: inherit;">
                        <strong>✓ Message Sent!</strong><br>
                        Thank you for contacting me. I'll get back to you soon!
                    </div>
                `;
                document.body.appendChild(successMsg);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    if (successMsg.parentNode) {
                        successMsg.parentNode.removeChild(successMsg);
                    }
                }, 5000);
            }, 1000);
        });
    } else {
        console.error('Error: Contact form not found.');
    }
  
});


