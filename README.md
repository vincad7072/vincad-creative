# Vincad Creative GitHub Pages Website

This is a static HTML website package designed to upload directly to GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root. `index.html` must remain at the top level.
3. In GitHub open **Settings**, then **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. GitHub will show the public Pages URL once deployment has finished.

## Important edits before launch

Open `index.html` in any text editor and update the contact section with your real email and phone number.

The three Selected Work images are intentional placeholders. Replace these files with approved real work while keeping the same filenames if you want the easiest update:

* `assets/images/project-game-gear.svg`
* `assets/images/project-nz-tack.svg`
* `assets/images/project-website.svg`

You can replace an SVG with a JPG, PNG or WebP file, but if the file extension changes you must also update the image path in `index.html`.

## Main editable files

* `index.html` controls the text, section order, links and images.
* `assets/css/style.css` controls colours, typography, spacing and layout.
* `assets/js/main.js` controls the mobile menu, current copyright year and subtle reveal animation.

## Brand colours

The easiest colour edits are at the top of `assets/css/style.css` under `:root`.

Current core colours:

* Vincad orange: `#fc5b05`
* Charcoal: `#1b1b1a`
* Warm white: `#fbf8f4`
* Smoky navy: `#263946`
* Blue grey: `#8798a2`

## Replace Lisa's temporary image

Replace `assets/images/lisa-temp.webp` with a new WebP image using the same filename. The site will update automatically.

## Replace the hero image

Replace `assets/images/vincad-hero.webp` with a new WebP image using the same filename.

## Custom domain later

When you are ready to point `vincad.co.nz` to GitHub Pages, add the custom domain in GitHub Pages settings first and then follow GitHub's DNS instructions. Do not add a CNAME file until the domain is ready to be connected.

## Latest hero update
The homepage hero now uses `hero-conversation.webp`, based on the supplied Vincad creative artwork. The headline and button remain live HTML in `index.html`, so they are editable and responsive. The header uses the supplied fantail version of the Vincad logo.
