# Katherine Taylor Website

A modern, SEO-optimized Next.js website built with TypeScript and Tailwind CSS. Features a clean, professional design with comprehensive metadata handling and structured data for optimal search engine visibility.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **SEO**: Built-in sitemap, robots.txt, and metadata handling

## 📋 Features

- ✅ **SEO Optimized**: Automatic sitemap generation, robots.txt, and structured metadata
- ✅ **TypeScript**: Full type safety and better development experience
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Performance**: Optimized images, fonts, and static assets
- ✅ **PWA Ready**: Web app manifest and icon support
- ✅ **Modern Architecture**: App Router with server components

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/notTechSav/katherine-taylor-site.git
   cd katherine-taylor-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Vercel (Recommended)

This project is configured for seamless deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Deploy automatically** - Vercel will detect the Next.js framework
3. **Custom domain** - Configure your domain in Vercel dashboard

The `vercel.json` configuration file is included for optimal deployment settings.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 📁 Project Structure

```
katherine-taylor-site/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── auth/                 # Authentication endpoints
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt configuration
│   ├── manifest.ts               # PWA manifest
│   ├── icon.tsx                  # App icon component
│   ├── apple-icon.tsx            # Apple touch icon
│   ├── error.tsx                 # Error page
│   └── not-found.tsx             # 404 page
├── public/                       # Static assets
│   └── og.svg                    # Open Graph image
├── middleware.ts                 # Next.js middleware
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vercel.json                   # Vercel deployment configuration
└── package.json                  # Dependencies and scripts
```

## 🔧 Configuration Files

### Key Files

- **`app/layout.tsx`** - Root layout with metadata and global providers
- **`app/page.tsx`** - Main homepage component
- **`app/sitemap.ts`** - Dynamic sitemap generation for SEO
- **`app/robots.ts`** - Robots.txt configuration
- **`middleware.ts`** - Request/response middleware
- **`next.config.js`** - Next.js framework configuration
- **`tailwind.config.js`** - Tailwind CSS customization

### SEO Configuration

The project includes comprehensive SEO setup:

- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots**: Configured at `/robots.txt`
- **Metadata**: Structured metadata for social sharing
- **Icons**: Multiple icon sizes for different devices

## 🌐 Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://katherinetaylorescort.com
```

## 📱 PWA Features

- Web App Manifest (`/manifest.webmanifest`)
- Multiple icon sizes (192x192, 512x512)
- Apple touch icons
- Responsive design for all devices

## 🔍 SEO Features

- **Structured Data**: JSON-LD structured data
- **Meta Tags**: Comprehensive meta tag setup
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🚀 Performance

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Optimized font loading
- **Code Splitting**: Automatic code splitting
- **Static Generation**: Pre-rendered pages for better performance

## 📝 Development Notes

- The project uses Next.js App Router (not Pages Router)
- TypeScript is configured with strict mode
- Tailwind CSS is used for styling
- ESLint is configured for code quality
- All components are server components by default

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Live Site**: [https://katherinetaylorescort.com](https://katherinetaylorescort.com)