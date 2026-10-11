# Devi Prasad — personal profile site

Plain HTML, CSS and a little JavaScript. No build step, no frameworks.

```
index.html      content (every section is commented)
styles.css      design (colors and fonts are CSS variables at the top)
script.js       menu, scroll animation, contact form
assets/         photos, resume, favicon, social-preview image
```

## Fill in the placeholders

Search the files for these and replace them:

| Search for | Where | What to do |
|---|---|---|
| `YOUR-USERNAME` | index.html (3 places) | your GitHub username |
| `YOUR-SITE-URL` | index.html `<head>` | your live site URL (needed for link previews) |
| `[ADD MEASURABLE IMPACT` / `[ADD METRIC` | Projects | real numbers from your work, or delete the line |
| `[PERSONAL PROJECT]`, `[YOUR PROJECT NAME]` | Projects, card 03 | your own project, or delete the whole card |

Placeholders show with a dashed underline on the page so they are hard to miss.

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
5. Put that URL into the `YOUR-SITE-URL` placeholders in `index.html` and commit.

Other free options: Netlify or Cloudflare Pages (drag the folder in), or Vercel.

## Contact form

The form opens the visitor's email app with the message filled in, because a static site has no server. If you want messages delivered without an email app, create a free form on Formspree or Web3Forms, then set the form's `action` to the URL they give you and remove the `submit` handler from the bottom of `script.js`.

## Notes

- Public sites are indexed and scraped. Your phone number is shown because you asked for it; remove the Phone row in the Contact section if you change your mind.
- Client names are replaced with generic descriptors (Banking client, Healthcare client). Only add names if your employer allows it.
- The resume is a `.docx`. A PDF renders more consistently on phones; if you export one, change the file name in the hero button.
