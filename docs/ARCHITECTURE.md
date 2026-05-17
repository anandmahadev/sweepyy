# Sweeping Corporation of America (SCA) - Web Application Architecture

This document describes the software architecture, folder structure, core components, and design systems used in the SCA replica web application.

## Directory Layout

```
.
├── public/                  # Static assets (favicons, manifest, etc.)
├── src/
│   ├── components/          # Reusable UI elements
│   │   ├── AccessibilityToolbar.jsx # Site-wide readability controller
│   │   ├── CookieBar.jsx            # Custom consent preference panel
│   │   ├── Footer.jsx               # Navigation footer
│   │   ├── Header.jsx               # Header navigation & search trigger
│   │   ├── PageHero.jsx             # Hero banner for internal pages
│   │   ├── ScrollToTop.jsx          # Window page position reset helper
│   │   ├── SectionHeader.jsx        # Unified subsection title headers
│   │   └── ServiceCard.jsx          # Flex grid item for service cards
│   ├── constants/           # Global app configurations and routes
│   │   ├── config.js                # Core site metadata (address, phones)
│   │   ├── navigation.js            # Main & footer navigation arrays
│   │   └── routes.js                # Centralized React Router endpoints
│   ├── pages/               # Route-level view pages
│   │   ├── About.jsx                # Corporate history & core stats
│   │   ├── Careers.jsx              # Openings list & quick apply form
│   │   ├── Contact.jsx              # Customer request form with validation & FAQ accordion
│   │   ├── Home.jsx                 # Dynamic services overview, national map & testimonials
│   │   ├── News.jsx                 # Blog article timeline with keyword search & category filters
│   │   ├── Privacy.jsx              # GDPR data statement with a print helper
│   │   ├── ServiceAreaDetail.jsx    # Branch dispatch offices by State
│   │   └── ServiceAreas.jsx         # Complete national map & branch search filter
│   ├── App.jsx              # Main routing and global layout container
│   ├── index.css            # Central styling definitions & CSS variables
│   └── main.jsx             # React Virtual DOM entry point
├── vite.config.js           # Vite server bundler settings
└── package.json             # Build tool chains and script hooks
```

## Architectural Highlights

### 1. Interactive Utilities
- **Stateful Forms**: Validation logic ensures email format correctness and phone numbers contain at least 10 digits before dispatching local mock responses.
- **Dynamic Search & Filtering**: Implemented live keyword and category matching inside the News timeline and Service Areas state directories.
- **Dynamic Calculators**: The Solutions page features a custom ROI/Environmental impact calculation tool based on EPA standard loading rates.

### 2. Accessibility Compliance
- **Accessibility Toolbar**: Site-wide theme and sizing modifier for users requesting large font sizing, grayscale visual layers, or underlined navigation anchors.
- **Cookie Preference Panel**: Flexible storage consent categorizations supporting standard GDRP classifications (Essential, Analytics, Marketing).
