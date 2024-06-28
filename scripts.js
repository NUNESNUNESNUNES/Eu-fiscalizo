let slideIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
    showSlides(slideIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('none');
}

function w3_open() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("sidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar").style.display = "block";
  }
  
// Accordion
let acc = document.getElementsByClassName('accordion-button');
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}