# ✅ CHECKLIST COMPLÈTE - Site Baptême Léonie

## 📦 Fichiers livrés

- ✅ `index.html` - Page principale du site
- ✅ `style.css` - Styles avec charte graphique Léonie
- ✅ `script.js` - Toutes les fonctionnalités interactives
- ✅ `README.md` - Documentation complète
- ✅ `DEMARRAGE-RAPIDE.md` - Guide de démarrage en 5 minutes
- ✅ `.gitignore` - Configuration Git

## 🎨 Fonctionnalités incluses

### ✨ Animations & Design
- [x] Animation d'enveloppe qui s'ouvre au chargement
- [x] Confettis lors des moments clés
- [x] Animations au scroll (reveal)
- [x] Transitions fluides
- [x] Design responsive mobile-first
- [x] Charte graphique Léonie respectée (beige rosé, vieux rose, marron taupe)

### 📸 Upload Photos
- [x] Intégration Cloudinary (25 Go gratuit)
- [x] Drag & drop de photos
- [x] Upload multiple (jusqu'à 20 photos)
- [x] Compression automatique
- [x] Galerie en temps réel
- [x] Compteur de photos
- [x] Notifications email (optionnel)

### 📖 Livre d'or
- [x] Formulaire de messages
- [x] Nom optionnel ou anonyme
- [x] Affichage en temps réel
- [x] Sauvegarde locale (localStorage)
- [x] Animation des nouveaux messages

### 🎯 Quiz
- [x] 5 questions sur Léonie
- [x] Feedback visuel (correct/incorrect)
- [x] Score final
- [x] Possibilité de recommencer
- [x] Emojis selon le score

### ℹ️ Informations pratiques
- [x] Compte à rebours jusqu'au jour J
- [x] Détails de l'événement
- [x] Carte Google Maps interactive
- [x] Informations parking, tenue, contact

### 🎨 Navigation
- [x] Menu sticky
- [x] Navigation fluide entre sections
- [x] Indicateur de section active
- [x] Scroll indicator

## 🚀 AVANT DE DÉPLOYER

### Configuration obligatoire

1. **Cloudinary** (REQUIS pour l'upload photos)
   - [ ] Créer un compte sur cloudinary.com
   - [ ] Copier le `Cloud Name`
   - [ ] Créer un `Upload Preset` nommé `bapteme-leonie` en mode **Unsigned**
   - [ ] Remplacer dans `script.js` ligne 5 : `cloudName: 'VOTRE_CLOUD_NAME'`

### Configuration optionnelle

2. **EmailJS** (pour recevoir des notifications email)
   - [ ] Créer un compte sur emailjs.com
   - [ ] Configurer un service email
   - [ ] Créer un template
   - [ ] Remplacer les IDs dans `script.js` lignes 13-17
   - [ ] Décommenter les lignes 284-295 dans `script.js`

### Personnalisation

3. **Contenu**
   - [ ] Vérifier la date : 6 juin 2026 ✅ (déjà configuré)
   - [ ] Vérifier le lieu : Salle polyvalente de Meillon ✅ (déjà configuré)
   - [ ] Modifier les questions du quiz si souhaité (script.js lignes 19-44)
   - [ ] Ajouter une vraie photo de Léonie (optionnel)

## 📱 DÉPLOIEMENT

### GitHub Pages (recommandé - gratuit)

1. **Créer un repository GitHub**
   - [ ] Créer un compte sur github.com (si pas déjà fait)
   - [ ] Nouveau repository : `bapteme-leonie`
   - [ ] Public ✅
   - [ ] Uploader les fichiers : index.html, style.css, script.js

2. **Activer GitHub Pages**
   - [ ] Settings → Pages
   - [ ] Source : main branch
   - [ ] Save
   - [ ] Attendre 2-3 minutes

3. **Noter l'URL du site**
   - [ ] https://VOTRE-USERNAME.github.io/bapteme-leonie/

### Alternatives

- **Netlify** : Drag & drop du dossier (encore plus simple)
- **Vercel** : Import depuis GitHub
- **Cloudflare Pages** : Import depuis GitHub

## 🔲 QR CODE

1. **Générer le QR Code**
   - [ ] Copier l'URL complète du site
   - [ ] Aller sur qr-code-generator.com
   - [ ] Coller l'URL
   - [ ] Télécharger en haute résolution (300 dpi)
   - [ ] Format : PNG ou PDF

2. **Imprimer**
   - [ ] Support élégant (carton rigide, cadre)
   - [ ] Taille : au moins 10x10 cm
   - [ ] Ajouter un texte : "Scannez pour accéder au site"

## ✅ TESTS AVANT L'ÉVÉNEMENT

### Sur ordinateur
- [ ] Ouvrir le site dans Chrome
- [ ] Tester l'animation d'enveloppe
- [ ] Tester l'upload d'une photo test
- [ ] Vérifier que la photo apparaît dans Cloudinary
- [ ] Tester le livre d'or
- [ ] Faire le quiz complet
- [ ] Vérifier le compte à rebours
- [ ] Tester la navigation entre sections

### Sur mobile
- [ ] Scanner le QR code avec votre smartphone
- [ ] Vérifier l'affichage responsive
- [ ] Tester l'upload d'une photo depuis la galerie
- [ ] Tester l'upload avec l'appareil photo
- [ ] Vérifier les animations
- [ ] Tester le scroll
- [ ] Vérifier la carte Google Maps

### Avec vos proches
- [ ] Demander à 2-3 personnes de tester
- [ ] Recueillir les retours
- [ ] Corriger si nécessaire

## 📸 APRÈS L'ÉVÉNEMENT

### Récupération des photos
- [ ] Se connecter sur cloudinary.com
- [ ] Media Library → dossier `bapteme-leonie-2026`
- [ ] Sélectionner toutes les photos
- [ ] Download → Download as ZIP
- [ ] Sauvegarder sur disque dur + cloud

### Sauvegarde des messages
- [ ] Ouvrir le site
- [ ] Console navigateur (F12)
- [ ] Taper : `localStorage.getItem('guestbookMessages')`
- [ ] Copier le résultat
- [ ] Sauvegarder dans un fichier texte

### Archivage
- [ ] Faire une copie de tous les fichiers du site
- [ ] Créer un ZIP d'archive
- [ ] Désactiver le preset Cloudinary (ou supprimer)
- [ ] Garder le repository GitHub en privé ou public selon préférence

### Souvenirs
- [ ] Créer un album photo avec les meilleures photos
- [ ] Imprimer les messages du livre d'or
- [ ] Compiler les statistiques :
  - Nombre de photos uploadées
  - Nombre de messages
  - Nombre de visiteurs (via Google Analytics si installé)

## 🆘 SUPPORT & DÉPANNAGE

### Problèmes fréquents

**Les photos ne s'uploadent pas**
→ Vérifier cloudName et uploadPreset dans script.js
→ Vérifier que le preset est en mode "Unsigned"
→ Ouvrir la console (F12) pour voir les erreurs

**Le site ne s'affiche pas**
→ Attendre 5-10 minutes après déploiement
→ Vider le cache du navigateur (Ctrl+Shift+R)
→ Vérifier que GitHub Pages est activé

**L'animation d'enveloppe boucle**
→ Vider le cache du navigateur
→ Vérifier qu'il n'y a pas d'erreurs JavaScript (F12)

### Documentation complète
- README.md → Documentation détaillée
- DEMARRAGE-RAPIDE.md → Guide en 5 minutes
- Cloudinary : cloudinary.com/documentation
- GitHub Pages : docs.github.com/pages

## 📊 STATISTIQUES ESTIMÉES

Avec 50 invités actifs :
- **Photos attendues** : 300-500 photos
- **Stockage utilisé** : 2-4 Go sur les 25 Go gratuits ✅
- **Messages livre d'or** : 30-50 messages
- **Quiz complétés** : 20-40 participants

## 🎁 BONUS - Améliorations futures

Si vous voulez aller plus loin après l'événement :

- [ ] Créer un PDF souvenir avec toutes les photos + messages
- [ ] Ajouter Google Analytics pour voir les statistiques de visite
- [ ] Créer une version "mémoire" permanente du site
- [ ] Faire un time-lapse des photos uploadées
- [ ] Créer un diaporama automatique

## ✨ NOTES FINALES

**Temps de configuration total** : 5-10 minutes
**Coût total** : 0€
**Capacité** : ~5000 photos (25 Go Cloudinary)
**Validité** : Illimitée

Le site est prêt à l'emploi ! Il ne vous reste plus qu'à :
1. Configurer Cloudinary (2 min)
2. Déployer sur GitHub Pages (3 min)
3. Générer le QR code (1 min)

**Bon baptême et joyeux anniversaire à Léonie ! 🎂✨**

---

Date de création : Mai 2026
Pour toute question : maanon1307@gmail.com
