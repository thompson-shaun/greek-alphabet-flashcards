# Greek Flashcards (Static GitHub Pages Site)

A static, mobile-friendly flashcard site for the Greek alphabet.

## Features

- 24 Greek letter flashcards (uppercase + lowercase)
- English equivalent hints
- Visual pronunciation guides (IPA + spoken hint)
- One-by-one navigation with keyboard controls
- Local audio file per letter in `assets/audio/`
- Speech synthesis fallback if an audio file fails to load

## Run locally

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Generate audio assets

This repo includes `scripts/generate-audio.sh` for macOS:

```bash
./scripts/generate-audio.sh
```

It creates 24 files in `assets/audio/` named like `01-alpha.m4a`.
The script uses the Greek `Melina (el_GR)` voice for more native pronunciation.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that deploys on pushes to `main`.

1. Push this repo to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` (or run the workflow manually from `Actions`).

Your site will be deployed from the workflow artifact and served via GitHub Pages.
