# InstaCalm

An independent Instagram-focused alternative inspired by SocialLite's publicly documented distraction controls. Static, installable web app plus a Manifest V3 Chrome/Edge extension. No backend, tracking service, Instagram credentials, or paid dependencies.

## Live app
https://ebnramadan.github.io/instacalm/

## Use on real Instagram
1. Download `instacalm-extension.zip` from the live app and unzip it.
2. Open `chrome://extensions` or `edge://extensions`, enable Developer mode, and Load unpacked. Select the extracted folder containing `manifest.json`.
3. Refresh the live app. It should show “Extension connected”. Choose your settings, start a session, and log in **on instagram.com**.

The extension matches only Instagram and the app path on GitHub Pages, plus localhost port 4173 for development. It uses `storage` permission, not cookies, credentials, remote scripts, or private API access. Daily aggregates remain local. The web app bridges configuration and aggregate activity to the extension; the extension does not copy post or message content to the dashboard.

## Features
- Hide Reels destinations and identifiable Reel feed posts
- Hide Explore, stories, home feed, saved links, and identifiable comment UI
- Filter English-labeled sponsored and suggested article posts
- Messages-only mode with route-level blocking
- Balanced, minimal, and inbox presets
- Mindful session timer enforced on Instagram by the extension
- Active daily time allowance; scheduled downtime including overnight schedules
- Focus break, active-time history, filtered-item counts, export, activity deletion
- Appearance preference, responsive layout, offline dashboard/PWA support

## Honest limits
A normal web page cannot embed or modify an authenticated Instagram site across origins. The companion extension is necessary for enforcement. Mobile web/PWA does not control native Instagram. Blocking is voluntary and can be disabled or uninstalled; this is not a secure parental-control product. Instagram markup changes, regional UI labels, and experiments may affect filters. Story ads and all recommendation surfaces are not guaranteed to be removed. We do not claim complete feature parity.

Single-account enforcement, Reels-count allowances, maximum video quality overrides, native app blocking, linked family accounts, remote parent management, school administration, contact approvals, and safety alerts are not implemented. SocialLite lists some features as planned rather than currently released. This app avoids fake family linking or simulated Instagram login.

## Research
- https://sociallite.app/ — individual product, desktop options
- https://sociallite.app/parents/ — Instagram control inventory and platform limitations
- https://sociallite.app/schools/ — school context
- https://sociallite.app/chrome-extension/beta/ — Chrome beta status

## Development
Serve the repository root at http://localhost:4173 using `python3 -m http.server 4173`. For tests, run `npm ci` and `npx playwright install chromium`, start the local server, then run `npm test`. Tests cover schedules, storage message validation, browser fixtures, the mobile dashboard, and the real extension bridge. The checked-in ZIP is generated from `extension/`; regenerate it after changes using `python3 build-extension.py`.

Push to `main` to deploy via GitHub Actions. `.github/workflows/pages.yml` uploads only public app assets. Do not store secrets in this repository.

This project is not affiliated with Instagram, Meta, or SocialLite. Original branding and interface; no source code or proprietary assets copied.
