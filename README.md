# flower-for-her

A single-page, no-dependency site: a line-art flower that draws itself and blooms, then a personal message fades in.

## 1. Personalize (2 min)

Open `index.html`, find this block near the top of the `<script>` tag:

```js
const CONFIG = {
  name: "Her Name",
  message: "Some things bloom slowly. Some things bloom all at once. You're both, and I'm grateful for every season of it."
};
```

Replace `name` and `message` with your own. That's the only edit needed.

## 2. Push to GitHub (5 min)

From inside this folder in VS Code's terminal:

```bash
git init
git add .
git commit -m "Initial commit: flower for her"
git branch -M main
git remote add origin https://github.com/<your-username>/flower-for-her.git
git push -u origin main
```

If the repo already exists on GitHub with content (e.g. a README you added on github.com), pull first:

```bash
git pull origin main --allow-unrelated-histories
```

## 3. Turn on GitHub Pages (2 min)

1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Wait ~1 minute, then refresh — GitHub will show your live URL:
   `https://<your-username>.github.io/flower-for-her/`

## 4. Send the link

That URL is what you send her. Test it yourself on your phone first.

---

**Notes**
- Fonts load from Google Fonts via CDN — works anywhere with internet, no build step.
- Respects `prefers-reduced-motion` for accessibility.
- Fully responsive down to small phone widths.
