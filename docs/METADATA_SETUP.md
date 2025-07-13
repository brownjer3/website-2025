# Social Media Metadata Setup Guide

## ✅ Completed Items

1. **Enhanced Metadata Configuration**
   - Added `metadataBase` for proper URL resolution
   - Implemented title templates for consistent branding
   - Enhanced description with keywords
   - Added comprehensive keyword list
   - Set up format detection to prevent auto-linking

2. **Open Graph (OG) Tags**
   - Complete OG configuration with all required fields
   - Image specifications set (1200x630px)
   - Proper URL and site name configuration
   - Alt text for accessibility

3. **Twitter Card Configuration**
   - Set to `summary_large_image` for maximum impact
   - Added Twitter creator handle placeholder
   - Image configuration matching OG specs

4. **Structured Data (JSON-LD)**
   - Created Person schema for better SEO
   - Added professional details and skills
   - Linked social profiles

5. **Favicon Configuration**
   - Set up icon references in metadata
   - Created site.webmanifest for PWA support
   - Defined theme and background colors

6. **Additional SEO Enhancements**
   - Canonical URL for duplicate content prevention
   - Robot directives for optimal crawling
   - Google Bot specific instructions

## 🔧 Manual Steps Required

### 1. Generate OG Image (Priority: HIGH)
```bash
# Option A: Use the generator page
npm run dev
# Visit http://localhost:3000/og-image-generator
# Screenshot the page (1200x630px)
# Save as public/og-image.jpg

# Option B: Use an online tool
# Visit https://og-image.vercel.app/ or https://bannerbear.com/
# Create a 1200x630px image with:
# - Your name
# - Title
# - Website URL
# - Professional design
```

### 2. Create Favicons (Priority: MEDIUM)
```bash
# Use https://realfavicongenerator.net/
# Upload a 512x512px source image
# Generate and download:
# - favicon.ico
# - favicon-16x16.png
# - favicon-32x32.png  
# - apple-touch-icon.png
# - android-chrome-192x192.png
# - android-chrome-512x512.png
```

### 3. Update Twitter Handle (Priority: LOW)
- Edit line 64 in layout.tsx
- Replace `@jerrysafterbrown` with your actual Twitter/X handle
- Or remove if you don't have one

### 4. Clean Up (Priority: LOW)
```bash
# After generating OG image:
rm -rf src/app/og-image-generator
rm public/og-image-placeholder.txt
rm public/favicon-instructions.txt
```

## 🧪 Testing Your Metadata

### Local Testing
1. Build and run production:
   ```bash
   npm run build
   npm start
   ```

2. View page source to verify meta tags

### Online Validators
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
- **Google Rich Results**: https://search.google.com/test/rich-results

### What to Check
- ✓ Image appears correctly (1200x630px)
- ✓ Title and description display properly
- ✓ URL is correct
- ✓ No warnings in validators

## 📱 Platform-Specific Previews

### iMessage
- Shows title, description, and image
- Best with 1200x630px OG image

### Twitter/X
- Uses `summary_large_image` format
- Shows large preview image

### LinkedIn
- Pulls from OG tags
- May cache for 7 days

### Facebook
- Uses OG tags
- Can be refreshed via debugger

### Slack/Discord
- Uses OG tags
- Updates on each message

## 🚀 Deployment Checklist

Before deploying:
- [ ] OG image created and placed in `/public/og-image.jpg`
- [ ] All favicon files generated and placed in `/public/`
- [ ] Twitter handle updated (or removed)
- [ ] Test with local production build
- [ ] Clean up temporary files

After deploying:
- [ ] Test live URL with validators
- [ ] Share in iMessage to verify preview
- [ ] Check all social platforms
- [ ] Monitor for any crawl errors

## 🔍 Troubleshooting

**Image not showing:**
- Check file exists at `/public/og-image.jpg`
- Verify URL in metadata is correct
- Clear social media cache via debuggers

**Wrong information displayed:**
- Social platforms cache metadata
- Use platform debuggers to refresh
- Wait 24-48 hours for full propagation

**Favicon not appearing:**
- Clear browser cache
- Check file paths are correct
- Verify favicon.ico is valid format

---

Last updated: 2025-07-13