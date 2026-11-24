# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- **Install dependencies:** `bundle install`
- **Development server:** `bundle exec jekyll serve`
- **Production build:** `bundle exec jekyll build`
- **Lint markdown:** Run markdownlint on `.md` files

No formal test suite exists; verify changes via browser inspection.

## Architecture

Jekyll static site using the Minimal Mistakes theme, hosted on GitHub Pages.

### Collections

Three custom collections in addition to standard `_posts`:

- **`_events`** - Club events with date-based permalinks (`/events/YYYY/MM/slug/`)
- **`_gallery`** - Photo galleries with the same permalink structure
- **`_inmemoriam`** - Memorial/tribute pages

### Key Data Files

- **`_data/navigation.yml`** - Site navigation structure with sections and year-based event archives
- **`_data/authors.yml`** - Member profiles (board, section heads, contacts) referenced by `contact:` front matter key in events

### Custom Plugins (`_plugins/`)

- **`obfuscate_email.rb`** - Liquid filters for spam-resistant email encoding:
  - `encode_email` - Encodes email address characters as HTML entities
  - `encode_mailto` - Encodes full mailto: link
  - `create_mailto_link` - Creates complete `<a href="mailto:...">` link
- **`to_time.rb`** - `to_time` filter for date string parsing

### Custom Layouts (`_layouts/`)

- **`event.html`** - Event detail page with contact info, location/map, times
- **`collection-year-calendar.html`** - Archive pages showing events in monthly calendar format
- **`gallery.html`** - Photo gallery with lightbox

### Front Matter Conventions

**Events** (`_events/YYYY-MM-DD-title.md`):

```yaml
title: Event Name
date: YYYY-MM-DD
start_time: "h:mm am/pm"
end_time: "h:mm am/pm"
location: Venue name
address: Full street address
contact: author_key_from_authors_yml
section: men|bowling|canadysli|jass|theatre
```

**Gallery** (`_gallery/YYYY-MM-DD-title.md`):

```yaml
title: Gallery Title
header:
  teaser: /assets/images/thumb.webp
gallery:
  - url: /assets/images/full.webp
    image_path: /assets/images/thumb.webp
    title: Photo caption
```

## Adding a Tell Tale Issue

Tell Tale newsletters live in `assets/telltale/` as `YYYY-MM-issue-NNN.pdf` plus a `-th.webp` thumbnail, listed in `_pages/telltale.md` front matter under the year key (rows of three; `- # placeholder` entries fill out the grid).

New issues go in hidden first, then are published in a later commit:

1. **Add (hidden):** copy the PDF in, then use the user's shell functions (run via `bash -ic` so they're loaded):
   - `compresspdf file.pdf` → writes `file_small.pdf` (Ghostscript `/ebook`); move it over the original
   - `dumppdfdata file.pdf` → writes `file.info`; edit it so Title is `Tell Tale Issue NNN, Month YYYY` and Author is the editor's full name (e.g. `Gabriel Hilty`); blank out junk like Canva keyword IDs
   - `updatepdfdata file.pdf` → applies `file.info` in place; then delete the `.info` file
   - `createpdfthumb file.pdf` → writes `file-th.webp` (375 px wide)
2. In `_pages/telltale.md`, replace a placeholder with the new entry **commented out** (`# - url: ...`), and add the updated year caption commented out below the current one under `captions:`. Commit as e.g. "Add Tell Tale NNN".
3. **Publish:** uncomment the entry, replace the old caption with the new one. Commit as e.g. "Publish Tell Tale NNN".

## Automation

**GitHub Actions:**

- **`deploy.yml`** - Builds and deploys to GitHub Pages on push to main (also runs daily)
- **`kafiklatsch.yml`** - Auto-generates weekly Men's Section Kafiklatsch events; runs monthly on the 15th or via manual dispatch. Uses `_events/2025-07-07-mens-kaffi-klatsch1.md` as template.

## Code Style

- 2-space indentation for Ruby, Liquid, HTML, CSS, JavaScript
- Follow Jekyll file naming conventions (`YYYY-MM-DD-slug.md` for dated content)
- Use `_includes/` for reusable template snippets
