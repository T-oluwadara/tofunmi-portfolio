const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');


btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')

})

var app = document.getElementById('about');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Oluwadara Victoria.')
    .pauseFor(1500)
    .deleteAll()
    .start();




function addTransistion(querySelector, transistionClasses) {
    var reveals = document.querySelectorAll(querySelector);

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            for (var j = 0; j < transistionClasses.length; j++) {
                reveals[i].classList.add(transistionClasses[j]);
            }
        } else {
            for (var j = 0; j < transistionClasses.length; j++) {
                reveals[i].classList.remove(transistionClasses[j]);
            }
        }
    }
}

window.addEventListener('scroll', function () {
    return addTransistion('.reveal', ['active']);
});

window.addEventListener('scroll', function () {
    return addTransistion('.right_fade', ['animate__animated', 'animate__fadeInRightBig']);
});

window.addEventListener('scroll', function () {
    return addTransistion('.left_fade', ['animate__animated', 'animate__fadeInLeft']);
});
