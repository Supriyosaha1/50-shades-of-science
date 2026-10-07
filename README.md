# 50 Shades of Science website

An independent science communication website. The homepage is a continuous-scroll experience with real founder and event photography. The supporting pages provide more detail. It is ready for GitHub Pages or any static host; there is no build dependency.

## Preview

Run `python3 -m http.server 8765` in this directory, then open `http://localhost:8765/`.

## Edit

- `index.html` is the hand-edited continuous-scroll homepage. Do not generate over it.
- `assets/css/home.css` contains the homepage layout and visual system.
- `build_site.py` contains the eight supporting pages. Run `python3 build_site.py` after editing those pages.
- `assets/css/pages.css` extends the same visual system to the supporting pages.
- Earlier stylesheets remain for reference and are not loaded.
- `assets/js/site.js` handles the mobile menu and contact email form.
- `assets/media` contains compressed web versions of two local reels and a founder portrait. The source files remain in their original folders.

The site includes Home, Science, Videos, School Programmes, Future Scientists, CSR & Partnerships, About, Research, and Contact. The former single-page design remains in Git history and `index.backup.html` for reference.

## Deploy

Canonical links and the sitemap point to the existing GitHub Pages URL. The enquiry form opens the visitor's email application; a server-side form service can be added later if needed.
