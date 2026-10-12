# Last Wicket Cricket (React Native / Expo)

A one-wicket batting game: bat until you're out. The game itself is in `game/cricket.html`
(HTML canvas + JS). This React Native app wraps it in a full-screen WebView, keeps the screen
awake, and builds to an Android APK.

## Get a debug APK on your phone (GitHub Actions)

1. Create an empty repository on GitHub.
2. Push this folder to it (the hidden `.github` folder must be included):
   ```bash
   cd last-wicket-cricket-app
   git init
   git add .
   git commit -m "Last Wicket Cricket"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. Open the repo's **Actions** tab. The **Build Android APK** workflow starts on every push
   (about 10-15 minutes the first time). You can also run it by hand: **Run workflow** and
   pick `debug` or `release`.
4. When it finishes, open the run and download the **LastWicketCricket-debug-apk** artifact
   (a zip containing `LastWicketCricket-debug.apk`).
5. Copy the APK to your phone, open it, and allow "Install unknown apps" if asked.

Both build types are signed with the debug key and run standalone (no dev server needed).
`release` is the optimised build; `debug` is the debug build you asked for.

## Changing the game

Edit `game/cricket.html`, then regenerate the bundled copy and push:

```bash
npm run sync-game
git add . && git commit -m "Update game" && git push
```

## Run locally (optional)

```bash
npm install
npx expo run:android      # needs Android Studio / an emulator or a phone with USB debugging
```

## Project layout

- `App.js` - full-screen WebView, safe-area padding, keep-awake, auto-recovery if the WebView crashes
- `game/cricket.html` - the game (source of truth)
- `gameHtml.js` - generated from the HTML by `scripts/build-game.js`
- `.github/workflows/build-apk.yml` - builds the APK in the cloud
- `app.json` - app name, package id (`com.lastwicket.cricket`), icons, rotation
