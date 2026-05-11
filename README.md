# 🎂 Site du Baptême de Léonie - 6 juin 2026

Site web élégant et interactif pour célébrer le baptême et le premier anniversaire de Léonie.

## ✨ Fonctionnalités

- 🎭 **Animation d'enveloppe** qui s'ouvre au chargement
- 📸 **Upload de photos** via Cloudinary (gratuit jusqu'à 25 Go)
- 📖 **Livre d'or numérique** pour laisser des messages
- 🎯 **Quiz interactif** "Connaissez-vous Léonie ?"
- 🎉 **Confettis animés** lors des moments clés
- ⏱️ **Compte à rebours** jusqu'au jour J
- 🗺️ **Carte interactive** Google Maps
- 📱 **100% responsive** (mobile-first)

---

## 🚀 Déploiement rapide (5 minutes)

### Étape 1 : Créer un compte Cloudinary (GRATUIT)

1. Aller sur [cloudinary.com](https://cloudinary.com/)
2. Cliquer sur **"Sign Up for Free"**
3. Créer un compte (email + mot de passe)
4. Une fois connecté, noter ces informations du **Dashboard** :
   - `Cloud Name` (exemple : `dx1a2b3c4`)
   - Cliquer sur **Settings** → **Upload** → **Upload presets**
   - Cliquer sur **"Add upload preset"**
   - Nommer le preset : `bapteme-leonie`
   - Mode : **Unsigned**
   - Folder : `bapteme-leonie-2026`
   - Cliquer sur **Save**

### Étape 2 : Configurer le site

Ouvrir le fichier `script.js` et remplacer les valeurs suivantes (lignes 4-7) :

```javascript
const CLOUDINARY_CONFIG = {
    cloudName: 'VOTRE_CLOUD_NAME',        // ← Remplacer par votre Cloud Name
    uploadPreset: 'bapteme-leonie',       // ← Doit correspondre au preset créé
    folder: 'bapteme-leonie-2026',
    // ... reste du code
};
```

**Exemple :**
```javascript
const CLOUDINARY_CONFIG = {
    cloudName: 'dx1a2b3c4',              // ✅ Votre Cloud Name
    uploadPreset: 'bapteme-leonie',      // ✅ OK
    folder: 'bapteme-leonie-2026',
```

### Étape 3 : Déployer sur GitHub Pages (GRATUIT)

#### Option A : Via l'interface GitHub (plus simple)

1. Créer un compte GitHub sur [github.com](https://github.com/) (gratuit)
2. Créer un nouveau repository :
   - Nom : `bapteme-leonie`
   - Public
   - Ne pas initialiser avec README
3. Uploader les fichiers :
   - `index.html`
   - `style.css`
   - `script.js`
4. Aller dans **Settings** → **Pages**
5. Source : **Deploy from a branch**
6. Branch : **main** / **(root)**
7. Cliquer sur **Save**
8. Attendre 2-3 minutes
9. Votre site sera disponible à : `https://VOTRE-USERNAME.github.io/bapteme-leonie/`

#### Option B : Via Git (si vous êtes à l'aise avec la ligne de commande)

```bash
# Initialiser Git
git init
git add .
git commit -m "Site baptême Léonie"

# Créer le repo sur GitHub, puis :
git remote add origin https://github.com/VOTRE-USERNAME/bapteme-leonie.git
git branch -M main
git push -u origin main

# Activer GitHub Pages dans Settings → Pages
```

### Étape 4 : Générer le QR Code

1. Une fois le site déployé, copier l'URL complète
2. Aller sur [qr-code-generator.com](https://www.qr-code-generator.com/)
3. Coller l'URL du site
4. Télécharger le QR code en **haute résolution (300 dpi)**
5. Imprimer sur un joli support pour l'entrée de la salle

---

## 📧 Configuration des emails (OPTIONNEL)

Pour recevoir des notifications email à chaque upload de photo :

### Avec EmailJS (200 emails gratuits/mois)

1. Créer un compte sur [emailjs.com](https://www.emailjs.com/)
2. Créer un service email (Gmail, Outlook, etc.)
3. Créer un template avec ces variables :
   ```
   Nouvelles photos uploadées !
   
   Nombre de photos : {{photo_count}}
   Heure : {{upload_time}}
   
   Consultez votre dashboard Cloudinary pour les télécharger.
   ```
4. Noter les IDs :
   - `Service ID`
   - `Template ID`
   - `Public Key`

5. Dans `script.js`, remplacer lignes 13-17 :
```javascript
const EMAILJS_CONFIG = {
    serviceId: 'service_abc123',      // ← Votre Service ID
    templateId: 'template_xyz789',    // ← Votre Template ID
    publicKey: 'user_def456',         // ← Votre Public Key
    recipientEmail: 'maanon1307@gmail.com'
};
```

6. Décommenter les lignes 284-295 dans `script.js` (supprimer les `/*` et `*/`)

---

## 🎨 Personnalisation

### Modifier les textes

Tous les textes sont dans `index.html`. Cherchez et remplacez :

- **Message de bienvenue** : ligne 57
- **Infos pratiques** : lignes 193-220
- **Questions du quiz** : dans `script.js` lignes 19-44

### Ajouter une photo de Léonie

Remplacer le placeholder SVG (lignes 78-88 de `index.html`) par :

```html
<div class="hero-image reveal">
    <img src="photo-leonie.jpg" alt="Léonie" style="border-radius: 24px; box-shadow: var(--shadow-lg); max-width: 100%;">
</div>
```

Placer votre photo `photo-leonie.jpg` dans le même dossier que les autres fichiers.

### Modifier les couleurs

Les couleurs sont définies au début de `style.css` (lignes 4-11) :

```css
:root {
    --color-primary: #EFEEEC;    /* Fond principal */
    --color-secondary: #C3A2A5;  /* Vieux rose */
    --color-tertiary: #7C6755;   /* Marron */
    /* ... */
}
```

---

## 📸 Récupération des photos

### Option 1 : Dashboard Cloudinary (recommandé)

1. Se connecter sur [cloudinary.com](https://cloudinary.com/)
2. Aller dans **Media Library**
3. Dossier `bapteme-leonie-2026`
4. Sélectionner toutes les photos
5. Cliquer sur **Download** → **Download as ZIP**

### Option 2 : Téléchargement automatique

Créer un script Python pour tout télécharger automatiquement :

```python
# telecharger_photos.py
import cloudinary
import cloudinary.api

cloudinary.config(
    cloud_name = "VOTRE_CLOUD_NAME",
    api_key = "VOTRE_API_KEY",
    api_secret = "VOTRE_API_SECRET"
)

# Récupérer toutes les photos
result = cloudinary.api.resources(
    type = "upload",
    prefix = "bapteme-leonie-2026/",
    max_results = 500
)

# Télécharger chaque photo
for resource in result['resources']:
    url = resource['secure_url']
    # Code de téléchargement...
```

---

## 🛠️ Dépannage

### Les photos ne s'uploadent pas

1. Vérifier que `cloudName` et `uploadPreset` sont corrects dans `script.js`
2. Vérifier que le preset Cloudinary est en mode **Unsigned**
3. Ouvrir la console du navigateur (F12) pour voir les erreurs

### Le site ne s'affiche pas sur GitHub Pages

1. Attendre 5-10 minutes après le premier déploiement
2. Vérifier que les fichiers sont bien à la racine du repository
3. Vérifier que GitHub Pages est activé dans Settings

### L'animation d'enveloppe ne fonctionne pas

1. Vérifier que tous les fichiers sont bien liés dans `index.html`
2. Ouvrir la console (F12) pour voir les erreurs JavaScript
3. Tester dans un autre navigateur (Chrome recommandé)

### Les emails ne partent pas

1. EmailJS est optionnel, le site fonctionne sans
2. Vérifier les IDs EmailJS dans `script.js`
3. Vérifier que le code est bien décommenté (lignes 284-295)

---

## 📱 Test sur mobile

1. Déployer le site
2. Scanner le QR code avec votre smartphone
3. Tester l'upload d'une photo test
4. Vérifier la navigation et le scroll

---

## 💾 Sauvegarde et archivage

### Après l'événement

1. **Télécharger toutes les photos** depuis Cloudinary
2. **Sauvegarder les messages** du livre d'or (dans la console navigateur, taper `localStorage.getItem('guestbookMessages')`)
3. **Archiver le site** : garder une copie locale de tous les fichiers
4. **Désactiver l'upload** : supprimer le preset Cloudinary ou mettre le repo en privé

### Créer un souvenir permanent

Option : Créer un PDF/album photo avec :
- Toutes les photos uploadées
- Les messages du livre d'or
- Les résultats du quiz
- Statistiques (nombre de photos, participants, etc.)

---

## 🎁 Améliorations futures possibles

- [ ] Ajouter un diaporama automatique des photos
- [ ] Permettre de liker les photos
- [ ] Ajouter une playlist Spotify collaborative
- [ ] Créer une capsule temporelle (messages pour les 18 ans de Léonie)
- [ ] Ajouter un jeu "Devinez le poids/taille" de Léonie
- [ ] Intégrer un live tweet wall (si utilisation d'un hashtag)

---

## 📞 Support

En cas de problème, vous pouvez :
- Consulter la documentation Cloudinary : [cloudinary.com/documentation](https://cloudinary.com/documentation)
- Consulter la documentation GitHub Pages : [docs.github.com/pages](https://docs.github.com/pages)
- Me contacter : maanon1307@gmail.com

---

## 📜 Licence

Ce site est créé pour un usage personnel et familial. Vous pouvez le modifier et le réutiliser librement.

---

## 🙏 Crédits

- Polices : Google Fonts (Cormorant Garamond, Montserrat)
- Upload photos : Cloudinary
- Hébergement : GitHub Pages
- Design & développement : Créé avec ❤️ pour Léonie

---

**Bon baptême et joyeux anniversaire à Léonie ! 🎂✨**
