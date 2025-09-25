# Video Background Setup Instructions

## Adding Your Video

To add your personal video background to the hero section:

### 1. Video File Requirements
- **Format**: MP4 (primary) and WebM (for better browser support)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Keep under 10MB for optimal loading
- **Content**: Should be subtle, elegant, and not distracting from text

### 2. File Placement
Place your video files in the `public/` directory:
```
public/
├── hero-video.mp4      (primary video file)
├── hero-video.webm     (optional, for better compression)
└── hero-video-poster.jpg (optional, thumbnail shown while loading)
```

### 3. Video Optimization Tips
- **Compress your video**: Use tools like HandBrake or online compressors
- **Create a poster image**: A still frame from your video (1920x1080)
- **Test on mobile**: Ensure it looks good on smaller screens
- **Consider autoplay policies**: Video is muted to comply with browser autoplay rules

### 4. Customizing the Inspirational Message
Edit `app/components/HeroMessage.tsx` to change the message:
```tsx
const inspirationalMessage = "Your custom message here";
```

### 5. Video Content Suggestions
Consider videos featuring:
- Gentle, elegant movements
- Soft lighting
- Neutral or sophisticated color palettes
- Abstract or atmospheric content
- Nothing too busy or distracting

### 6. Fallback
If no video is provided, the section will show a dark gradient background.

## Testing
1. Add your video files to the `public/` directory
2. Run your development server: `npm run dev`
3. Check the homepage to see your video in action
4. Test on different devices and browsers

## Performance Notes
- The video is set to `muted` and `playsInline` for mobile compatibility
- A poster image will show while the video loads
- The video loops automatically
- If video fails to load, a gradient fallback is provided


