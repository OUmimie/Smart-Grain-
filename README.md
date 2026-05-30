# Transformation du Sable en Verre — SmartGrain

Site web industriel moderne présentant le projet de transformation du sable en verre.

## Technologies

- React 19 + Vite 6
- Tailwind CSS 4
- Framer Motion
- React Router
- React Icons
- React Hot Toast

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173)

## Build production

```bash
npm run build
npm run preview
```

## Structure

```
public/           # Images locales (logo, hero, galerie…)
src/
├── components/   # Navbar, Hero, Timeline, Gallery, etc.
├── pages/        # HomePage
├── layouts/      # MainLayout
├── data/         # Données + chemins images (images.js)
├── hooks/        # useInView, useScrollPosition
└── styles/       # Tailwind + thème custom
```

## Images (`public/`)

| Fichier      | Usage                          |
|-------------|---------------------------------|
| `logo.jpeg` | Navbar, footer, loader, favicon |
| `imgm.jpeg` | Hero (fond)                     |
| `img.jpeg`  | À propos, processus, galerie    |
| `img2.jpeg` | Processus, galerie              |
| `img3.jpeg` | Parallaxe, processus, galerie   |
| `img4.jpeg` | Processus, galerie              |
| `img5.jpeg` | Processus, galerie              |
| `imge.jpeg` | Galerie                         |

Pour changer une image, modifiez `src/data/images.js`.

## Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Animations Framer Motion au scroll
- Compteurs animés
- Effet parallaxe
- Galerie avec lightbox et filtres
- Formulaire de contact avec validation
- Loader au chargement
- SEO optimisé (meta tags)
- Lazy loading des images
