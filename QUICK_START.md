# Quick Start Guide - Modernized Dr. Charge Website

## Prerequisites

- Node.js 20+ installed
- npm or pnpm package manager

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`

### Available Routes

- `/en` - English homepage
- `/fr` - French homepage
- `/en/about` - About page
- `/en/services` - Services page
- `/en/contact` - Contact page
- `/en/faq` - FAQ page

## Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Key Features to Test

### 1. Hero Section

- ✨ Particle system animation
- 🎯 Magnetic buttons (desktop only)
- 🌊 Floating geometric shapes
- 📜 Smooth scroll indicator

### 2. Interactive Elements

- 🖱️ Cursor glow effect (desktop)
- 🎴 3D tilt cards (Technology Pillars)
- 🔢 Animated counters (Impact by Numbers)
- 🌟 Hover effects on all interactive elements

### 3. Sections to Explore

1. **Hero** - Full-screen with particles
2. **The Challenge** - Problem statement with animations
3. **Technology Pillars** - Interactive 3D cards
4. **Innovation Spotlight** - CL19 product showcase
5. **Mobile Truck** - Parallax section
6. **Impact by Numbers** - Animated statistics
7. **Sustainability Dashboard** - Environmental metrics
8. **App Section** - Mobile app preview

### 4. Header Features

- 📊 Scroll progress bar
- 🌐 Language switcher (EN/FR)
- 📱 Mobile menu with smooth transitions

### 5. Footer Features

- 📧 Newsletter signup (with animation)
- 🌱 Green certification badges
- 🔗 Enhanced navigation links

## Performance Tips

### Desktop Experience

- All animations and effects are enabled
- Cursor glow follows mouse movement
- Magnetic buttons respond to cursor proximity
- 3D card tilts respond to mouse position

### Mobile Experience

- Simplified animations for better performance
- Touch-friendly interactions
- No cursor-based effects
- Optimized image loading

### Accessibility

- Press `Tab` to navigate via keyboard
- Screen reader compatible
- Respects `prefers-reduced-motion` setting
- High contrast ratios (WCAG AA)

## Browser Testing Checklist

### Desktop Browsers

- [ ] Chrome/Edge - Test all animations
- [ ] Firefox - Verify gradient rendering
- [ ] Safari - Check backdrop-blur effects

### Mobile Browsers

- [ ] iOS Safari - Test touch interactions
- [ ] Chrome Mobile - Verify responsive layout
- [ ] Samsung Internet - Check compatibility

## Common Issues & Solutions

### Issue: Animations not working

**Solution**: Check browser console for errors. Ensure Framer Motion is installed.

### Issue: Cursor glow not visible

**Solution**: This is desktop-only. Check screen width > 768px.

### Issue: Images not loading

**Solution**: Ensure all images exist in `/public` directory.

### Issue: Translations missing

**Solution**: Check `dictionaries/en.json` and `dictionaries/fr.json` for required keys.

## Development Notes

### Adding New Sections

1. Create component in `components/`
2. Add translations to dictionaries
3. Import and use in `landing-page.tsx`
4. Update design tokens if needed

### Modifying Colors

Edit `lib/design-tokens.ts` → `COLORS` object

### Adjusting Animations

Edit `lib/design-tokens.ts` → `ANIMATIONS` object

### Adding New Languages

1. Create new dictionary file (e.g., `dictionaries/es.json`)
2. Update `i18n-config.ts`
3. Add translations for all keys

## Performance Monitoring

### Check Lighthouse Scores

```bash
# Build first
npm run build
npm start

# Then run Lighthouse in Chrome DevTools
```

### Expected Scores

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## Troubleshooting

### Clear Next.js Cache

```bash
rm -rf .next
npm run dev
```

### Reinstall Dependencies

```bash
rm -rf node_modules package-lock.json
npm install
```

### Check TypeScript Errors

```bash
npm run lint
```

## Support

For issues or questions:

1. Check `MODERNIZATION_SUMMARY.md` for implementation details
2. Review component documentation in source files
3. Check browser console for errors
4. Verify all dependencies are installed

## Next Steps

1. **Test all interactions** - Click, hover, scroll through all sections
2. **Test responsiveness** - Resize browser, test on mobile devices
3. **Test accessibility** - Use keyboard navigation, test with screen reader
4. **Test performance** - Run Lighthouse, check load times
5. **Test languages** - Switch between EN/FR, verify translations

## Enjoy the Modernized Experience! 🚀✨
