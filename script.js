const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let current = 0;
let interval = null;

function goTo(n){
  current = (n + slides.length) % slides.length;
  slidesContainer.style.transform = `translateX(-${current * 100}%)`;
  updateDots();
}

function next(){ goTo(current + 1) }
function prev(){ goTo(current - 1) }

function createDots(){
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    if(i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => { goTo(i); resetInterval(); });
    dotsContainer.appendChild(btn);
  });
}

function updateDots(){
  [...dotsContainer.children].forEach((b, i) => b.classList.toggle('active', i === current));
}

function startInterval(){ interval = setInterval(next, 3000); }
function stopInterval(){ clearInterval(interval); interval = null; }
function resetInterval(){ stopInterval(); startInterval(); }

prevBtn.addEventListener('click', () => { prev(); resetInterval(); });
nextBtn.addEventListener('click', () => { next(); resetInterval(); });
document.querySelector('.carousel').addEventListener('mouseenter', stopInterval);
document.querySelector('.carousel').addEventListener('mouseleave', startInterval);

createDots();
goTo(0);
startInterval();
