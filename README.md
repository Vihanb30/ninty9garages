# Ninty9 Garages: static site

Two pages, `index.html` (home) and `shop.html` (store), sharing `assets/css/site.css`. Plain HTML, CSS and vanilla JS, with Three.js r128 loaded from cdnjs for the hero terrain. No build step.

## Add real photos
Gallery photos live in `assets/gallery/`. To swap or add one, drop a JPG (about 1600px wide, under 300 KB) there and point a tile’s `<img src>` at it.
Any tile without a photo keeps its styled gradient placeholder.
The About photo is `assets/about.jpg`.

## Shop & prices
All products live in `assets/js/products.js`, one line per product:
`{"id":…, "name":"Short name", "full":"Full name", "brand":"GFX", "cat":"Floor & Trunk Mats", "price":3600, "was":4500, "img":"file.jpg"}`
- Change `price` to update a price. `was` is the struck-through original price and is optional. `max` turns the price into a range.
- Product photos go in `assets/products/`, named as in `img`. If a photo is missing, the card shows a styled placeholder.
- There's no checkout. Visitors build an enquiry list, which is saved in their browser, and send it to WhatsApp with an estimated total.

## Services
The service cards and their pop-ups on the home page read from `assets/js/services.js`: overview, what's included, notes and the link to the matching shop category. Edit the text there. Every service and product has its own shareable link, e.g. `index.html#service-lighting` or `shop.html#product-2787`.

## Quote form
- **Netlify:** works out of the box (Netlify Forms). Submissions appear under Site → Forms.
- **Anywhere else:** create a free form at formspree.io and paste its endpoint into `CONFIG.formspree` in the script.
- **No backend:** the form falls back to opening WhatsApp with the enquiry pre-filled. There's also a "Send via WhatsApp" button.

## Deploy
- Netlify / Cloudflare Pages: drag and drop this folder, or connect a repo. Leave the build command empty and set the publish directory to `/`.
- Vercel: `npx vercel` in this folder.
- GitHub Pages: push to a repo and enable Pages on the main branch.

Local preview: `python3 -m http.server 8099`

## Notes
- `404.html` links use `/ninty9garages/` paths for GitHub Pages. If you move to a custom domain, change them to `/`.
- Studio details (address, hours, phone) appear in `index.html`, `shop.html` and `assets/js/services.js`.
