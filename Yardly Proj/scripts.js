function searchItems() {
    const query = document.getElementById("searchInput").value;
    alert("Searching for: " + query);
  }
  
  function subscribeNewsletter() {
    const email = document.getElementById("emailInput").value;
    if (email) {
      alert("Subscribed with: " + email);
    } else {
      alert("Please enter a valid email address.");
    }
  }
  
  function toggleFAQ(faqItem) {
    const answer = faqItem.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll(".discover");
  
  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;
  
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  
    currentSlide = index;
  }
  
  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      showSlide(currentSlide + 1);
    }
  }
  
  function prevSlide() {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  }
  
  