# OpenAI Replica

A pixel-perfect replica of a dark-themed UI site built with Next.js 14+, TypeScript, and Tailwind CSS.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Extract color palette from reference frames:
   ```bash
   npm run sample:palette
   ```
   This reads images from `public/frames` and generates `palette.json` with sampled colors.

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `pages/`: Next.js pages (pages router)
- `components/`: Reusable React components
- `styles/`: Global styles
- `lib/`: Utility scripts
- `public/`: Static assets

## Technologies Used

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Sharp (image processing for palette extraction)

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier
- `npm run sample:palette`: Extract color palette from frames

## Features

- Responsive design with mobile sidebar
- Dark theme with custom color palette
- Accessible navigation with keyboard support
- Smooth animations and transitions
- Production-ready build

## Notes

- Place reference frame images in `public/frames/` for automatic color sampling.
- The palette script uses Sharp to sample colors from images.
- All components are typed with TypeScript interfaces.
