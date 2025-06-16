# Mini Real Estate App

A modern interactive real estate simulation built with Next.js, React, and Tailwind CSS. Users can browse towers, select floors, view apartment layouts, and see detailed information—all with persistent state using localStorage.

## Features

- **Tower Selection:** Choose from multiple towers (A, B, C).
- **Floor Selection:** Pick a floor from each tower.
- **Apartment Layouts:** Browse available layouts with images, area, type, rooms, and price.
- **Layout Details:** View features and floor plans for each layout.
- **State Persistence:** Your selections are saved in localStorage, so you can refresh or return later.
- **Animated UI:** Smooth transitions using Framer Motion.
- **Responsive Design:** Works great on desktop and mobile.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/IreAy0/mini-real-estate.git
   cd mini-real-estate
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
  app/
    all-in-one/         # Main simulation page
    tower/              # Tower and floor selection pages
  components/           # Reusable UI components
  styles/               # Tailwind and global styles
next.config.mjs         # Next.js configuration (image domains, etc.)
```

## Configuration

- **Image Domains:**  
  The app uses [placehold.co](https://placehold.co/) for placeholder images.  
  See `next.config.mjs` for remotePatterns configuration.

## Customization

- To add more towers, floors, or layouts, edit the arrays in the relevant files (e.g., `src/app/all-in-one/page.js`).
- Replace placeholder images with your own by updating the `img` and `floorPlan` URLs.

## License

MIT

---
