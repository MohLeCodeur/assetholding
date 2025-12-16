# Asset Holding - Client Area & Admin Dashboard

## 📁 Structure des fichiers

```
assetholding/
├── index.html (page principale - lien Client Area ajouté)
├── auth.js (système d'authentification)
├── admin/
│   └── index.html (dashboard admin pour Supabase)
└── account/
    ├── README.md (cette documentation)
    ├── index.html (redirection automatique vers login)
    ├── login/ (page de connexion + menu dashboard)
    ├── dashboard/ (vérification OTP)
    ├── portfolio/ (vérification OTP)
    ├── reports/ (vérification OTP)
    ├── kyc/ (vérification KYC avec Supabase)
    ├── support/ (vérification OTP)
    └── password-reset/ (réinitialisation mot de passe)
```

## 🔐 Identifiants de connexion (DEMO)

**Email:** `client@assetholding.com`  
**Mot de passe:** `Demo2024!`

## 🎨 Style

Toutes les pages utilisent le **style Asset Holding** :
- ✨ Couleurs dorées (#f5c76a) et fond sombre (#050816)
- 🌟 Effets glassmorphism et gradients radiaux
- 📱 Design responsive mobile-first
- 🎯 Animations et transitions fluides

## 📄 Pages créées

### 1. **Login** (`account/login/index.html`)
- Formulaire de connexion avec validation
- Menu dashboard après connexion réussie
- Liens vers toutes les sections du compte
- Bouton de déconnexion
- **Identique à Beta Concept** avec style Asset Holding

### 2. **Dashboard** (`account/dashboard/index.html`)
- Vérification OTP à 6 chiffres
- Options SMS ou Email
- Interface de saisie automatique
- **Identique à Beta Concept** avec style Asset Holding

### 3. **Portfolio** (`account/portfolio/index.html`)
- Vérification OTP pour accès portfolio
- **Identique à Beta Concept** avec style Asset Holding

### 4. **Reports** (`account/reports/index.html`)
- Vérification OTP pour accès rapports
- **Identique à Beta Concept** avec style Asset Holding

### 5. **KYC** (`account/kyc/index.html`)
- Formulaire de soumission crypto address/IBAN
- **Intégration Supabase** pour stockage
- Section CertiK Partnership
- Bouton "Paste" pour coller depuis presse-papiers
- **Identique à Beta Concept** avec style Asset Holding

### 6. **Support** (`account/support/index.html`)
- Vérification OTP pour messagerie sécurisée
- **Identique à Beta Concept** avec style Asset Holding

### 7. **Password Reset** (`account/password-reset/index.html`)
- Formulaire de réinitialisation par email
- Confirmation et redirection automatique
- **Identique à Beta Concept** avec style Asset Holding

### 8. **Admin Dashboard** (`admin/index.html`)
- 📊 Statistiques en temps réel (Total, Aujourd'hui, Cette semaine)
- 📋 Table des soumissions KYC depuis Supabase
- 🔄 Rafraîchissement automatique toutes les 30 secondes
- 🗑️ Suppression individuelle ou en masse
- 🎨 Style Asset Holding

## 🔗 Configuration Supabase

Les pages KYC et Admin utilisent la configuration Supabase de Beta Concept :
- **Fichier config:** `clipboard-supabase/config.js`
- **Table:** `clipboard_items`
- **Champs:** `id`, `content`, `content_type`, `created_at`

## 🚀 Accès

### Client Area
- **Page principale:** `assetholding/index.html` → Bouton "Client Area" dans le header
- **Connexion directe:** `assetholding/account/login/index.html`

### Admin Dashboard
- **Accès direct:** `assetholding/admin/index.html`
- Aucune authentification requise (à sécuriser en production)

## 📝 Fonctionnalités

### Authentification
- Système localStorage (démo uniquement)
- Session de 24 heures
- Vérification automatique de l'expiration

### KYC avec Supabase
1. L'utilisateur colle son adresse crypto ou IBAN
2. Les données sont validées visuellement
3. Soumission enregistrée dans Supabase
4. Confirmation affichée à l'utilisateur

### Admin Dashboard
1. Affiche toutes les soumissions KYC
2. Statistiques en temps réel
3. Possibilité de supprimer des entrées
4. Auto-refresh toutes les 30 secondes

## ⚙️ Différences avec Beta Concept

### Similitudes (100%)
- ✅ Structure identique des dossiers
- ✅ Même fonctionnalité pour toutes les pages
- ✅ Intégration Supabase identique
- ✅ Pages OTP identiques
- ✅ Page KYC avec CertiK identique

### Différences (Style uniquement)
- 🎨 Couleurs : Or/Doré au lieu de Rouge
- 🎨 Fond : Dégradés bleu/or au lieu de motif rouge
- 🎨 Boutons : Gradient doré au lieu de rouge
- 🎨 Accents : #f5c76a au lieu de #8f2829

## 🔧 Notes techniques

- **Pas de backend requis** (demo)
- **Compatible tous navigateurs modernes**
- **Responsive design** (mobile-first)
- **Supabase** pour stockage des données KYC
- **LocalStorage** pour authentification (demo)

## 📊 Page Admin - Fonctionnalités

### Statistiques
- **Total Submissions:** Nombre total d'entrées
- **Today:** Soumissions d'aujourd'hui
- **This Week:** Soumissions des 7 derniers jours

### Actions
- **Refresh Data:** Recharger manuellement
- **Delete All:** Supprimer toutes les entrées (avec confirmation)
- **Delete (par ligne):** Supprimer une entrée spécifique

### Auto-refresh
- Actualisation automatique toutes les 30 secondes
- Timestamp de dernière mise à jour affiché

## 🎯 Prochaines étapes (Production)

1. **Sécurité Admin:**
   - Ajouter authentification pour `/admin`
   - Utiliser Supabase RLS (Row Level Security)

2. **Backend:**
   - Remplacer localStorage par vraie API
   - Implémenter vrai système OTP
   - Ajouter envoi d'emails

3. **KYC:**
   - Validation des formats crypto/IBAN
   - Upload de fichiers (documents)
   - Workflow d'approbation

## 📞 Support

Pour toute question sur l'implémentation, consultez :
- `auth.js` pour le système d'authentification
- `clipboard-supabase/config.js` pour la configuration Supabase
- Les fichiers HTML individuels pour chaque page
