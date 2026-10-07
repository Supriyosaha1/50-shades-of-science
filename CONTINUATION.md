# Continuation notes

## Completed

- Built a light, responsive nine-page site, then redesigned its typography, layout, and media treatment with DM Sans, IBM Plex Mono, IceCube photography, and a blue-green palette.
- Preserved the original project and media. This copy is on branch `redesign/light-editorial`.
- Added web-compressed versions of existing IceCube and optogenetics reels, both with audio and poster frames.
- Added a detailed booking form that prepares an email to `50shadesofscience@gmail.com`; no data is stored by the site.
- Added page-specific titles/descriptions, social metadata, semantic structure, skip link, focus states, and organisation structured data.
- Labeled the CSR reach figures as an illustrative pilot, and identified 50 Shades of Science as independent from TIFR.

## Before publication

- Canonical URLs and the sitemap use the existing GitHub Pages address; update them if the domain changes.
- Confirm whether the founder portrait and event photographs are approved for public use.
- Review the final wording and reel audio for scientific accuracy and brand voice.
- If desired, connect a form endpoint so enquiries can be sent without a local email application.
- Push or merge this branch into the GitHub Pages deployment branch after review.

## Limits

- A desktop Chrome preview of the homepage was captured and checked. The local browser automation bridge did not reliably support further navigation during verification, so mobile layout and the form were checked from source and local asset validation rather than a full interactive browser run.
- The old `index.backup.html` is an archive of the previous layout and contains obsolete asset paths. It is not part of the navigation.
