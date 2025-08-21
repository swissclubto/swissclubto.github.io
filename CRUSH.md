# Project Guidelines for Swiss Club Toronto Website

This document outlines the essential commands and code style guidelines for
maintaining the Swiss Club Toronto website, built with Jekyll.

## Build and Development Commands

- **Install Dependencies:** `bundle install`
- **Build and Serve (development):** `bundle exec jekyll serve`
- **Build for Production:** `bundle exec jekyll build`

## Code Style Guidelines

### General

- **Language:** Ruby, Liquid, Markdown, HTML, CSS (SCSS), JavaScript.
- **File Naming:** Follow Jekyll's conventions (e.g.,
  `_posts/YYYY-MM-DD-title.md`, `_layouts/default.html`).
- **Indentation:** Use 2 spaces for indentation in Ruby and Liquid, and adhere
  to existing HTML/CSS/JS indentation.

### Ruby/Jekyll

- **Plugins:** Ensure any custom plugins (`_plugins/`) are well-documented and
  follow Ruby best practices.
- **Front Matter:** Maintain consistent front matter structure in Markdown
  files.

### Markdown/Liquid

- **Consistency:** Use consistent Liquid tag syntax (e.g., `{{ variable }}` and
  `{% tag %}`).
- **Readability:** Keep Markdown files clean and easy to read. Run Markdownlint
  on Markdown files and fix all findings.
- **Includes:** Use `_includes` for reusable content snippets.

### Assets (CSS/JS)

- **SCSS:** Use SCSS for styling, adhering to the existing structure in
  `_sass/`.
- **JavaScript:** Keep JavaScript minimal and focused on functionality,
  following existing patterns in `assets/js/`.

## Running Tests

There are no formal unit tests configured for this static site. Visual
inspection and browser testing are the primary methods for verification.

## Error Handling

- Jekyll build errors will be displayed in the console when running `bundle
  exec jekyll serve` or `bundle exec jekyll build`. Address these immediately.
- Frontend errors should be debugged using browser developer tools.
