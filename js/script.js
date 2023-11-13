document.addEventListener("DOMContentLoaded", () => {

    const menuBtns = document.querySelectorAll('.main__panel-button');
    const drops = document.querySelectorAll('.main__panel-dropdown');

    menuBtns.forEach(el => {
        el.addEventListener("click", (e) => {
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest('.main__panel-element').querySelector('.main__panel-dropdown');

            menuBtns.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('main__panel-element_active');
                }
            });

            drops.forEach(el => {
                if (el !== drop) {
                    el.classList.remove('main__panel-dropdown_active');
                }
            });

            drop.classList.toggle('main__panel-dropdown_active');
            currentBtn.classList.toggle('main__panel-element_active');
        });
    });

    document.addEventListener('click', (e) => {
        if  (!e.target.closest('.main__panel')) {
            menuBtns.forEach(el => {
                el.classList.remove('main__panel-element_active');
            });

            drops.forEach(el => {
                el.classList.remove('main__panel-dropdown_active');
            });
        }
    })
});