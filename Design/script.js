document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
    });

    mobileMenuOverlay.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });
});
