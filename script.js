/* ========================================
   Configuration Cloudinary
   ======================================== */
const CLOUDINARY_CONFIG = {
    cloudName: 'VOTRE_CLOUD_NAME', // À REMPLACER
    uploadPreset: 'VOTRE_UPLOAD_PRESET', // À REMPLACER
    folder: 'bapteme-leonie-2026',
    maxFiles: 20,
    maxFileSize: 10000000, // 10 Mo
    sources: ['local', 'camera'],
    multiple: true,
    resourceType: 'image',
    clientAllowedFormats: ['jpg', 'jpeg', 'png', 'heic', 'webp'],
};

/* ========================================
   Configuration EmailJS
   ======================================== */
const EMAILJS_CONFIG = {
    serviceId: 'VOTRE_SERVICE_ID', // À REMPLACER
    templateId: 'VOTRE_TEMPLATE_ID', // À REMPLACER
    publicKey: 'VOTRE_PUBLIC_KEY', // À REMPLACER
    recipientEmail: 'maanon1307@gmail.com'
};

/* ========================================
   Questions du Quiz
   ======================================== */
const quizQuestions = [
    {
        question: "Quel jour Léonie est-elle née ?",
        options: ["5 juin 2025", "6 juin 2025", "7 juin 2025", "8 juin 2025"],
        correct: 1
    },
    {
        question: "Quelle est la couleur préférée de Léonie ?",
        options: ["Rose", "Bleu", "Jaune", "Toutes les couleurs !"],
        correct: 3
    },
    {
        question: "Quel est le jouet favori de Léonie ?",
        options: ["Son doudou", "Ses peluches", "Ses livres", "Tout ce qui fait du bruit"],
        correct: 3
    },
    {
        question: "Combien pèse Léonie environ ?",
        options: ["8 kg", "9 kg", "10 kg", "11 kg"],
        correct: 2
    },
    {
        question: "Que préfère Léonie ?",
        options: ["Dormir", "Manger", "Jouer", "Rire"],
        correct: 3
    }
];

/* ========================================
   Variables globales
   ======================================== */
let uploadedPhotosCount = 0;
let currentQuizQuestion = 0;
let quizScore = 0;
let cloudinaryWidget = null;
const guestbookMessages = [];

/* ========================================
   Initialisation au chargement de la page
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
    initEnvelopeAnimation();
    initCountdown();
    initScrollReveal();
    initNavigation();
    initUpload();
    initGuestbook();
    initQuiz();
});

/* ========================================
   Animation de l'enveloppe réaliste
   ======================================== */
function initEnvelopeAnimation() {
    const envelopeRealistic = document.getElementById('envelope-realistic');
    const envelopeContainer = document.getElementById('envelope-animation');
    const mainContent = document.getElementById('main-content');
    const invitationCard = document.getElementById('invitation-card');

    let isOpened = false;

    // Clic sur l'enveloppe pour l'ouvrir
    envelopeRealistic.addEventListener('click', function() {
        if (!isOpened) {
            // Ouvrir l'enveloppe
            envelopeRealistic.classList.add('opened');
            isOpened = true;

            // Afficher le faire-part (vérifier si image perso ou fallback)
            const invitationImage = document.getElementById('invitation-image');
            const invitationFallback = document.getElementById('invitation-fallback');
            
            // Si l'image est chargée avec succès, on masque le fallback
            if (invitationImage && invitationImage.complete && invitationImage.naturalHeight !== 0) {
                invitationFallback.style.display = 'none';
                invitationImage.style.display = 'block';
            }

            // Après 2 secondes, transition vers le site
            setTimeout(() => {
                envelopeContainer.classList.add('hiding');
                
                setTimeout(() => {
                    envelopeContainer.style.display = 'none';
                    mainContent.classList.remove('hidden');
                    
                    setTimeout(() => {
                        mainContent.classList.add('visible');
                        triggerConfetti();
                    }, 100);
                }, 1000);
            }, 2500);
        }
    });

    // Gestion du cas où l'image personnalisée ne charge pas
    const invitationImage = document.getElementById('invitation-image');
    if (invitationImage) {
        invitationImage.addEventListener('error', function() {
            // Si l'image ne charge pas, on affiche le fallback
            this.style.display = 'none';
            document.getElementById('invitation-fallback').style.display = 'block';
        });
    }
}

/* ========================================
   Compte à rebours
   ======================================== */
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
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
    checkReveal(); // Vérifier au chargement
}

/* ========================================
   Navigation
   ======================================== */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les liens
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Ajouter la classe active au lien cliqué
            this.classList.add('active');
            
            // Scroller vers la section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Activer le lien correspondant au scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
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
   Upload Cloudinary
   ======================================== */
