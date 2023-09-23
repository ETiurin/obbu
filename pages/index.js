const burger = document.querySelectorAll('.header__burger-btn');
const modalOverlay = document.querySelector('.burger__modal-overlay');
const modals = document.querySelectorAll('.burger__modals');

burger.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path  = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('burger__modal-overlay--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('burger__modal--visible');
        modalOverlay.classList.add('burger__modal-overlay--visible');
    });
});