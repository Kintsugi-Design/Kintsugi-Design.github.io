# Kintsugi Design Jekyll Site

This site is powered by [Jekyll](https://jekyllrb.com/) and uses [jekyll-tailwindcss](https://github.com/vormwald/jekyll-tailwindcss) for Tailwind CSS integration.

## Getting Started

1. **Install Ruby dependencies:**
   ```sh
   bundle install
   ```
2. **Serve the site locally:**
   ```sh
   bundle exec jekyll serve
   ```
   The site will be available at http://localhost:4000

3. **Add content:**
   - Place new posts in `_posts/` as Markdown files.
   - Static assets go in `assets/` or the root as needed.

## Tailwind CSS
- Tailwind is automatically built and injected by the `jekyll-tailwindcss` plugin.
- Configure Tailwind in `tailwind.config.js` as usual.

## Deployment
- Build with `bundle exec jekyll build`.
- Deploy the `_site/` folder to your preferred static host.
