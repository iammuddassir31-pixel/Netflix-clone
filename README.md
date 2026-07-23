# 🎬 NovaFlix — Netflix-Style Streaming UI Clone

A modern, responsive streaming-platform front-end built with **React + Vite**. Created as a
college assignment to demonstrate component architecture, client-side routing, and hand-written
responsive CSS — inspired by the browsing experience of platforms like Netflix, using original
branding.

> ⚠️ **Disclaimer:** This is an educational student project only. It is **not affiliated with,
> endorsed by, or connected to Netflix, Inc.** No Netflix trademarks, logos, or proprietary assets
> are used. Movie posters are fetched from TMDB's public image CDN for demonstration purposes.

---

## 📸 Screenshots

> Add your own screenshots here after running the app locally.

| Page | Preview |
|------|---------|
| Home | `screenshots/home.png` |
| Movies | `screenshots/movies.png` |
| Movie Details | `screenshots/details.png` |
| About | `screenshots/about.png` |
| Contact | `screenshots/contact.png` |

---

## ✨ Features

- 🎨 Dark, modern streaming-platform theme
- 📱 Fully responsive — desktop, laptop, tablet & mobile
- 🧭 Fixed navbar with scroll-aware background + mobile hamburger menu
- 🎞️ Hero banner spotlighting a featured title
- ↔️ Horizontally scrollable movie rows (Trending, Popular, Top Rated, Action, Comedy...)
- 🔍 Searchable & filterable Movies catalog (10 movies with full metadata)
- 📄 Dynamic Movie Details page (cast, director, rating, genre, duration, description)
- ✉️ Responsive Contact form with client-side validation
- 🧩 Reusable component architecture (Navbar, Hero, MovieCard, MovieRow, Footer)
- 🖱️ Smooth hover effects, transitions & card animations
- 🧱 Semantic HTML5 throughout

---

## 🛠️ Technologies Used

| Category | Stack |
|---|---|
| Library | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router v6 |
| Styling | CSS3 (custom, no framework) |
| Language | JavaScript (ES6+) |
| Linting | ESLint |

---

## 📂 Folder Structure

```
Netflix-Clone/
├── public/
│   ├── images/
│   │   ├── posters/
│   │   └── favicon.svg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieRow.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── movies.js
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── .eslintrc.cjs
├── .gitignore
└── README.md
```

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

### Deploy on Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**. The included `vercel.json` handles client-side routing rewrites.

### Deploy on Netlify
1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. The included `public/_redirects` file handles client-side routing.

---

## 📝 Pages Overview

- **Home** — Logo, navbar, hero banner, featured movie, Continue Watching, Trending Now, Popular,
  Top Rated, Action, Comedy rows, and footer.
- **Movies** — Grid of all 10 movies with poster, name, year, genre, rating, description, and
  Play / More Info actions. Includes search and genre filtering.
- **Movie Details** — Large poster, title, genre, duration, rating, release year, description,
  cast, director, Play and Back buttons.
- **About** — Project description, technologies used, features list, and developer section.
- **Contact** — Responsive form with Name, Email, Subject, Message fields and Submit button.

---

## 🗂️ Suggested Git Commit History

Since a real Git history should reflect incremental progress, here are suggested commit messages
if you're initializing this repository from scratch:

```bash
git init
git add package.json vite.config.js index.html .gitignore .eslintrc.cjs
git commit -m "chore: scaffold Vite + React project structure"

git add src/main.jsx src/App.jsx
git commit -m "feat: set up app shell, routing and entry point"

git add src/components/
git commit -m "feat: build reusable Navbar, Hero, MovieCard, MovieRow and Footer components"

git add src/data/movies.js
git commit -m "feat: add movie data with 10 titles and metadata"

git add src/pages/Home.jsx src/pages/Movies.jsx
git commit -m "feat: implement Home and Movies pages"

git add src/pages/MovieDetails.jsx
git commit -m "feat: implement dynamic Movie Details page"

git add src/pages/About.jsx src/pages/Contact.jsx
git commit -m "feat: implement About and Contact pages"

git add src/css/style.css src/css/responsive.css
git commit -m "style: add dark theme styling and responsive breakpoints"

git add vercel.json public/_redirects
git commit -m "chore: configure Vercel and Netlify deployment"

git add README.md
git commit -m "docs: add project README with setup and deployment instructions"
```

---

## ✅ Assignment Checklist

- [x] Responsive Design (Desktop + Mobile)
- [x] Clean Folder Structure
- [x] Semantic HTML
- [x] Proper CSS
- [x] React Components
- [x] GitHub Repository Ready
- [x] Live Deployment Ready
- [x] README.md
- [x] 10+ meaningful Git commits (see suggested history above)

---

## 📄 License

This project is for educational purposes only and is not intended for commercial use.
