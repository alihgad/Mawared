let currentSlide = 0;
const slides = document.getElementById('carousel');
const totalSlides = slides.children.length;

function changeSlide(index) {
  currentSlide = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

  changeSelected(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  changeSelected(currentSlide);
}

// Show the first slide by default
changeSelected(currentSlide);


function changeSelected(x) {
  changeSlide(x)
  let thisDot = document.querySelector('.dot-' + x);
  let buttons = document.querySelectorAll('.ccc');
  console.log(buttons);


  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected');
    buttons[i].classList.remove('w-10');
    buttons[i].classList.add('w-3');
  }

  thisDot.classList.add('selected');
  thisDot.classList.remove('w-3');
  thisDot.classList.add('w-10');
}



// nav

const burgerButton = document.getElementById("burgerButton");
const dropdownMenu = document.getElementById("dropdownMenu");

function toggleMenu() {
  dropdownMenu.classList.toggle("hidden");
  dropdownMenu.classList.toggle("flex");
}



