# Modern React Website

A responsive modern website built with React, Vite, and Tailwind CSS. Features include lazy loading, animations, and responsive design.

## Features

- Responsive design for mobile and desktop
- Lazy loading of components and media
- Smooth animations using Framer Motion
- Video carousel with autoplay on view
- Image grid with responsive layout
- Contact section with social links

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Setup

1. Clone the repository
```bash
git clone <repository-url>
cd website
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

- `/src/components/` - React components
- `/src/assets/` - Static assets
- `/public/` - Public assets and media files

## Media Files

Place your media files in the following directories:

- Videos: `/src/assets/videos/`
- Images: `/src/assets/images/`

## Contact Information

Update the contact information in the Footer component:
- Phone number in `handleCall()`
- Instagram username in `handleInstagram()`
- Email address in `handleEmail()`

## Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Intersection Observer
