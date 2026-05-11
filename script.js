/* ========================================
   Animation 3D de l'enveloppe photoréaliste
   ======================================== */

// Variables globales
let isOpened = false;
let animationTimeout;

/* ========================================
   Initialisation
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
    initEnvelope3D();
    
    // Vérifier si image personnalisée existe
    checkCustomImage();
});

/* ========================================
   Gestion de l'enveloppe 3D
   ======================================== */
function initEnvelope3D() {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelope-container');
    const resetBtn = document.getElementById('reset-btn');
    const envelopeScene = document.getElementById('envelope-scene');
    const mainContent = document.getElementById('main-content');

    // Clic sur l'enveloppe pour ouvrir
    envelope.addEventListener('click', function() {
        if (!isOpened) {
            openEnvelope();
        }
    });

    // Bouton reset pour rejouer l'animation
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            resetEnvelope();
        });
    }

    // Fonction d'ouverture avec séquence d'animation
    function openEnvelope() {
        isOpened = true;
        envelope.classList.add('open');
        
        // Afficher le bouton reset après l'animation complète
        setTimeout(() => {
            if (resetBtn) {
                resetBtn.style.display = 'block';
            }
        }, 1200);

        // Après 3 secondes, transition vers le site principal
        animationTimeout = setTimeout(() => {
            transitionToMainSite();
        }, 3000);
    }

    // Fonction de reset
    function resetEnvelope() {
        isOpened = false;
        envelope.classList.remove('open');
        
        if (resetBtn) {
            resetBtn.style.display = 'none';
        }
        
        // Annuler la transition auto si en cours
        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }
    }

    // Transition vers le site principal
    function transitionToMainSite() {
        envelopeScene.classList.add('hiding');
        
        setTimeout(() => {
            envelopeScene.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Réactiver le scroll
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            
            setTimeout(() => {
                mainContent.classList.add('visible');
                
                // Initialiser le reste du site
                initMainSite();
            }, 100);
        }, 1000);
    }
}

/* ========================================
   Vérification image personnalisée
   ======================================== */
function checkCustomImage() {
    const invitationImage = document.getElementById('invitation-image');
    const invitationDefault = document.getElementById('invitation-default');
    
    if (invitationImage) {
        // Vérifier si l'image se charge
        invitationImage.addEventListener('load', function() {
            if (this.complete && this.naturalHeight !== 0) {
                // Image chargée avec succès
                invitationImage.style.display = 'block';
                if (invitationDefault) {
                    invitationDefault.style.display = 'none';
                }
            }
        });
        
        // Si l'image ne charge pas, garder le contenu par défaut
        invitationImage.addEventListener('error', function() {
            invitationImage.style.display = 'none';
            if (invitationDefault) {
                invitationDefault.style.display = 'block';
            }
        });
    }
}

/* ========================================
   Initialisation du site principal
   ======================================== */
function initMainSite() {
    initCountdown();
    initScrollReveal();
    initNavigation();
    // ... autres initialisations
}

/* ========================================
   Compte à rebours
   ======================================== */
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const eventDate = new Date('2026-06-06T14:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = '<div class="countdown-message">C\'est aujourd\'hui ! 🎉</div>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Jours</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">Heures</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">Secondes</span>
            </div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ========================================
   Révélation au scroll
   ======================================== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal();
}

/* ========================================
   Navigation
   ======================================== */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Activer le lien au scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

/* ========================================
   Optimisation performances 3D
   ======================================== */

// Force GPU acceleration
const envelope = document.getElementById('envelope');
if (envelope) {
    envelope.style.willChange = 'transform';
}

// Nettoyer will-change après animation
document.getElementById('envelope')?.addEventListener('animationend', function() {
    this.style.willChange = 'auto';
});

/* ========================================
   Debug helper (console)
   ======================================== */
console.log('✨ Enveloppe 3D photoréaliste initialisée');
console.log('📋 Pour rejouer : cliquez sur "Fermer et rejouer"');
console.log('🎨 Charte graphique Léonie appliquée');
