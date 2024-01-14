const removeBtn = document.querySelector('.nav-icon');
const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.toggle-icon');

toggleBtn.addEventListener('click', function(){
   nav.classList.add('active')
});

removeBtn.addEventListener('click', function(){
    nav.classList.remove('active')
 })

const revealbtn = document.getElementsByClassName('article_faq');
const answer = document.querySelector('.answer');

for ( let i = 0; i < revealbtn.length; i++) {
   revealbtn[i].addEventListener('click', function(){
      this.classList.toggle('reveal');
   });
}

const newText = document.querySelector(".date");
const newDate = new Date().getFullYear();

newText.setAttribute('value', newDate);
newText.innerHTML = newDate;

const body = nav.scrollX;
console.log(body);


 

//Background auto switch and manual switch...

//  const body = document.body;

//  const images = [
//    "building-8373618_1920.jpg",
//    "kid-8419485_1920.jpg",
//    "gantavya-bhatt-eKbt1g1RT6I-unsplash.jpg",
//    "moon-8330104_1920.png",
//    "iuliu-illes-e6izyojjM1s-unsplash.jpg"
//  ]

//  let currentIndex = 0;

//  function changeBackground() {
//    body.style.backgroundImage = `url('images/${images[currentIndex]}')`;
//    currentIndex = (currentIndex + 1) % images.length;
//  }

//  setInterval(changeBackground, 5000);

// body.addEventListener('click', function(){
//    body.style.backgroundImage = `url('images/${images[currentIndex]}')`;
//    currentIndex++;

// })

// End