function initUpload() {
    const uploadButton = document.getElementById('upload-button');
    const uploadZone = document.getElementById('upload-zone');
    const uploadProgress = document.getElementById('upload-progress');
    const uploadSuccess = document.getElementById('upload-success');
    const uploadMoreBtn = document.getElementById('upload-more');

    // Créer le widget Cloudinary
    if (typeof cloudinary !== 'undefined') {
        cloudinaryWidget = cloudinary.createUploadWidget(
            {
                cloudName: CLOUDINARY_CONFIG.cloudName,
                uploadPreset: CLOUDINARY_CONFIG.uploadPreset,
                folder: CLOUDINARY_CONFIG.folder,
                sources: CLOUDINARY_CONFIG.sources,
                multiple: CLOUDINARY_CONFIG.multiple,
                maxFiles: CLOUDINARY_CONFIG.maxFiles,
                maxFileSize: CLOUDINARY_CONFIG.maxFileSize,
                clientAllowedFormats: CLOUDINARY_CONFIG.clientAllowedFormats,
                showAdvancedOptions: false,
                cropping: false,
                theme: 'white',
                styles: {
                    palette: {
                        window: '#EFEEEC',
                        windowBorder: '#C3A2A5',
                        tabIcon: '#7C6755',
                        menuIcons: '#7C6755',
                        textDark: '#4A4A4A',
                        textLight: '#FFFFFF',
                        link: '#C3A2A5',
                        action: '#C3A2A5',
                        inactiveTabIcon: '#C8BDAE',
                        error: '#D4726E',
                        inProgress: '#C3A2A5',
                        complete: '#7C9E7A',
                        sourceBg: '#FFFFFF'
                    }
                },
                text: {
                    fr: {
                        or: 'ou',
                        back: 'Retour',
                        close: 'Fermer',
                        no_results: 'Aucun résultat',
                        search_placeholder: 'Rechercher...',
                        menu: {
                            files: 'Mes fichiers',
                            web: 'Web',
                            camera: 'Appareil photo'
                        },
                        local: {
                            browse: 'Parcourir',
                            dd_title_single: 'Glissez vos photos ici',
                            dd_title_multi: 'Glissez vos photos ici',
                            drop_title_single: 'Déposez pour uploader',
                            drop_title_multi: 'Déposez pour uploader'
                        }
                    }
                },
                language: 'fr'
            },
            (error, result) => {
                if (!error && result && result.event === 'success') {
                    uploadedPhotosCount++;
                    updatePhotoCount();
                    addPhotoToGallery(result.info.secure_url, result.info.thumbnail_url);
                }

                if (!error && result && result.event === 'close') {
                    if (uploadedPhotosCount > 0) {
                        showUploadSuccess();
                        sendEmailNotification(uploadedPhotosCount);
                        triggerConfetti();
                    }
                }
            }
        );
    }

    // Ouvrir le widget au clic
    uploadButton.addEventListener('click', function() {
        if (cloudinaryWidget) {
            cloudinaryWidget.open();
        } else {
            alert('Configuration Cloudinary manquante. Veuillez suivre les instructions dans README.md');
        }
    });

    // Ouvrir le widget au clic sur la zone
    uploadZone.addEventListener('click', function(e) {
        if (e.target === uploadZone || e.target.closest('.upload-icon, .upload-title, .upload-description')) {
            if (cloudinaryWidget) {
                cloudinaryWidget.open();
            }
        }
    });

    // Upload plus de photos
    uploadMoreBtn.addEventListener('click', function() {
        uploadSuccess.classList.add('hidden');
        uploadZone.classList.remove('hidden');
        if (cloudinaryWidget) {
            cloudinaryWidget.open();
        }
    });
}

function updatePhotoCount() {
    const photoCountElement = document.getElementById('photo-count');
    photoCountElement.textContent = uploadedPhotosCount;
    
    // Animation du compteur
    photoCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        photoCountElement.style.transform = 'scale(1)';
    }, 300);
}

function addPhotoToGallery(url, thumbnailUrl) {
    const galleryGrid = document.getElementById('gallery-grid');
    const placeholder = galleryGrid.querySelector('.gallery-placeholder');
    
    if (placeholder) {
        placeholder.remove();
    }

    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${thumbnailUrl || url}" alt="Photo de la journée" loading="lazy">`;
    
    galleryGrid.appendChild(galleryItem);
    
    // Animation d'apparition
    setTimeout(() => {
        galleryItem.style.opacity = '0';
        galleryItem.style.transform = 'scale(0.8)';
        setTimeout(() => {
            galleryItem.style.transition = 'all 0.5s ease';
            galleryItem.style.opacity = '1';
            galleryItem.style.transform = 'scale(1)';
        }, 50);
    }, 0);
}

function showUploadSuccess() {
    const uploadZone = document.getElementById('upload-zone');
    const uploadSuccess = document.getElementById('upload-success');
    
    uploadZone.classList.add('hidden');
    uploadSuccess.classList.remove('hidden');
}

function sendEmailNotification(photoCount) {
    // Cette fonction nécessite EmailJS configuré
    // Pour l'instant, on simule juste l'envoi
    console.log(`Email envoyé : ${photoCount} photo(s) uploadée(s)`);
    
    // Code EmailJS à activer après configuration :
    /*
    if (typeof emailjs !== 'undefined') {
        emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            {
                to_email: EMAILJS_CONFIG.recipientEmail,
                photo_count: photoCount,
                upload_time: new Date().toLocaleString('fr-FR')
            },
            EMAILJS_CONFIG.publicKey
        );
    }
    */
}

