# Jahed Miah - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and projects as a Software Engineer specializing in React Native, AWS, and mobile development.

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Live Demo

**Visit:** [Your Portfolio URL]

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Customization](#customization)
- [Deployment](#deployment)

## 🎯 Overview

This portfolio website is built with Next.js 14 and features a modern, dark-themed design with gradient accents. It showcases my professional journey from QA Engineer to Software Engineer, highlighting my expertise across mobile development, automation, and cloud technologies.

### Key Information Displayed:
- **Current Role:** Software Engineer at Currensea (March 2024 - Present)
- **Specialization:** React Native, AWS, JavaScript, Mobile Development
- **Experience:** 6 years in software development + 5 years in automation/QA
- **Location:** London, United Kingdom

## ✨ Features

### Design & UX
- 🎨 **Modern Dark Theme** with gradient backgrounds and accent colors
- 🌈 **Gradient Text Effects** for headings and key elements
- ✨ **Smooth Animations** and hover effects throughout
- 📱 **Fully Responsive** design for mobile, tablet, and desktop
- 🎯 **Clean, Professional Layout** with excellent readability

### Functional Features
- 📧 **Contact Form** with EmailJS integration
- 💼 **Employment History** with detailed role descriptions and tech stacks
- 🚀 **Featured Project Showcase** on homepage
- 📁 **Dedicated Projects Page** with comprehensive project details
- 🔗 **Social Media Integration** (GitHub, LinkedIn)
- ⚡ **Fast Performance** with Next.js optimization

### Components
- **Modern Navigation** with gradient styling and backdrop blur
- **Interactive Job Cards** with expandable content and tech badges
- **Featured Project Card** with live stats and action buttons
- **Professional Footer** with social links and copyright
- **Custom Styled Forms** with validation and success messages

## 🛠️ Tech Stack

### Core Technologies
- **Framework:** [Next.js 14.2.35](https://nextjs.org/)
- **React:** 18.3.1
- **Styling:** [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **Icons:** [React Icons 5.4.0](https://react-icons.github.io/react-icons/)

### Additional Tools
- **Email Service:** [@emailjs/browser](https://www.emailjs.com/)
- **Build Tool:** PostCSS, Autoprefixer
- **Code Quality:** ESLint, Prettier

### Development
- **Node.js:** v18.17.0 or higher required
- **Package Manager:** npm
- **Version Control:** Git/GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js v18.17.0 or higher
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jahed04368/jahed-miah.git
   cd jahed-miah
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAIL_JS_SERVICE=your_service_id
   NEXT_PUBLIC_EMAIL_JS_TEMPLATE=your_template_id
   NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
jahed-miah/
├── components/
│   ├── data.json          # Portfolio data (employment, projects)
│   ├── Footer.js          # Footer component
│   ├── JobCard.js         # Employment history card
│   ├── Navbar.js          # Navigation bar
│   └── Toggle.js          # Toggle component for job cards
├── pages/
│   ├── _app.js            # Next.js App component
│   ├── index.js           # Homepage
│   ├── contact/
│   │   └── index.js       # Contact page
│   ├── projects/
│   │   └── index.js       # Projects showcase page
│   └── api/
│       └── contact/
│           └── mail.js    # Contact form API endpoint
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   └── jahed-pic.png  # Profile picture
│   └── favicon_io/        # Favicon assets
├── styles/
│   ├── globals.css        # Global styles with custom utilities
│   └── Home.module.css
├── .gitignore
├── next.config.js         # Next.js configuration
├── package.json
├── postcss.config.js
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md
```

## 📄 Pages

### Homepage (`/`)
- Professional introduction and greeting
- About me section with professional summary
- Featured project showcase (Saturday Football League)
- Complete employment history with expandable job cards
- Social media links

### Projects (`/projects`)
- Comprehensive project showcase
- Saturday Football League Management System details
- Architecture and features overview
- Technology stack breakdown
- Project highlights and statistics
- Links to live demo and GitHub repository

### Contact (`/contact`)
- Professional contact form
- Email integration via EmailJS
- Form validation
- Success message with navigation back home

## 🎨 Customization

### Update Personal Information

Edit `components/data.json`:
```json
{
  "about": "Your professional summary...",
  "employments": [...],
  "featuredProject": {...}
}
```

### Update Styling

- **Global Styles:** `styles/globals.css`
- **Tailwind Config:** `tailwind.config.js`
- **Color Scheme:** Modify gradient colors in component className props

### Update Profile Picture

Replace `public/images/jahed-pic.png` with your photo (recommended size: 300x300px)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Any platform supporting Node.js

## 📧 Contact Form Setup

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials and add to `.env.local`

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jahed Miah**
- Software Engineer at Currensea
- LinkedIn: [linkedin.com/in/jahed-miah04368](https://www.linkedin.com/in/jahed-miah04368/)
- GitHub: [@jahed04368](https://github.com/jahed04368)
- Email: jahed04368@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

⭐ **Star this repo if you found it helpful!**

