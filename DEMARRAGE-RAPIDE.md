# 🚀 DÉMARRAGE RAPIDE - 5 MINUTES

## Étape 1️⃣ : Créer un compte Cloudinary (2 min)

1. Aller sur https://cloudinary.com/
2. Cliquer sur "Sign Up for Free"
3. Créer un compte avec votre email
4. Confirmer l'email

## Étape 2️⃣ : Configurer Cloudinary (2 min)

Une fois connecté sur Cloudinary :

1. **Copier le Cloud Name** (en haut à gauche du Dashboard)
   - Exemple : `dx1a2b3c4`

2. **Créer un Upload Preset** :
   - Cliquer sur l'icône ⚙️ (Settings) en haut à droite
   - Aller dans **Upload** (menu de gauche)
   - Cliquer sur **Add upload preset**
   - Remplir :
     * Preset name : `bapteme-leonie`
     * Signing mode : **Unsigned** ⚠️ IMPORTANT
     * Folder : `bapteme-leonie-2026`
   - Cliquer sur **Save**

## Étape 3️⃣ : Modifier le code (30 secondes)

Ouvrir le fichier **script.js** et remplacer ligne 5 :

**AVANT :**
```javascript
cloudName: 'VOTRE_CLOUD_NAME',
```

**APRÈS :**
```javascript
cloudName: 'dx1a2b3c4',  // ← Remplacer par VOTRE Cloud Name
```

## Étape 4️⃣ : Tester localement (10 secondes)

Double-cliquer sur le fichier **index.html**

Le site s'ouvre dans votre navigateur ! ✅

Testez l'upload de photos (elles iront sur votre compte Cloudinary).

## Étape 5️⃣ : Déployer sur GitHub Pages (2 min)

### Si vous n'avez PAS de compte GitHub :

1. Créer un compte sur https://github.com/ (gratuit)
2. Créer un nouveau repository :
   - Nom : `bapteme-leonie`
   - Public ✅
3. Uploader les 3 fichiers : `index.html`, `style.css`, `script.js`
4. Aller dans **Settings** → **Pages**
5. Source : **main** branch
6. Cliquer **Save**
7. Attendre 2-3 minutes

Votre site est en ligne à :
```
https://VOTRE-USERNAME.github.io/bapteme-leonie/
```

### Si vous avez déjà un compte GitHub :

Utiliser GitHub Desktop ou la ligne de commande (voir README.md complet).

## Étape 6️⃣ : Créer le QR Code (1 min)

1. Copier l'URL de votre site
2. Aller sur https://www.qr-code-generator.com/
3. Coller l'URL
4. Télécharger le QR code en **haute qualité**
5. Imprimer sur un beau support

## ✅ C'EST FINI !

Votre site est prêt pour le baptême ! 🎉

---

## 🆘 Problème ?

### Les photos ne s'uploadent pas

➡️ Vérifier que le **Cloud Name** dans `script.js` est correct
➡️ Vérifier que le preset est bien en mode **Unsigned**

### Le site ne s'affiche pas sur GitHub

➡️ Attendre 5-10 minutes après le premier déploiement
➡️ Vérifier que GitHub Pages est activé dans Settings → Pages

### Autre problème

➡️ Consulter le **README.md** complet
➡️ Ouvrir la console du navigateur (F12) pour voir les erreurs

---

## 🎨 PERSONNALISATION RAPIDE

### Changer la date de l'événement

Fichier : `script.js` ligne 55
```javascript
const eventDate = new Date('2026-06-06T14:00:00').getTime();
//                           ↑ YYYY-MM-DD  ↑ HH:MM
```

### Changer le lieu

Fichier : `index.html` ligne 66
```html
<p class="event-location">📍 Salle polyvalente de Meillon</p>
```

### Modifier les questions du quiz

Fichier : `script.js` lignes 19-44

---

## 📸 RÉCUPÉRER LES PHOTOS APRÈS L'ÉVÉNEMENT

1. Se connecter sur https://cloudinary.com/
2. Aller dans **Media Library**
3. Ouvrir le dossier `bapteme-leonie-2026`
4. Sélectionner toutes les photos
5. Cliquer **Download** → **Download as ZIP**

---

**C'est tout ! Profitez bien de ce moment magique ! 🎂✨**
