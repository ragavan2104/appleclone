# Apple Website Clone

A modern, responsive recreation of Apple's official website built with React and Vite. This project showcases Apple's sleek design philosophy with interactive components, smooth animations, and a premium user experience.

![Apple Clone Preview](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)

## 🚀 Live Demo

**[View Live Demo →](https://ragavan2104.github.io/appleclone)**

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎨 Design & UI
- **Pixel-perfect Apple Design**: Faithful recreation of Apple's visual identity
- **Responsive Layout**: Seamless experience across all devices and screen sizes
- **Smooth Animations**: Subtle transitions and hover effects enhancing user interaction
- **Modern Typography**: Clean, readable fonts matching Apple's style guidelines

### 🔧 Functionality
- **Interactive Navigation**: Multi-level dropdown menus with smooth animations
- **Product Showcase**: Dynamic product grid with hover effects and detailed views
- **Auto-rotating Carousel**: Apple TV+ content slider with automatic progression
- **Mobile-First Design**: Optimized for mobile devices with touch-friendly interactions
- **Performance Optimized**: Fast loading times and smooth scrolling

### 📱 Responsive Components
- **Adaptive Navigation**: Mobile hamburger menu and desktop dropdown system
- **Flexible Grid Layouts**: Products and content adapt to different screen sizes
- **Touch Gestures**: Mobile-optimized interactions and swipe functionality

## 🛠 Technologies Used

### Frontend
- ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
- ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)

### Development Tools
- ![ESLint](https://img.shields.io/badge/ESLint-9.25.0-4B32C3?style=flat-square&logo=eslint)
- ![PostCSS](https://img.shields.io/badge/PostCSS-Latest-DD3A0A?style=flat-square&logo=postcss)

### UI & Icons
- ![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-61DAFB?style=flat-square&logo=react)

### Deployment
- ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)
- ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github)

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ragavan2104/appleclone.git
   cd appleclone/vite-project
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
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
vite-project/
├── 📁 public/                 # Static assets
│   └── vite.svg
├── 📁 src/                    # Source code
│   ├── 📁 assets/            # Images and icons
│   │   ├── apple-tv-plus.svg
│   │   ├── react.svg
│   │   └── 📁 images/
│   │       └── ipad.jpg
│   ├── 📁 components/        # React components
│   │   ├── Add.jsx           # Promotional banners
│   │   ├── Banner.jsx        # Hero sections
│   │   ├── Banner2.jsx       # Secondary banners
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Product.jsx       # Product showcase
│   │   ├── Slide.jsx         # Carousel component
│   │   └── Watch.jsx         # Apple Watch section
│   ├── App.jsx               # Main application component
│   ├── App.css               # Global styles
│   ├── index.css             # Base styles and Tailwind imports
│   └── main.jsx              # Application entry point
├── 📄 index.html             # HTML template
├── 📄 package.json           # Project dependencies
├── 📄 tailwind.config.js     # Tailwind CSS configuration
├── 📄 postcss.config.js      # PostCSS configuration
├── 📄 vite.config.js         # Vite configuration
└── 📄 eslint.config.js       # ESLint configuration
```

## 🧩 Components Overview

### 🔝 Core Layout Components

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **`Navbar`** | Fixed navigation header | Multi-level dropdowns, mobile menu, search functionality |
| **`Footer`** | Site footer with links | Comprehensive navigation, legal links, responsive layout |

### 📱 Content Components

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **`Banner`** | Hero section for iPhone | Product highlights, call-to-action buttons |
| **`Banner2`** | Promotional banner | Special offers, event announcements |
| **`Watch`** | Apple Watch showcase | Product features, interactive elements |
| **`Product`** | Product grid display | Hover effects, responsive grid, product cards |
| **`Slide`** | Apple TV+ carousel | Auto-rotation, pagination dots, smooth transitions |
| **`Add`** | Promotional content | EMI offers, special deals |

### 🎨 Design Highlights

- **Consistent Spacing**: Following Apple's design system with proper margins and padding
- **Color Palette**: Authentic Apple colors including space gray, silver, and product colors
- **Typography**: San Francisco font family for authentic Apple feel
- **Micro-interactions**: Subtle hover effects and loading animations

## 📜 Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Create production build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint for code analysis

# Deployment
npm run deploy       # Build and deploy to GitHub Pages
npm run predeploy    # Pre-deployment build script
```

## 🚀 Deployment

### GitHub Pages
This project is configured for automatic deployment to GitHub Pages:

```bash
npm run deploy
```

**Live URL**: [https://ragavan2104.github.io/appleclone](https://ragavan2104.github.io/appleclone)

### Vercel
The project is also deployed on Vercel with automatic deployments from the main branch.

### Build Configuration
- **Build Output**: `dist/` directory
- **Base Path**: Configured for GitHub Pages deployment
- **Asset Optimization**: Automatic image and CSS optimization

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling consistency
- Ensure responsive design across all components
- Write clean, documented code
- Test on multiple devices and browsers

## 📄 License

This project is created for **educational purposes only**. All Apple trademarks, logos, and design elements belong to Apple Inc.

**Disclaimer**: This is a fan-made recreation and is not affiliated with or endorsed by Apple Inc.

## 👨‍💻 Author

**Ragavan**
- GitHub: [@ragavan2104](https://github.com/ragavan2104)
- Portfolio: [Your Portfolio Link]

## 🙏 Acknowledgments

- **Apple Inc.** for the incredible design inspiration
- **React Team** for the powerful framework
- **Tailwind CSS** for the utility-first approach
- **Vite** for lightning-fast development experience
- **Vercel** for seamless deployment platform

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Mobile Optimized**: 100% responsive design

---

<div align="center">

**[⭐ Star this repository](https://github.com/ragavan2104/appleclone)** if you found it helpful!

Made with ❤️ by [Ragavan](https://github.com/ragavan2104)

</div>
