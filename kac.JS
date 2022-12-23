let bg = document.getElementById('bg');
let grl1 = document.getElementById('left');
let grl2 = document.getElementById('right');
let pot = document.getElementById('pot');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    grl1.style.marginLeft = value * -3 + 'px';
    grl2.style.marginLeft = value * 3.3 + 'px';
    pot.style.marginTop = value * 2 + 'px';
    text.style.marginTop = value * 0.4 + 'px';
})
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight -
    window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}