document.addEventListener("DOMContentLoaded", () => {

    const menuBtns = document.querySelectorAll('.main__panel-button');
    menuBtns.forEach(el => {
        el.addEventListener("click", (e) => {
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest('.main__panel-element').querySelector('.main__panel-dropdown');

            menuBtns.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('.main__panel-element_active');
                }
            });

            drop.classList.toogle('main__panel-dropdown_active');
            currentBtn.classList.toogle('.main__panel-element_active');

        });
    });
});