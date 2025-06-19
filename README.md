# 🚀 Personal Portfolio Website


> A modern, responsive portfolio website built with React, showcasing my work, services, and professional journey.

---

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist interface with smooth animations  
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices  
- ⚡ **Fast Performance** - Optimized with React best practices and lazy loading  
- 🎭 **Smooth Animations** - Beautiful transitions using Framer Motion  
- 🌐 **SEO Optimized** - Meta tags and structured data for better search visibility  
- ♿ **Accessible** - WCAG compliant with proper contrast ratios and keyboard navigation  
- 🔧 **Easy to Customize** - Well-structured code for easy modifications  

## 🛠️ Built With

- **Frontend:** [React 18](https://reactjs.org/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm or yarn

### Installation

```bash
git clone https://github.com/mohamed-elhaissan/Portfolio-v2.git
cd portfolio

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev

```
Code Structure
portfolio/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── work/
│   ├── components/
│   │   ├── Work/
│   │   ├── Services/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Layout/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md



🎨 Customization
Colors
The portfolio uses a carefully selected color palette. To customize colors, update the Tailwind CSS configuration:
javascript// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#C6BEAD',
        secondary: '#EFE9DD',
        // Add your custom colors here
      }
    }
  }
}
Content
Update the following files to customize your content:

src/components/Work/Work.jsx - Add your projects
src/components/Services/Services.jsx - Update your services
src/assets/work/ - Replace with your project images

Contact Information
Update the email contact in:
javascript// Replace in components
href="mailto:mhalwasoffice@gmail.com"
// With your email
href="mailto:your-email@domain.com"
📱 Responsive Design
The portfolio is built with a mobile-first approach:

Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px and above

Breakpoints
csssm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
🚀 Deployment
Deploy to Vercel (Recommended)

Push your code to GitHub
bashgit add .
git commit -m "Initial commit"
git push origin main

Deploy with Vercel

Visit Vercel
Import your GitHub repository
Deploy with default settings



Deploy to Netlify

Build the project
bashnpm run build

Deploy to Netlify

Drag and drop the dist folder to Netlify Drop
Or connect your GitHub repository



Deploy to GitHub Pages

Install gh-pages
bashnpm install --save-dev gh-pages

Add deploy scripts to package.json
json{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

Deploy
bashnpm run deploy


🔧 Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build locally
npm run lint - Run ESLint
npm run format - Format code with Prettier

🌟 Performance Optimizations

Lazy Loading - Images are loaded only when needed
Code Splitting - Components are loaded on demand
Optimized Assets - Compressed images and minimized CSS/JS
Caching - Proper cache headers for static assets

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

📞 Contact
Your Name - @yourtwitter - your-email@domain.com
Project Link: https://github.com/yourusername/portfolio
Live Demo: https://your-portfolio-url.com
🙏 Acknowledgments

React - The web framework used
Framer Motion - For smooth animations
Tailwind CSS - For styling
Heroicons - For beautiful icons
Unsplash - For stock photos (if used)


<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
Show Image
</div>
