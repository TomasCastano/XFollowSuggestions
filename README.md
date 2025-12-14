# X Follow Suggestions (Clon)

Clon visual de la sección "A quién seguir" de X/Twitter, con soporte de temas (claro/oscuro/sistema) y un modal de confirmación para dejar de seguir. Construido con React + Vite y estilado con Tailwind CSS v4.

- Demo: https://x-follow-suggestions-clon.vercel.app/
- Repositorio: https://github.com/TomasCastano/XFollowSuggestions

## Características
- Lista de usuarios sugeridos con estado de seguimiento.
- Botón contextual que cambia entre Seguir / Siguiendo / Dejar de seguir (al hover) con transición de estilos.
- Modal de confirmación para dejar de seguir, replicando la UX de X.
- Selector de tema (claro, oscuro, sistema) con persistencia en `localStorage`.
- Estilos con Tailwind CSS v4 y variantes `dark` aplicadas a `:root`.
- Componentización simple y limpia.

## Stack y dependencias
- React 19 con Vite 6.
- Tailwind CSS 4 con `@tailwindcss/vite`.
- Headless UI (`@headlessui/react`) para el `Listbox` del selector de tema.
- Material UI Icons (`@mui/icons-material`) para íconos (GitHub, tema, etc.).

Revisa `package.json` para versiones exactas.

## Estructura del proyecto
```
XFollowSuggestion/
├─ index.html
├─ vite.config.js
├─ package.json
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ context/
   │  └─ ThemeContext.jsx
   ├─ Components/
   │  ├─ FollowCard/FollowCard.jsx
   │  ├─ GithubButton/GithubButton.jsx
   │  ├─ MainButton/MainButton.jsx
   │  ├─ ThemeSwitcher/ThemeSwitcher.jsx
   │  └─ UnfollowModal/UnfollowModal.jsx
   ├─ data/
   │  └─ userList.jsx
   └─ assets/css/
      ├─ index.css
      └─ App.css
```

## Componentes principales
- `FollowCard`: Muestra avatar, nombre y usuario (vía `unavatar.io`) y gestiona el botón de Seguir/Siguiendo/Dejar de seguir en hover.
- `UnfollowModal`: Modal de confirmación para dejar de seguir con acciones Aceptar/Cancelar.
- `ThemeSwitcher`: Selector de tema con `Listbox` (Headless UI) y persistencia de preferencia.
- `ThemeContext`: Proveedor de tema con lógica para `light`/`dark`/`system`, sincroniza la clase en `document.documentElement`.
- `GithubButton`: Enlace al repositorio.

## Scripts
- `npm run dev`: Inicia el entorno de desarrollo con Vite.
- `npm run build`: Construye la aplicación.
- `npm run preview`: Sirve la build para previsualización local.
- `npm run lint`: Ejecuta ESLint.

## Requisitos
- Node.js 18+ recomendado (para Vite 6 y dependencias modernas).

## Instalación y uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/TomasCastano/XFollowSuggestions.git
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia en desarrollo:
   ```bash
   npm run dev
   ```
4. Abre http://localhost:5173 (o el puerto mostrado) en tu navegador.

## Notas de implementación
- Tailwind v4 se carga desde `src/assets/css/index.css` con `@import "tailwindcss"` y se define la variante `dark` mediante `@custom-variant`.
- La preferencia de tema se guarda en `localStorage` bajo la clave `theme`.
- Los datos de ejemplo se encuentran en `src/data/userList.jsx`.
- Metadatos de SEO y Open Graph se definen en `index.html`.

## Despliegue
- El proyecto está listo para desplegarse en Vercel, Netlify u otros hostings estáticos.
- La demo pública está en Vercel: https://x-follow-suggestions-clon.vercel.app/

## Contribución
Si tienes ideas para mejorar la aplicación, ¡no dudes en hacer un fork y enviar tu pull request!

---

Hecho con ❤️ por [Tomás Castaño](https://www.linkedin.com/in/tomascastanochica/)
