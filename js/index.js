
let pixels = document.getElementById('displayPixels');
pixels.innerText = document.documentElement.clientWidth + "px";
window.onresize = function() {
    pixels.innerText = document.documentElement.clientWidth + "px";
    pixels.classList.add('show-width');
    setTimeout(remove, 2000);
    function remove() {
        pixels.classList.remove('show-width');
    }
}

window.addEventListener('resize', onresize);