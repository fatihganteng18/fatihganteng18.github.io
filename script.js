const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const menuIcon = document.querySelector('#menuIcon');
const exitIcon = document.querySelector('#exitIcon');

let isMenuOpen = false;

if (menuButton) {
    menuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');

            menuIcon.classList.add('hidden');
            exitIcon.classList.remove('hidden');

            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');

            menuIcon.classList.remove('hidden');
            exitIcon.classList.add('hidden');

            document.body.style.overflow = 'auto';
        }
    });
}

// Tutup menu mobile saat salah satu link diklik
if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (isMenuOpen) menuButton.click();
        });
    });
}
