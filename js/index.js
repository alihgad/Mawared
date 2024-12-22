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


  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected');
    buttons[i].classList.remove('!w-10');
    buttons[i].classList.add('w-3');
  }

  thisDot.classList.add('selected');
  thisDot.classList.remove('w-3');
  thisDot.classList.add('!w-10');
}



// nav

const burgerButton = document.getElementById("burgerButton");
const dropdownMenu = document.getElementById("dropdownMenu");

function toggleMenu() {
  dropdownMenu.classList.toggle("hidden");
  dropdownMenu.classList.toggle("flex");
}


let navLinks = document.querySelectorAll("#menu a")
let mobileLinks = document.querySelectorAll("#dropdownMenu a")

navLinks.forEach((link) => {
  link.children[0].children[1].classList.add("transation-all")
  link.children[0].children[1].classList.add("duration-500")
})

mobileLinks.forEach((link) => {
  link.children[0].children[1].classList.add("transation-all")
  link.children[0].children[1].classList.add("duration-500")
})
const sections = document.querySelectorAll('section');
window.onload= ()=>{
  addActiveClass('hero')
  scrollTo(0,0)
}

  // Function to remove active class from all links
  function removeActiveClasses() {
    navLinks.forEach((linko) => {
      linko.classList.remove("active");
      linko.children[0].children[1].classList.add("opacity-0")  
      linko.children[0].children[0].classList.remove("bg-[#f2f2f2]")
    })

    mobileLinks.forEach((linko) => {
      linko.classList.remove("active");
      linko.children[0].children[1].classList.add("opacity-0")  
      linko.children[0].children[0].classList.remove("bg-[#f2f2f2]")
    })
  }

  // Function to add active class to the current section's link
  function addActiveClass(id) {
    const activeLink = document.querySelector(`nav div div ul a[href="#${id}"]`);
    const activeMobile = document.querySelector(`#dropdownMenu ul a[href="#${id}"]`);
    
    if (activeLink) {
      activeLink.children[0].children[1].classList.remove("opacity-0")  
      activeLink.children[0].children[0].classList.add("bg-[#f2f2f2]")
    }

    if (activeMobile) {
      activeMobile.children[0].children[1].classList.remove("opacity-0")  
      activeMobile.children[0].children[0].classList.add("bg-[#f2f2f2]")
    }
  }

  // Scroll event listener
  window.addEventListener('scroll', () => {
    let currentSection = '';

    // Check which section is in the viewport
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 2 - 200) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update the active class
    removeActiveClasses();
    if (currentSection) {
      addActiveClass(currentSection);
    }
  });






