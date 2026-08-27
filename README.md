# 50 Shades of Science

A plain HTML/CSS/JavaScript science communication website with a modular Three.js atmosphere.

## Structure

- `index.html`: semantic page content and asset references.
- `css/`: reset, design tokens, layout, components, sections, motion, and responsive rules.
- `js/main.js`: application entry point.
- `js/three/`: scene, procedural object, lights, particles, pointer input, and resize behavior.
- `js/animations/`: scroll reveal and desktop cursor.
- `js/components/`: navigation, topics, modal, and booking form.
- `assets/images/`: outreach, merchandise, and public-talk photography.
- `assets/logos/`: brand logo.
- `assets/models/` and `assets/textures/`: reserved documentation for future assets.

## Run locally

Use a local HTTP server because ES modules can be blocked or behave differently when opened with `file://`:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Maintenance

- Change colors, fonts, spacing, easing, and z-index values in `css/variables.css`.
- Edit page copy and section structure in `index.html`.
- Replace photography in `assets/images/photos/` while keeping the referenced filenames, or update the paths in `index.html`.
- Tune the Three.js object and scene in `js/three/objects.js` and `js/three/scene.js`.
- Tune lights in `js/three/lights.js` and particle density in `js/three/particles.js`.
- Tune scroll damping and rotation in `js/three/scene.js`; the `.075` lerp factor controls responsiveness.
- Disable the custom cursor by removing `initCursor()` from `js/main.js`. It is already disabled for coarse pointers and reduced motion.
- The booking form intentionally opens a `mailto:` link. It does not claim to send data to a backend.

## Static deployment

GitHub Pages: push the repository, enable Pages in the repository settings, and select the branch containing `index.html`.

Netlify: drag the project folder into Netlify Drop or connect the repository. No build command is required.

Vercel: import the repository, choose the project root, leave the build command empty, and deploy as a static site.
