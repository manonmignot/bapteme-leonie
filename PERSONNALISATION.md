# 🎨 GUIDE DE PERSONNALISATION - Version Quiet Luxury

## 📸 Comment ajouter vos photos personnelles

### 1️⃣ Photo du faire-part dans l'enveloppe

#### Préparer votre photo
1. Prendre une belle photo de votre faire-part papier
2. Sur fond neutre (blanc ou beige clair)
3. Lumière naturelle pour un rendu authentique
4. Format : JPG ou PNG
5. Dimension recommandée : 800x600 pixels minimum

#### Ajouter la photo au site

**Option A : Photo hébergée en ligne**
1. Uploader votre photo sur un hébergeur gratuit :
   - **Imgur.com** (gratuit, simple)
   - **Cloudinary** (si vous l'avez déjà configuré)
   - **Google Drive** (mettre en partage public)

2. Copier l'URL directe de l'image

3. Ouvrir `index.html`

4. Chercher la ligne 26 :
```html
<img src="faire-part-leonie.jpg" alt="Faire-part de Léonie" class="invitation-image" id="invitation-image">
```

5. Remplacer par :
```html
<img src="VOTRE_URL_IMAGE_ICI" alt="Faire-part de Léonie" class="invitation-image" id="invitation-image" style="display: block;">
```

6. Masquer le texte fallback (ligne 28) :
```html
<div class="invitation-text-fallback" id="invitation-fallback" style="display: none;">
```

**Option B : Photo dans le même dossier**
1. Renommer votre photo : `faire-part-leonie.jpg`
2. Placer le fichier dans le même dossier que `index.html`
3. Dans `index.html` ligne 26, ajouter `style="display: block;"` :
```html
<img src="faire-part-leonie.jpg" alt="Faire-part de Léonie" class="invitation-image" id="invitation-image" style="display: block;">
```
4. Masquer le fallback (ligne 28) :
```html
<div class="invitation-text-fallback" id="invitation-fallback" style="display: none;">
```

---

### 2️⃣ Photo de Léonie sur la page d'accueil

#### Dans la section Hero

**Chercher dans `index.html` lignes 78-88** (le SVG placeholder)

**Remplacer tout le bloc par :**

```html
<div class="hero-image reveal">
    <div class="photo-frame">
        <img src="photo-leonie.jpg" alt="Léonie" class="hero-photo">
    </div>
</div>
```

**Ajouter ce CSS dans `style.css` après la ligne 450 :**

```css
.photo-frame {
    background: var(--color-white);
    padding: 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-paper);
    border: 1px solid rgba(200, 189, 174, 0.2);
    max-width: 400px;
}

.hero-photo {
    width: 100%;
    height: auto;
    border-radius: 4px;
    display: block;
}
```

**Placer votre photo `photo-leonie.jpg` dans le même dossier.**

---

### 3️⃣ Galerie de photos d'exemple

Si vous voulez pré-remplir la galerie avec quelques photos :

**Dans `index.html`, section galerie (ligne ~145)**, remplacer :
```html
<div class="gallery-placeholder">
    <p>Les premières photos apparaîtront ici ✨</p>
</div>
```

**Par :**
```html
<div class="gallery-item">
    <img src="photo-1.jpg" alt="Photo souvenir">
</div>
<div class="gallery-item">
    <img src="photo-2.jpg" alt="Photo souvenir">
</div>
<div class="gallery-item">
    <img src="photo-3.jpg" alt="Photo souvenir">
</div>
```

Placer vos photos `photo-1.jpg`, `photo-2.jpg`, etc. dans le dossier.

---

## 🎯 Comment modifier le QUIZ avec des photos

### Version actuelle (texte seul)

Le quiz actuel est dans `script.js` lignes 19-44.

### Ajouter des photos aux questions

#### Étape 1 : Préparer vos photos

Pour chaque question avec photo :
1. Prendre/trouver la photo (Léonie bébé, objet favori, etc.)
2. Format : JPG, 500x500 pixels recommandé
3. Nommer clairement : `quiz-photo-1.jpg`, `quiz-photo-2.jpg`

#### Étape 2 : Héberger les photos

**Option recommandée : Cloudinary** (déjà configuré pour le site)
1. Aller sur cloudinary.com
2. Media Library
3. Créer un dossier `quiz-photos`
4. Uploader vos photos
5. Pour chaque photo, clic droit → "Copy URL"

**Option simple : Imgur**
1. Aller sur imgur.com
2. Upload image
3. Copier le lien direct

#### Étape 3 : Modifier le code du quiz

**Dans `script.js`, remplacer les lignes 19-44 par :**

```javascript
const quizQuestions = [
    {
        question: "Voici Léonie à la naissance. Combien pesait-elle ?",
        image: "https://votre-url-cloudinary.com/quiz-photo-1.jpg", // ← URL de votre photo
        options: ["2,8 kg", "3,2 kg", "3,6 kg", "4,0 kg"],
        correct: 2  // Index de la bonne réponse (commence à 0)
    },
    {
        question: "Quel est le jouet préféré de Léonie ?",
        image: "https://votre-url-cloudinary.com/quiz-photo-2.jpg",
        options: ["Son doudou", "Sa peluche", "Ses cubes", "Son hochet"],
        correct: 0
    },
    {
        question: "Léonie adore cette personne. Qui est-ce ?",
        image: "https://votre-url-cloudinary.com/quiz-photo-3.jpg",
        options: ["Papa", "Maman", "Mamie", "Papy"],
        correct: 1
    },
    {
        question: "Voici Léonie lors de son premier bain. À quel âge ?",
        image: "https://votre-url-cloudinary.com/quiz-photo-4.jpg",
        options: ["2 jours", "1 semaine", "2 semaines", "1 mois"],
        correct: 0
    },
    {
        question: "Quelle est la couleur préférée de Léonie ?",
        image: null,  // Pas d'image pour cette question
        options: ["Rose", "Bleu", "Jaune", "Toutes !"],
        correct: 3
    }
];
```

#### Étape 4 : Modifier la fonction d'affichage

**Dans `script.js`, chercher la fonction `loadQuizQuestion` (ligne ~307)**

**Remplacer par cette version améliorée :**

```javascript
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

    // ✨ NOUVEAU : Afficher l'image si elle existe
    let imageHTML = '';
    if (question.image) {
        imageHTML = `
            <div class="quiz-image-container">
                <img src="${question.image}" alt="Photo question" class="quiz-image">
            </div>
        `;
    }

    // Insérer l'image avant les options
    if (imageHTML) {
        const imageDiv = document.createElement('div');
        imageDiv.innerHTML = imageHTML;
        document.querySelector('.quiz-question-container').insertBefore(
            imageDiv.firstElementChild,
            optionsContainer
        );
    }

    // Afficher les options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectQuizAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}
```

#### Étape 5 : Ajouter le CSS pour les images

**Dans `style.css`, après la ligne 900, ajouter :**

```css
.quiz-image-container {
    margin: var(--spacing-lg) 0;
    text-align: center;
}

.quiz-image {
    max-width: 100%;
    max-height: 300px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    object-fit: cover;
}

@media (max-width: 767px) {
    .quiz-image {
        max-height: 200px;
    }
}
```

---

## 🎨 Adapter le style QUIET LUXURY

### Typographies raffinées

**Remplacer les Google Fonts dans `index.html` ligne 8 :**

**ACTUEL :**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**VERSION QUIET LUXURY :**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Lato:wght@300;400&display=swap" rel="stylesheet">
```

**Puis dans `style.css`, remplacer ligne 26 :**
```css
--font-body: 'Lato', sans-serif;
```

### Couleurs encore plus subtiles

**Dans `style.css`, lignes 4-11, ajouter :**

```css
:root {
    /* ... couleurs existantes ... */
    
    /* Quiet luxury additionnels */
    --color-cream: #FAF9F6;        /* Crème ivoire */
    --color-taupe-dark: #5D4E42;   /* Taupe foncé */
    --color-gold: #C9B896;         /* Or discret */
    --color-paper: #F5F3F0;        /* Papier coton */
}
```

### Ombres plus douces

**Remplacer lignes 39-41 :**
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.10);
--shadow-paper: 0 2px 8px rgba(124, 103, 85, 0.12);
```

### Bordures arrondies plus subtiles

**Remplacer lignes 34-37 :**
```css
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
```

---

## 🖼️ Enveloppe ultra-réaliste (déjà fait)

L'enveloppe a été modifiée pour :
- ✅ Texture papier réaliste
- ✅ Cachet de cire 3D
- ✅ Ombres réalistes
- ✅ Clic direct sur l'enveloppe (pas de bouton)
- ✅ Animation fluide du faire-part qui sort

**Tester** : Ouvrir `index.html` et cliquer sur l'enveloppe !

---

## 📝 Modifier les textes (wording)

### Titres de sections

**Dans `index.html` :**

| Ligne | Actuel | Suggestion quiet luxury |
|-------|--------|-------------------------|
| ~60 | "Bienvenue à la célébration de Léonie" | "Célébration du baptême de Léonie" |
| ~108 | "Vos souvenirs" | "Vos photographies" |
| ~150 | "Livre d'or" | "Témoignages" |
| ~175 | "Connaissez-vous Léonie ?" | "Quelques questions" |

### Boutons et appels à l'action

| Actuel | Version épurée |
|--------|----------------|
| "Choisir des photos" | "Ajouter" |
| "Ajouter d'autres photos" | "Continuer" |
| "Signer le livre d'or" | "Envoyer" |

**Pour modifier**, chercher le texte dans `index.html` et remplacer.

---

## 🗺️ Carte Google Maps personnalisée

La carte a déjà été mise à jour pour **Meillon 64510**.

### Pour affiner l'emplacement exact

1. Aller sur [Google Maps](https://maps.google.com/)
2. Chercher "Salle polyvalente de Meillon 64510"
3. Cliquer sur **Partager** → **Intégrer une carte**
4. Copier le code iframe
5. Dans `index.html` ligne ~223, remplacer l'iframe actuel

---

## 🎨 Palette de couleurs - Référence

Votre charte (déjà appliquée) :

```
Primaire : #EFEEEC (beige rosé doux)
Secondaire : #C3A2A5 (vieux rose)
Tertiaire : #7C6755 (marron taupe)
Neutre : #C8BDAE (beige sable)
Accent : #F9F1C9 (vanille pâle)
```

Pour renforcer le côté **quiet luxury**, on a ajouté :

```
Crème : #FAF9F6
Taupe foncé : #5D4E42
Or discret : #C9B896
Papier : #F5F3F0
```

---

## 🔧 Checklist personnalisation

### Photos
- [ ] Photo du faire-part uploadée et intégrée
- [ ] Photo de Léonie sur la page d'accueil
- [ ] Photos du quiz préparées et hébergées
- [ ] Quiz modifié avec les nouvelles photos

### Textes
- [ ] Wording des sections ajusté
- [ ] Textes des boutons épurés
- [ ] Questions du quiz personnalisées

### Style
- [ ] Typographies raffinées (si souhaité)
- [ ] Couleurs quiet luxury appliquées
- [ ] Ombres adoucies

### Technique
- [ ] Tous les fichiers uploadés sur GitHub
- [ ] Site testé sur mobile
- [ ] Enveloppe réaliste fonctionnelle

---

## 💡 Astuces pro

### Photographier votre faire-part

Pour un rendu optimal dans l'enveloppe :
- **Lumière naturelle** (près d'une fenêtre)
- **Fond neutre** (blanc, beige, ou papier kraft)
- **À plat** (vue du dessus)
- **Sans ombre portée**
- **Netteté maximale** (mode macro si possible)

### Héberger vos photos

**Cloudinary** (recommandé car déjà configuré) :
1. Media Library
2. Créer dossiers : `faire-part/`, `hero/`, `quiz/`
3. Upload dans les bons dossiers
4. Copier les URLs

**Alternative Imgur** :
- Plus simple mais moins pro
- Pas de organisation en dossiers
- Mais gratuit et rapide

---

## 🆘 Aide supplémentaire

### La photo du faire-part ne s'affiche pas

✅ Vérifier que l'URL est correcte
✅ Vérifier que `style="display: block;"` est bien ajouté
✅ Tester l'URL dans un nouvel onglet (doit afficher l'image)
✅ Vérifier la console (F12) pour les erreurs

### Les photos du quiz ne s'affichent pas

✅ Vérifier que le code modifié est bien dans `script.js`
✅ Vérifier que le CSS des images est ajouté
✅ Tester les URLs des images
✅ Vérifier que `question.image` n'est pas `null` pour les questions avec photo

### Le style ne change pas

✅ Vider le cache du navigateur (Ctrl+Shift+R)
✅ Vérifier que les modifications sont dans le bon fichier CSS
✅ Déployer à nouveau sur GitHub Pages

---

## 📞 Support

Pour toute question sur la personnalisation :
- Relire ce guide étape par étape
- Vérifier les exemples de code
- Tester sur un fichier local avant de déployer

**Bon courage pour la personnalisation ! 🎨✨**
