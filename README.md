# Devi Prasad — personal profile site

Plain HTML, CSS and a little JavaScript. No build step, no frameworks.

```
index.html      content (every section is commented)
styles.css      design (colors and fonts are CSS variables at the top)
script.js       menu, scroll animation, contact form
assets/         photos, resume, favicon, social-preview image
```

## Keep your profile accurate

The portfolio includes your QA Automation Engineer positioning, selected enterprise testing work, and a personal portfolio project. Before publishing:

- Confirm the canonical URL and social-preview URLs in `index.html` match the deployed address.
- Add quantified outcomes only when you can verify the numbers; do not estimate time saved, defect reduction, or coverage.
- Review project descriptions for employer confidentiality and update the generic client labels if needed.
- Keep the resume file and its download link in sync.

## Edit content later

- **Text:** open `index.html`; each section starts with a banner comment saying what to edit.
- **Skills:** add or remove `<li>` items in the chip lists.
- **Colors / fonts:** change the variables in `:root` at the top of `styles.css`.
- **Resume:** replace `assets/Devi_Prasad_QA_Automation_Resume.docx` (keep the file name, or update the link in the hero).
- **Photo:** replace `assets/hero.jpg/.webp` and `assets/portrait.jpg/.webp` (square ~1100px and 2:3 ~720×1080).

## Host on GitHub Pages (free)

1. Create a GitHub repository. For a root address, name it `<your-username>.github.io`.
2. Upload everything in this folder so `index.html` is at the top level of the repo.
3. In the repo go to **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/`.
5. Update the canonical, Open Graph URL and image values in `index.html` if your deployed URL differs from the current GitHub Pages address.

Other free options: Netlify or Cloudflare Pages (drag the folder in), or Vercel.

## Contact form

The form opens the visitor's email app with the message filled in, because a static site has no server. If you want messages delivered without an email app, create a free form on Formspree or Web3Forms, then set the form's `action` to the URL they give you and remove the `submit` handler from the bottom of `script.js`.

## Notes

- Public sites are indexed and scraped. Your phone number is shown because you asked for it; remove the Phone row in the Contact section if you change your mind.
- Client names are replaced with generic descriptors (Banking client, Healthcare client). Only add names if your employer allows it.
- The resume is a `.docx`. A PDF renders more consistently on phones; if you export one, change the file name in the hero button.
