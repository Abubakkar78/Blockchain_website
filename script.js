// Dashboard data loading
async function loadDashboard() {
  try {
    const response = await fetch('/api/imports');
    const data = await response.json();
    updateDashboard(data);
  } catch (error) {
    console.error("Dashboard error:", error);
  }
}

// Form handling
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });
    alert('Message sent successfully!');
    e.target.reset();
  } catch (error) {
    alert('Error sending message');
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadDashboard();
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });
});