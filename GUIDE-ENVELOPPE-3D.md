# 🎨 ENVELOPPE 3D PHOTORÉALISTE - Guide complet

## ✨ Ce que vous avez maintenant

Une **enveloppe interactive 3D ultra-réaliste** qui s'ouvre au clic avec :

### 🎭 Aspect visuel photoréaliste
- ✅ Enveloppe en perspective 3D (rotateY: -5deg, rotateX: 5deg)
- ✅ Couleur crème ivoire (#faf6f0) avec texture papier grain fin
- ✅ Rabat triangulaire avec pli réaliste visible
- ✅ Cachet de cire doré 3D avec monogramme "L" gravé
- ✅ Reflets brillants et ombres multi-couches
- ✅ Texture papier SVG avec effet grain naturel

### 🎬 Animation en 3 phases (1200ms total)

#### Phase 1 : Ouverture du rabat (0-400ms)
- Rabat qui s'ouvre vers le haut (rotateX: -180deg)
- Cachet de cire qui suit le mouvement
- Animation ease-out fluide

#### Phase 2 : Sortie du faire-part (300-800ms)
- Faire-part qui glisse de l'intérieur vers le haut
- Effet élastique (cubic-bezier bounce)
- Scale de 0.9 à 1 avec fade-in

#### Phase 3 : Mise en avant (800-1200ms)
- Enveloppe devient semi-transparente (opacity: 0.3)
- Faire-part au centre avec effet "respiration" (scale pulse)
- Ombres intensifiées

### 🎯 Fonctionnalités
- ✅ Clic sur l'enveloppe pour déclencher l'animation
- ✅ Bouton "Fermer et rejouer" pour recommencer
- ✅ Transition automatique vers le site après 3 secondes
- ✅ Support image personnalisée du faire-part
- ✅ Contenu par défaut élégant si pas d'image
- ✅ 100% responsive (desktop + mobile)
- ✅ 60fps garanti (GPU-accelerated)

---

## 🚀 Installation rapide

### Fichiers nécessaires
1. `index-3d.html` → Page principale
2. `style-3d.css` → Styles 3D réalistes
3. `script-3d.js` → Logique d'animation

### Mise en place

**Option A : Remplacer les fichiers actuels**
1. Sur GitHub, **supprimer** : `index.html`, `style.css`, `script.js`
2. **Renommer** :
   - `index-3d.html` → `index.html`
   - `style-3d.css` → `style.css`
   - `script-3d.js` → `script.js`
3. Uploader sur GitHub
4. Vider le cache (Ctrl + Shift + R)

**Option B : Garder les deux versions**
1. Uploader les fichiers `-3d` sur GitHub
2. Créer un lien : `votre-site.github.io/bapteme-leonie/index-3d.html`
3. Tester et choisir votre version préférée

---

## 📸 Ajouter votre photo de faire-part

### Méthode 1 : Image locale

1. **Renommer** votre photo : `faire-part-leonie.jpg`
2. **Placer** le fichier dans le même dossier que `index.html`
3. **Modifier** `index-3d.html` ligne 62 :
```html
<img src="faire-part-leonie.jpg" alt="Faire-part de Léonie" class="invitation-image" id="invitation-image" style="display: block;">
```
4. **Masquer** le contenu par défaut ligne 65 :
```html
<div class="invitation-default" id="invitation-default" style="display: none;">
```

### Méthode 2 : Image hébergée en ligne

1. **Uploader** sur Cloudinary ou Imgur
2. **Copier** l'URL directe de l'image
3. **Modifier** ligne 62 :
```html
<img src="https://votre-url-cloudinary.com/faire-part.jpg" alt="Faire-part de Léonie" class="invitation-image" id="invitation-image" style="display: block;">
```

### Format recommandé
- **Dimensions** : 800x600 pixels minimum
- **Format** : JPG ou PNG
- **Poids** : < 500 Ko (pour chargement rapide)
- **Orientation** : Portrait ou carré
- **Fond** : Blanc ou transparent

---

## 🎨 Personnalisation des couleurs

### Cachet de cire

Pour changer la couleur du cachet (actuellement doré) :

**Dans `style-3d.css`, lignes 16-18 :**
```css
/* Version dorée (actuelle) */
--wax-gold: #c9a961;
--wax-gold-dark: #a88445;
--wax-gold-light: #e5d09f;

/* Version rouge bordeaux */
--wax-gold: #8B1A1A;
--wax-gold-dark: #5D0F0F;
--wax-gold-light: #B83030;

/* Version vert sapin */
--wax-gold: #1A5D3A;
--wax-gold-dark: #0F3A24;
--wax-gold-light: #2D8659;

/* Version bleu nuit */
--wax-gold: #1A3A5D;
--wax-gold-dark: #0F243A;
--wax-gold-light: #2D5A8B;
```

### Couleur de l'enveloppe

**Lignes 15 :**
```css
/* Crème ivoire (actuelle) */
--envelope-cream: #faf6f0;

/* Blanc pur */
--envelope-cream: #ffffff;

/* Beige rosé (charte Léonie) */
--envelope-cream: #EFEEEC;

/* Kraft naturel */
--envelope-cream: #d4c5b0;
```

---

## ⚙️ Réglages avancés

### Vitesse d'animation

**Dans `style-3d.css` :**

```css
/* Phase 1 - Ouverture rabat */
.envelope.open .envelope-flap {
    animation: openFlap 400ms ease-out forwards;
    /* Changer 400ms → 600ms pour plus lent */
}

/* Phase 2 - Sortie faire-part */
.envelope.open .invitation-card {
    animation: slideOutCard 500ms cubic-bezier(...) 300ms forwards;
    /* Changer 500ms → 800ms pour plus fluide */
    /* Changer 300ms (delay) pour décalage avec Phase 1 */
}
```

### Délai avant transition site

**Dans `script-3d.js` ligne 54 :**
```javascript
// Attendre 3 secondes avant d'aller au site
animationTimeout = setTimeout(() => {
    transitionToMainSite();
}, 3000); // ← Changer ici (en millisecondes)
```

### Désactiver la transition auto

Si vous voulez que l'utilisateur clique sur "Continuer" :

**Dans `script-3d.js`, commenter les lignes 53-55 :**
```javascript
// animationTimeout = setTimeout(() => {
//     transitionToMainSite();
// }, 3000);
```

**Ajouter un bouton "Continuer" dans le HTML après ligne 91 :**
```html
<button id="continue-btn" class="reset-button" style="display: none;">
    Continuer vers le site
</button>
```

**Dans le JavaScript, ajouter :**
```javascript
document.getElementById('continue-btn').addEventListener('click', function() {
    transitionToMainSite();
});
```

---

## 🔧 Dépannage

### L'enveloppe n'a pas l'effet 3D

**Cause** : Perspective 3D non supportée par navigateur ancien

**Solution** :
- Tester dans Chrome, Firefox ou Safari récent
- Vérifier que `transform-style: preserve-3d` est bien appliqué

**Test** : Ouvrir console (F12) et taper :
```javascript
console.log(getComputedStyle(document.querySelector('.envelope-container')).transformStyle);
// Doit afficher : "preserve-3d"
```

### Le cachet de cire n'est pas brillant

**Cause** : Gradient radial non visible

**Solution** :
- Augmenter la taille du cachet
- Vérifier que `.wax-shine` est bien présent dans le HTML

**Dans `style-3d.css` ligne 273, modifier :**
```css
.wax-shine {
    opacity: 1; /* ← Augmenter si nécessaire */
}
```

### L'animation est saccadée

**Cause** : Performance GPU

**Solutions** :
1. Fermer les autres onglets
2. Vérifier que `will-change: transform` est appliqué
3. Désactiver extensions navigateur
4. Tester en navigation privée

**Optimisation dans `style-3d.css` :**
```css
.envelope,
.envelope-flap,
.invitation-card {
    will-change: transform, opacity;
    backface-visibility: hidden;
}
```

### Le faire-part ne sort pas de l'enveloppe

**Cause** : Z-index ou transform incorrect

**Vérifier dans `style-3d.css` ligne 362 :**
```css
@keyframes slideOutCard {
    0% {
        transform: translateY(-30%) translateZ(-5px) scale(0.9);
        opacity: 0;
    }
    100% {
        transform: translateY(-140%) translateZ(10px) scale(1);
        /* ← -140% fait sortir la carte vers le haut */
        opacity: 1;
    }
}
```

### La texture papier n'est pas visible

**Cause** : SVG filter non chargé

**Vérifier dans `index-3d.html` lignes 13-22** que le SVG est présent :
```html
<svg style="display: none;">
    <defs>
        <filter id="paper-texture">
            <!-- ... -->
        </filter>
    </defs>
</svg>
```

**Augmenter l'opacité dans `style-3d.css` ligne 126 :**
```css
.paper-texture-overlay {
    opacity: 0.8; /* ← Augmenter jusqu'à 1 */
}
```

---

## 📱 Test responsive

### Desktop (1920x1080)
- ✅ Enveloppe : 420x280px
- ✅ Cachet : 70x70px
- ✅ Parfait rendu 3D

### Tablet (768x1024)
- ✅ Enveloppe : 340x230px
- ✅ Cachet : 60x60px
- ✅ Conserve la perspective

### Mobile (375x667)
- ✅ Enveloppe : 300x200px
- ✅ Cachet : 50x50px
- ✅ Animation fluide

**Tester sur vrais appareils** :
1. Déployer sur GitHub Pages
2. Scanner QR code avec smartphone
3. Vérifier fluidité à 60fps

---

## ✅ Checklist finale

### Avant de déployer
- [ ] Image du faire-part ajoutée (ou contenu par défaut OK)
- [ ] Cachet de cire couleur validée
- [ ] Vitesse d'animation testée
- [ ] Transition auto activée/désactivée selon besoin
- [ ] Test sur Chrome desktop
- [ ] Test sur Safari iOS
- [ ] Cache vidé (Ctrl + Shift + R)

### Validation visuelle
- [ ] Texture papier visible sur enveloppe
- [ ] Cachet de cire brillant avec reflets
- [ ] Monogramme "L" bien gravé
- [ ] Ombres multi-couches visibles
- [ ] Pli du rabat réaliste
- [ ] Perspective 3D active (hover fonctionne)

### Validation animation
- [ ] Phase 1 : Rabat s'ouvre en 400ms
- [ ] Cachet suit le rabat
- [ ] Phase 2 : Faire-part sort avec effet élastique
- [ ] Phase 3 : Enveloppe s'efface, carte au centre
- [ ] Bouton reset apparaît après 1.2s
- [ ] Transition vers site après 3s

### Performance
- [ ] 60fps constant (vérifier dans DevTools)
- [ ] Pas de lag au hover
- [ ] Chargement < 2 secondes
- [ ] Fonctionne sur mobile

---

## 🎁 Améliorations possibles

### Ajouter un son d'ouverture
```javascript
const openSound = new Audio('envelope-open.mp3');
envelope.addEventListener('click', () => {
    openSound.play();
    openEnvelope();
});
```

### Particules dorées qui tombent
Ajouter canvas avec animation de paillettes dorées quand enveloppe s'ouvre.

### Version alternative : enveloppe qui tourne
Au lieu de s'ouvrir, l'enveloppe fait un flip 3D complet (rotateY: 360deg).

---

## 📞 Support

**Problème persiste ?**

1. Vérifier console (F12) pour erreurs JavaScript
2. Tester en navigation privée (sans extensions)
3. Comparer avec la version de base (index.html)
4. Vérifier que tous les fichiers sont bien uploadés sur GitHub

**L'enveloppe 3D photoréaliste est prête ! 🎨✨**

Profitez de cette animation premium digne d'une invitation de mariage haut de gamme, adaptée à la charte graphique de Léonie ! 🎂
