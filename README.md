# TekodeX Romantic Garden Wedding Mini-Website Template

A one-page wedding website: invitation cover, welcome, live countdown, schedule, photo gallery with lightbox, RSVP buttons and thank-you. Plain HTML, CSS and JavaScript. No build step, no frameworks, no API keys.

All names, dates and places in the files are fictional sample content.

## 1. Preview
Double-click `index.html` to open it in your browser. Press "Discover Our Wedding" to open the invitation. For best results, use a local server: in this folder run `python3 -m http.server 8000` and visit http://localhost:8000.

## 2. Files
| File | What it does |
|---|---|
| `index.html` | All the words and page structure |
| `style.css` | Colours, fonts, layout (colours and fonts are at the top) |
| `script.js` | Opening, countdown, lightbox, RSVP. Settings are in `CONFIG` at the top |
| `USER_GUIDE.pdf` | Step-by-step guide for beginners |
| `assets/` | Sample placeholder images (SVG). These are NOT photographs |

## 3. Customise
Use your editor's Find and Replace (Ctrl/Cmd + H) across `index.html`:
- **Names:** `Charlotte Elizabeth Bennett`, `Alexander James Whitmore`, `Charlotte`, `Alexander`, `C <span>&amp;</span> A` (header initials). The page `<title>` and description are in the `<head>`.
- **Date:** replace `Saturday 19 June 2027` (appears twice) and `19 June 2027`. Then set `weddingDate` in `script.js`, for example `'2028-05-06T15:00:00+01:00'`. The part after the time is the venue's UTC offset (`+01:00` in UK summer, `+00:00` in UK winter, `-04:00` New York summer). The countdown uses this, so it is correct for every visitor's time zone.
- **Venue:** replace `The Willowmere Estate`, `Cotswolds`, `The Garden Pavilion`, `The Rose Garden`.
- **Schedule and dress code:** edit the four blocks inside `<div class="sched">`. Copy a block to add another.
- **RSVP deadline:** replace `19 May 2027`.
- **Photos:** see section 4.
- **Colours:** edit the six `--` variables at the top of `style.css`.
- **Fonts:** the Google Fonts `<link>` in `index.html` loads Pinyon Script (names), Bodoni Moda (headings) and Jost (text). To change, pick new families at fonts.google.com, replace the link, and update `--script`, `--serif` and `--sans` in `style.css`. For GDPR-sensitive sites, download the fonts and host them yourself.

## 4. Photos
The files in `assets/` are drawn placeholders so the template has no copyright issues. Replace them with your own photographs:
1. Resize photos to about 1600 px on the long side and save as JPG (under 300 KB each is ideal; use squoosh.app).
2. Copy them into `assets/`.
3. In `index.html`, change each `src` and `data-full` (for the gallery) to the new file name, and rewrite the `alt` text to describe the photo, for example `alt="Charlotte and Alexander laughing on the lawn"`.
4. Gallery: keep 3 to 6 items. Add or remove `<li>` blocks; the grid adapts.

Only use photos you own or are licensed to use online.

## 5. RSVP
Guests reply by tapping a button that opens **WhatsApp**, their **email app** or their **phone app**. There is no form and no server, so nothing is stored by the website. Replies arrive in your own WhatsApp, inbox or phone, and you keep the guest list yourself (a notes app or spreadsheet works well).

Edit the `rsvp` block at the top of `script.js`:
```
rsvp: {
  names: 'Charlotte and Alexander',
  whatsapp: '+44 7700 900123',
  email: 'rsvp@example.com',
  phone: '+44 7700 900123',
  emailSubject: 'RSVP: wedding on 19 June 2027'
}
```
- Include the country code on phone and WhatsApp numbers. Spaces and dashes are fine.
- Leave an option as `''` (empty quotes) to hide its button. You can use just one.
- The WhatsApp and email buttons open a pre-written message with prompts for name, attendance, number of guests and dietary needs. Edit the wording in the `msg` line if you like.
- The sample number and email are fictional. A notice appears on the page while a sample value is still in use, and disappears once you replace it. Always tap each button on your phone to check it opens correctly before sharing the link.

Honest limits: guests must press send themselves, replies are not collected in one place, and the page cannot tell you who has replied. If you want an automatic guest list, connect a separate form service of your own.

## 6. Publish
You need hosting and, optionally, a domain. Neither is included. Free options for static sites include Netlify Drop (drag the folder in), GitHub Pages and Cloudflare Pages. Upload the whole folder with `index.html` at the top level. To use your own domain, buy one from a registrar and follow your host's "custom domain" guide.

## 7. Before you share the link
- Open on a phone and a desktop browser. Tab through the page: every button and field should show a focus outline.
- Tap the WhatsApp, email and phone buttons on your phone to check they work.
- Check the countdown against your date and time.
- Replace every `Sample text:` note in the schedule.

## 8. Accessibility and performance
Semantic headings, keyboard-operable lightbox (Esc or Close), visible focus, alt text, and reduced-motion support are built in. The page loads one stylesheet, one script and three web fonts, with lazy-loaded gallery images.

## 9. Limitations
No guest list management, no password protection, no multi-language switch, no map embed (add your own link in the Venue block). Requires a modern browser (the lightbox uses the HTML `<dialog>` element).
