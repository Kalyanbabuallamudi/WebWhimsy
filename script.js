document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (validateForm(name, email, message)) {
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
    }
  });
  
  const validateForm = (name, email, message) => {
    if (name === '' || email === '' || message === '') {
      alert('All fields are required!');
      return false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    return true;
  };
  