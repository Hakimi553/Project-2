// Form validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Contact form submission
function submitContactForm() {
    const name = document.querySelector('input[placeholder="Your name"]').value;
    const email = document.querySelector('input[placeholder="Your email"]').value;
    const message = document.querySelector('textarea[placeholder="Your message"]').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear form
    document.querySelector('input[placeholder="Your name"]').value = '';
    document.querySelector('input[placeholder="Your email"]').value = '';
    document.querySelector('textarea[placeholder="Your message"]').value = '';
}


// Update profile
function updateProfile() {
    alert('Profile updated successfully!');
}

function initMap() {
  const location = { lat: 3.2518596279659158, lng:  101.73320519604685 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
