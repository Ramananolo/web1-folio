const observeur = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
    if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
    }
    else {
        entry.target.classList.remove("show-items")
    }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observeur.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-Bottom");
scrollScale.forEach((el)=>observeur.observe(el));

const scrollTop = document.querySelectorAll(".scroll-Top");
scrollScale.forEach((el)=>observeur.observe(el));

