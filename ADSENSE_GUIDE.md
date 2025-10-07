# Google AdSense Integration Guide

## Overview
Your Angular 20 application now has Google AdSense integration with a reusable component system.

## What's Been Added

### 1. AdSense Script in index.html
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7601194250852039"
     crossorigin="anonymous"></script>
```

### 2. AdSense Service (`src/app/services/adsense.service.ts`)
- Manages AdSense initialization
- Handles ad pushing with error handling
- Provides TypeScript declarations for AdSense

### 3. Reusable AdSense Component (`src/app/components/shared/adsense/`)
- Configurable ad slots and formats
- Responsive design support
- Auto-initialization of ads

## How to Use

### Basic Usage
```html
<app-adsense 
    adSlot="YOUR_AD_SLOT_ID" 
    adFormat="auto">
</app-adsense>
```

### Advanced Usage
```html
<app-adsense 
    adSlot="1234567890"
    adFormat="rectangle"
    [fullWidthResponsive]="false"
    display="inline-block">
</app-adsense>
```

### Component Properties
- `adClient`: Your AdSense client ID (default: 'ca-pub-7601194250852039')
- `adSlot`: The ad slot ID from your AdSense account
- `adFormat`: Ad format ('auto', 'rectangle', 'banner', etc.)
- `fullWidthResponsive`: Whether ad should be responsive (default: true)
- `display`: CSS display property (default: 'block')

## Ad Formats

### Auto Ads (Responsive)
```html
<app-adsense adSlot="AUTO_SLOT_ID" adFormat="auto"></app-adsense>
```

### Banner Ads
```html
<app-adsense adSlot="BANNER_SLOT_ID" adFormat="banner"></app-adsense>
```

### Rectangle Ads
```html
<app-adsense adSlot="RECTANGLE_SLOT_ID" adFormat="rectangle"></app-adsense>
```

## Best Practices

1. **Ad Placement**: Place ads in natural content breaks
2. **Mobile Optimization**: Use responsive formats for mobile
3. **Loading Performance**: Ads load asynchronously
4. **AdSense Policies**: Follow Google AdSense content policies

## Example Locations for Ads

### Home Page
- Between content sections
- After main content
- In sidebar (if available)

### Blog/Article Pages
- After introduction
- Between paragraphs
- At the end of articles

### Media Pages
- Between video/image galleries
- After media descriptions

## Getting Your Ad Slot IDs

1. Log into your Google AdSense account
2. Go to "Ads" → "Overview"
3. Create new ad units
4. Copy the ad slot IDs
5. Replace the placeholder IDs in your components

## Important Notes

- **Replace Placeholder Ad Slots**: The current ad slots (1234567890, 0987654321) are placeholders
- **AdSense Approval**: Ensure your site is approved by Google AdSense
- **Testing**: Test ads in development mode (they may not show revenue)
- **Content Policy**: Ensure your content complies with AdSense policies

## Troubleshooting

### Ads Not Showing
1. Check that ad slot IDs are correct
2. Ensure AdSense account is approved
3. Verify domain is added to AdSense
4. Check browser console for errors

### Performance Issues
1. Ads load asynchronously (shouldn't block content)
2. Use appropriate ad formats for your layout
3. Don't place too many ads on one page

## Future Enhancements

- Add lazy loading for ads
- Implement ad performance tracking
- Add more ad format options
- Create ad management dashboard