/* ========================================
   Livre d'or
   ======================================== */
function initGuestbook() {
    const guestbookForm = document.getElementById('guestbook-form');

    guestbookForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('guest-name').value.trim() || 'Anonyme';
        const message = document.getElementById('guest-message').value.trim();

        if (!message) {
            alert('Veuillez écrire un message');
            return;
        }

        const messageData = {
            name: name,
            message: message,
            date: new Date().toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        guestbookMessages.unshift(messageData);
        addMessageToDOM(messageData);

        // Réinitialiser le formulaire
        guestbookForm.reset();

        // Envoyer par email (à configurer)
        sendGuestbookEmail(messageData);

        // Animation de succès
        showToast('Merci pour votre message ! 💕');
    });

    // Charger les messages existants (si stockés)
    loadGuestbookMessages();
}

function addMessageToDOM(messageData) {
    const messagesContainer = document.getElementById('messages-container');
    
    const messageCard = document.createElement('div');
    messageCard.className = 'message-card';
    messageCard.innerHTML = `
        <div class="message-author">${messageData.name}</div>
        <div class="message-text">${escapeHtml(messageData.message)}</div>
        <div class="message-date">${messageData.date}</div>
    `;
    
    messagesContainer.insertBefore(messageCard, messagesContainer.firstChild);
}

function loadGuestbookMessages() {
    // Charger depuis localStorage ou API
    const savedMessages = localStorage.getItem('guestbookMessages');
    
    if (savedMessages) {
        const messages = JSON.parse(savedMessages);
        messages.forEach(msg => addMessageToDOM(msg));
    }
}

function sendGuestbookEmail(messageData) {
    console.log('Message du livre d\'or:', messageData);
    
    // Sauvegarder localement
    localStorage.setItem('guestbookMessages', JSON.stringify(guestbookMessages));
}

/* ========================================
   Quiz
   ======================================== */
function initQuiz() {
    loadQuizQuestion();

    const restartBtn = document.getElementById('restart-quiz');
    restartBtn.addEventListener('click', function() {
        currentQuizQuestion = 0;
        quizScore = 0;
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        loadQuizQuestion();
    });
}

function loadQuizQuestion() {
    if (currentQuizQuestion >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    const question = quizQuestions[currentQuizQuestion];
    
    document.getElementById('current-question').textContent = currentQuizQuestion + 1;
    document.getElementById('quiz-question').textContent = question.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectQuizAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

function selectQuizAnswer(selectedIndex) {
    const question = quizQuestions[currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
    });

    if (selectedIndex === question.correct) {
        quizScore++;
    }

    setTimeout(() => {
        currentQuizQuestion++;
        loadQuizQuestion();
    }, 1500);
}

function showQuizResult() {
    const quizContainer = document.getElementById('quiz-container');
    const quizResult = document.getElementById('quiz-result');
    
    quizContainer.classList.add('hidden');
    quizResult.classList.remove('hidden');

    const resultEmoji = quizResult.querySelector('.result-emoji');
    const resultTitle = quizResult.querySelector('.result-title');
    const finalScore = document.getElementById('final-score');

    finalScore.textContent = quizScore;

    if (quizScore === 5) {
        resultEmoji.textContent = '🏆';
        resultTitle.textContent = 'Parfait ! Vous êtes un expert !';
    } else if (quizScore >= 3) {
        resultEmoji.textContent = '🎉';
        resultTitle.textContent = 'Très bien ! Vous connaissez bien Léonie !';
    } else {
        resultEmoji.textContent = '😊';
        resultTitle.textContent = 'Pas mal ! Il faut encore apprendre !';
    }

    triggerConfetti();
}

/* ========================================
   Confettis
   ======================================== */
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const confettiCount = 150;
    const colors = ['#C3A2A5', '#7C6755', '#F9F1C9', '#C8BDAE', '#EFEEEC'];

    class Confetto {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.r = Math.random() * 6 + 4;
            this.d = Math.random() * confettiCount;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.tilt = Math.floor(Math.random() * 10) - 10;
            this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
            this.tiltAngle = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.lineWidth = this.r / 2;
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.x + this.tilt + this.r / 4, this.y);
            ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4);
            ctx.stroke();
        }
    }

    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new Confetto());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c, index) => {
            c.tiltAngle += c.tiltAngleIncremental;
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            c.x += Math.sin(c.d);
            c.tilt = Math.sin(c.tiltAngle - index / 3) * 15;

            if (c.y > canvas.height) {
                confetti[index] = new Confetto();
            }

            c.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Arrêter après 3 secondes
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 3000);
}

/* ========================================
   Toast notification
   ======================================== */
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-secondary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: var(--shadow-md);
        z-index: 10000;
        animation: fadeInUp 0.3s ease;
        font-family: var(--font-body);
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ========================================
   Utilitaires
   ======================================== */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Ajuster la taille du canvas au redimensionnement
window.addEventListener('resize', function() {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
