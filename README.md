# Dr. Charge - Premium Website

Site vitrine premium pour Dr. Charge, développé avec Next.js 15, TypeScript, Tailwind CSS v4 et Framer Motion.

## 🚀 Démarrage Rapide

1.  **Installation des dépendances**
    ```bash
    npm install
    ```

2.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```

3.  Ouvrir [http://localhost:3000](http://localhost:3000).

## 🛠 Stack Technique

-   **Next.js 15** (App Router)
-   **TypeScript**
-   **Tailwind CSS v4** (Styling & Design System)
-   **Framer Motion** (Animations & Micro-interactions)
-   **Lucide React** (Icônes)
-   **i18n** (Support FR/EN avec détection automatique)

## 📂 Structure

-   `app/[lang]`: Pages et Layouts localisés.
-   `components`: Composants UI réutilisables (Header, Footer, Sections).
-   `lib`: Utilitaires (i18n, mapping images).
-   `dictionaries`: Fichiers de traduction JSON.
-   `public`: Images et vidéos (Mappées dans `lib/images.ts`).

## 🎨 Design & Assets

Les images sont automatiquement gérées via `lib/images.ts`.
Si vous ajoutez de nouvelles images dans `public`, mettez à jour ce fichier pour les utiliser.

## 🌍 Internationalisation

Le site supporte le Français (défaut) et l'Anglais.
La détection de la langue du navigateur est active via le Middleware.
Les dictionnaires se trouvent dans `dictionaries/{fr,en}.json`.
