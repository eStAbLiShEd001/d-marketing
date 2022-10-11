const showOverlay = document.querySelector('.btn-2');
const overlay = document.querySelector('.overlay');
const overlayBtn = document.querySelector('.overlay-btn');


showOverlay.addEventListener('click', function(){
    overlay.classList.toggle('hide');
})

overlayBtn.addEventListener('click', function(){
    overlay.classList.add('hide');
})

document.addEventListener('keydown', function(){
    overlay.classList.add('hide');
})