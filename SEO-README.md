# AWS FSxN GitHub Pages - SEO Setup

This repository is configured for optimal search engine indexing with the following SEO components:

## Files Added for SEO

### 1. **robots.txt**
- Guides search engine crawlers
- Allows all content to be indexed
- References the sitemap location

### 2. **sitemap.xml**
- XML sitemap for search engines (Google, Bing, etc.)
- Lists all pages with priority and update frequency
- Update this file whenever you add new pages

### 3. **404.html**
- Custom error page for GitHub Pages
- Provides user-friendly navigation when pages aren't found

### 4. **Meta Tags in HTML**
Each HTML page includes:
- Meta description for search results
- Open Graph tags for social media sharing (Facebook, LinkedIn)
- Twitter Card tags for Twitter sharing
- Canonical URL to avoid duplicate content issues
- JSON-LD structured data for rich snippets

## How to Maintain SEO

### When Adding New Pages:
1. Update `sitemap.xml` with the new page URL
2. Add comprehensive meta tags to the new page's `<head>` section
3. Include JSON-LD structured data

### Best Practices:
- Keep meta descriptions between 150-160 characters
- Use descriptive, keyword-rich titles
- Update `lastmod` dates in sitemap.xml when pages change
- Ensure all images have alt text
- Use semantic HTML (h1, h2, etc. in proper hierarchy)

## Verifying Search Engine Indexing

1. **Google Search Console**: https://search.google.com/search-console
   - Add your site and submit the sitemap
   - Monitor indexing status and search performance

2. **Bing Webmaster Tools**: https://www.bing.com/webmasters
   - Submit your sitemap
   - Track Bing indexing

3. **Check if indexed**: Search `site:aws-fsxn.github.io` on Google

## Additional Recommendations

- Add a `favicon.ico` for brand recognition
- Consider adding `apple-touch-icon.png` for mobile bookmarks
- Create an `index.html` as your homepage if you don't have one
- Add Google Analytics or similar for traffic insights
- Consider adding schema.org breadcrumbs for better navigation
