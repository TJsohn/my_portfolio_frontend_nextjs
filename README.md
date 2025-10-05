# TJ Sohn Portfolio

A personal portfolio website built with Next.js and React, connected to a Drupal backend via JSON:API. Showcases projects, skills, and contact information with a modern, responsive design.

## Features
- Home, About, Projects, and Contact pages
- Content fetched dynamically from Drupal backend
- Responsive navigation with hamburger menu for mobile
- Project cards with images and links
- Custom favicon and branding
- Clean, production-ready codebase

## Tech Stack
- Next.js (React)
- Drupal (JSON:API enabled)
- Axios for API requests
- Custom CSS for styling

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/TJsohn/my_portfolio_frontend_nextjs.git
   cd my_portfolio_frontend_nextjs
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**
   - Copy `.env.local.example` to `.env.local` and set your Drupal backend URL:
     ```bash
     cp .env.local.example .env.local
     # Edit .env.local and set NEXT_PUBLIC_DRUPAL_BASE_URL
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables
- `NEXT_PUBLIC_DRUPAL_BASE_URL`: URL of your Drupal backend (e.g., http://localhost:60814)

## Deployment
You can deploy this app to Vercel, Netlify, or any platform supporting Next.js. For Vercel:
- Push your code to GitHub
- Import your repo on [Vercel](https://vercel.com/)
- Set environment variables in Vercel dashboard

## License
This project is for educational purposes and personal portfolio use.

---

For inquiries or collaboration, please contact me via email at taejeong.sohn@gmail.com or connect on [LinkedIn](https://www.linkedin.com/in/tjsohn/).
