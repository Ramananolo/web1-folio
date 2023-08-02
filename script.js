// header fixed --//

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $('.header-fixed').removeClass('fixed');
    } else {
        $('.header-fixed').removeClass('fixed');
    }
});


let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let wordIndex = 0;
let maxWordIndex = words.length - 1;
words[wordIndex].style.opacity = "1";


let changeText = () => {
    let currrentWord = words[wordIndex];
    let nextWord = wordIndex === maxWordIndex ? words[0] : words[wordIndex + 1];
    Array.from(currrentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    wordIndex = wordIndex === maxWordIndex ? 0 : wordIndex + 1;
};
changeText();
setInterval(changeText, 3000);


// ----- Cercle skill ------ //

const cercles = document.querySelectorAll('.cercle');
cercles.forEach(elem => {
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})



/*******Div cacher */


// JavaScript pour afficher/cacher le div
// Récupérer les boutons et les divs par leur ID
const btnExperiences = document.getElementById("btn-parcour-experiences");
const btnEducation = document.getElementById("btn-parcour-education1");
const divExperiences = document.getElementById("container-parcour");
const divEducation = document.getElementById("container-parcour-my-education");

// Ajouter des écouteurs d'événements pour les clics sur les boutons
btnExperiences.addEventListener("click", function () {
  // Cacher le div "My Education"
  divEducation.style.display = "none";
  // Afficher le div "My Experiences"
  divExperiences.style.display = "block";
});

btnEducation.addEventListener("click", function () {
  // Cacher le div "My Experiences"
  divExperiences.style.display = "none";
  // Afficher le div "My Education"
  divEducation.style.display = "block";
});


/*** contact */


  


