// Fonction pour ajouter une classe 'active' au lien de navigation actuel
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav a');
    const menuLength = menuItems.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].className = 'active';
        }
    }
});

// Fonction pour afficher un message de bienvenue
function showWelcomeMessage() {
    const main = document.querySelector('main');
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'welcome-message';
    welcomeMessage.textContent = 'Bienvenue sur mon site personnel !';
    main.insertBefore(welcomeMessage, main.firstChild);

    // Faire disparaître le message après 3 secondes
    setTimeout(() => {
        welcomeMessage.style.opacity = '0';
        setTimeout(() => {
            welcomeMessage.remove();
        }, 500);
    }, 3000);
}

// Appeler la fonction de bienvenue lorsque la page d'accueil est chargée
if (location.pathname === '/' || location.pathname === '/index.html') {
    showWelcomeMessage();
}