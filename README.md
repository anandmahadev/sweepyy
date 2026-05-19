# Sweepyy - Sweeping Corporation Website

A modern, responsive, high-performance recreation of the Sweeping Corporation of America (SCA) website built with React 18, Vite, and Vanilla CSS.

## Project Overview

Sweepyy is an enterprise-grade web application showcasing nationwide power sweeping and JetVac environmental solutions. It prioritizes WCAG-compliant accessibility, rich performance, clean industrial design, and highly engaging user utilities.

## Core Features Implemented

- **Responsive Design**: Completely customized layout grids translating seamlessly from desktop viewports down to small mobile screens.
- **Modern UI/UX Aesthetics**: Curated blue and orange industrial palette with rich typography, glassmorphism layers, and subtle micro-animations.
- **WCAG Accessibility**: A floating **Accessibility Toolbar** enabling on-the-fly text resizing (+/-), high contrast mode toggles, links underlining, and grayscale filters.
- **Cookie Preference Panel**: A GDPR-compliant cookie consent system with customizable category choices (Essential, Analytics, Marketing) and state-based options saving.
- **Environmental ROI Impact Calculator**: Real-time calculations inside the Solutions view calculating annual debris weights collected (lbs) and pollutant runoff filtration efficiency.
- **Interactive Timeline & State Search**: Fully functional keyword and category list matching inside the News blog feed and Service Area state branches index.
- **Form Verification & File Upload Feedback**: 
  - Active regex verification for email inputs and 10-digit number requirements on the Contact Form.
  - Interactive FAQ accordion drawer.
  - Live feedback file-selection indicator for Career resume uploads.

## Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS (CSS variables, local component scopes via `styled-jsx`/React standard inline styles)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anandmahadev/sweepyy.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## Developer Scripts

* `npm run dev` - Launches Vite dev server at http://localhost:5173 with HMR.
* `npm run build` - Builds production bundle assets to the `/dist` directory.
* `npm run preview` - Runs a local web server to preview your production build assets.
* `npm run lint` - Runs ESLint code style syntax checks.

## Future Product Roadmap

- [ ] **Interactive USA Coverage Map**: A SVG vector map tracking branch offices when hovering states.
- [ ] **Multi-lingual Support**: Quick toggle selector between English and Spanish localizations.
- [ ] **Real-time Live Chat**: A support chat widget for municipal emergency dispatch.

## Local Troubleshooting

If you encounter issues during local installation or execution, refer to these common solutions:

### 1. Missing Lucide Icon Exports
If Vite throws compilation errors about brand icon exports (e.g., `Linkedin`, `Twitter`, `Facebook`), they are resolved in this project by using lightweight inline SVG icons which bypass external Lucide package fluctuations. Ensure all references point to the new custom icon renderers.

### 2. Node Version Conflicts
This project runs best on Node.js versions `18.x` or `20.x`. If dependency installations fail with resolution conflicts, run clean parameters:
```bash
npm install --legacy-peer-deps
```

### 3. Port Occupancy
If the default port `5173` is occupied by another application, Vite will dynamically switch to a fallback port (e.g., `5174`). You can explicitly declare a port by passing command line parameters:
```bash
npm run dev -- --port 3000
```

### 4. Windows PowerShell Script Execution Policies
If local system execution policies block PowerShell from loading `.ps1` wrappers (e.g. `npm.ps1 cannot be loaded`), bypass this block by running commands directly through the classic command prompt shell:
```bash
cmd.exe /c npm run build
```

