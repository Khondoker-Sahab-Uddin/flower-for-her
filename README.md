# flower-for-her (v3 — garden, story, bouquet, envelope, letter, proposal)

A four-scene experience:

1. **Garden** — a night sky with drifting stars and colorful bokeh, real flowers (blossom, rose, daisy) growing and blooming with staggered, elastic animation. Subtle parallax follows your cursor/finger. Tap anywhere to continue.
2. **Bouquet & envelope** — the flowers arrange into a bouquet, an envelope with a wax seal rises in front of it. Tap to open.
3. **Letter** — your personal message.
4. **Proposal** — "Yes" is fixed and gold. "No" is restless the whole time: it has a wider reaction radius than before, it repositions itself even without being chased, and it has a constant small idle wobble so it never reads as just sitting there. It also reacts to touch drags, not just mouse movement.

A small music note button (bottom-right) toggles background audio, if you add a track.

## 1. Personalize (5–10 min)

Open `index.html`, find the `CONFIG` block near the top of the first `<script>` tag, and edit:

```js
const CONFIG = {
  name: "Her Name",
  letter: "...",
  question: "Will you be mine, forever?",
  yesResponse: "Forever it is. \u2661",
  musicFile: "",          // see below
  musicCredit: "Her — JVKE"
};
```

- `letter` is your personal message — write it in your own words.

### About the song

I can't embed the actual lyrics of "Her" by JVKE — that's copyrighted text and I'm not able to reproduce it, even a line of it. But you can absolutely play the real song as background audio:

1. Buy/export an MP3 of the track you own (e.g. from a service that lets you download your purchased music).
2. Put the file in this same folder, e.g. `song.mp3`.
3. Set `musicFile: "song.mp3"` in the config above.
4. The note button will toggle it, and it'll also auto-start when she taps "Yes," with the credit line `Her — JVKE` shown underneath (that's just the title and artist name, which is fine to display).

If you'd rather not deal with audio licensing at all, just leave `musicFile: ""` and the music button stays hidden — everything else works the same.

## 2. Preview it

Open `index.html` directly in a browser, or use VS Code's Live Server extension. Click/tap through all four scenes once. On the proposal, try to catch "no" a few times — on both a mouse and an actual touchscreen, since touch behaves slightly differently.

## 3. Push to GitHub

Since `flower-for-her` is already live, replace your existing `index.html` (and add `song.mp3` if you're using one) then:

```bash
git add .
git commit -m "v3: garden, bouquet, envelope, letter, restless proposal"
git push
```

Your existing GitHub Pages link updates automatically:
`https://khondoker-sahab-uddin.github.io/flower-for-her/`

## 4. Test on your phone, then send

Open the live link on your own phone first — check the flowers bloom smoothly, the envelope opens, and "no" is properly uncatchable — before sending it to her.

---

**If you want to keep tweaking:** the flower shapes, colors, and timing are all defined in the `flowerMarkup()` function and the CSS custom properties (`--gold`, `--sky-top`, etc.) near the top of the `<style>` block — tell me what you'd like different and I can adjust it directly.
