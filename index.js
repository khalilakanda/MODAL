const click = document.querySelector('.click')
const overlay = document.querySelector('.modalOverlay')
const mclose = document.querySelector('.close') 


click.addEventListener('click', function(){
    overlay.classList.add('visible')
})
mclose.addEventListener('click', function(){
    overlay.classList.remove('visible')
})


var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 200,
    backSpeed: 150,
    loop: true
});