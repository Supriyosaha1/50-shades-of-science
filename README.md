# 50 Shades of Science website

An independent, static multipage website for 50 Shades of Science. The current design uses a light background, contemporary typography, real science imagery, and event photography. It is ready for GitHub Pages or any static host; there is no build dependency.

## Preview

Run `python3 -m http.server 8765` in this directory, then open `http://localhost:8765/`.

## Edit

- `build_site.py` contains page copy and shared page structure. Run `python3 build_site.py` after editing it.
- `assets/css/site-v2.css` contains the current layout and theme. The older stylesheet remains for reference.
- `assets/js/site.js` handles the mobile menu and contact email form.
- `assets/media` contains compressed web versions of two local reels and a founder portrait. The source files remain in their original folders.

The site includes Home, Science, Videos, School Programmes, Future Scientists, CSR & Partnerships, About, Research, and Contact. The former single-page design remains in Git history and `index.backup.html` for reference.

## Deploy

This repository was copied from the existing GitHub Pages source. Review the redesign branch, merge it into the deployment branch, and push to the repository when ready. Canonical links and the sitemap point to the existing GitHub Pages URL. The enquiry form opens the visitor's email application; a server-side form service can be added later if needed.
