document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const nav = document.getElementById('nav');
    const navToggle = document.querySelector('.logo');
    //Contact ME 
    document.addEventListener("DOMContentLoaded", () => {
        const typingText = document.querySelector(".typing-text span");
        const textArray = ["Web Developer", "Designer", "MERN Stack Developer"];
        let arrayIndex = 0;
        let charIndex = 0;
    
        function type() {
            if (charIndex < textArray[arrayIndex].length) {
                typingText.textContent += textArray[arrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 150);  // Delay between typing each character
            } else {
                setTimeout(erase, 2000);  // Pause before erasing the word
            }
        }
    
        function erase() {
            if (charIndex > 0) {
                typingText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 100);  // Delay between erasing each character
            } else {
                arrayIndex = (arrayIndex + 1) % textArray.length;  // Move to next word
                setTimeout(type, 500);  // Delay before typing the next word
            }
        }
    
        // Start the typing effect after the page is loaded
        setTimeout(type, 500);
    });
    

    //Style
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing Animation
    const typingText = document.querySelector('.typing-text span');
    const texts = ["Web Developer", "Developer", "Web Designer", "YouTuber", "Script Writer"];
    let index = 0;

    function type() {
        typingText.textContent = texts[index];
        index = (index + 1) % texts.length;
        setTimeout(type, 2000);
    }

    type();
});
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
//document.addEventListener('DOMContentLoaded', function() {
   // const tabButtons = document.querySelectorAll('.tab-button');
    //const tabContents = document.querySelectorAll('.tab-content');

    //tabButtons.forEach(button => {
       // button.addEventListener('click', function() {
            //const targetTab = this.dataset.tab;

            // Remove 'active' class from all buttons and contents
            //tabButtons.forEach(btn => btn.classList.remove('active'));
           // tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button and corresponding content
           // this.classList.add('active');
            //document.getElementById(targetTab).classList.add('active');
       // });
    //});
//});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.resume-menu button');
    const details = document.querySelectorAll('.resume-detail');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const activeSection = document.getElementById(sectionId);

            // Check if the clicked section is already active
            if (activeSection.classList.contains('active')) {
                return; // Do nothing if already active
            }

            // Hide all details with animation
            details.forEach(detail => {
                if (detail.classList.contains('active')) {
                    detail.classList.remove('active');
                    setTimeout(() => {
                        detail.style.display = 'none'; // Set display to none after transition ends
                    }, 500); // Match this duration with the CSS transition duration
                }
            });

            // Show the selected detail with animation after a short delay
            setTimeout(() => {
                activeSection.style.display = 'block'; // Set display to block
                setTimeout(() => {
                    activeSection.classList.add('active'); // Trigger the animation
                }, 10); // Short timeout to allow display change to take effect
            }, 500); // Delay before showing the next detail
        });
    });
});

//project animation...........



document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you can handle the form submission (e.g., send to server, show a success message)
        // Example: Log data to console
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Clear the form fields after submission
        contactForm.reset();

        // Show a success message or animate
        alert("Your message has been sent!"); // You can replace this with a better UI message

        // Optionally, you can add animation effects here
        // For example, add a class to the form to trigger an animation
        contactForm.classList.add('submitted');
        setTimeout(() => {
            contactForm.classList.remove('submitted'); // Remove class after animation
        }, 2000);
    });
});


function validateForm(name, email, message) {
    if (!name || !email || !message) {
        alert("Please fill out all fields."); // Replace with better UI feedback
        return false;
    }
    // Add more validation as needed (e.g., email format)
    return true;
}

//contact me 
function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_i78gxoh","template_h27g2yu",parms).then(alert("Email Sent !"))
}