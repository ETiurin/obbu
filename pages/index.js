const burger = document.querySelectorAll('.header__burger-btn');
const modalOverlay = document.querySelector('.burger__modal-overlay');

burger.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path  = e.currentTarget.getAttribute('data-path');

        document.querySelector(`[data-target="${path}"]`).classList.add('burger__modal--visible');
        modalOverlay.classList.add('burger__modal-overlay--visible');
    });
});