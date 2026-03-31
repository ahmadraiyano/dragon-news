# 🐉 Dragon News

A modern, fully responsive news portal built with React — featuring category-based browsing, real-time content, and secure Firebase authentication.

🔗 **Live Site:** [dragon-news-1c802.web.app](https://dragon-news-1c802.web.app)
📁 **Repository:** [github.com/ahmadraiyano/dragon-news](https://github.com/ahmadraiyano/dragon-news)

---

## 📸 Overview

Dragon News is a dynamic news web application where users can browse news by category, read full articles, and access exclusive content through a secure login system. The project follows industry-standard folder structure and React best practices.

---

## ✨ Features

- 📰 Category-based news browsing
- 🔐 Firebase Email & Password Authentication
- 🔒 Private / Protected Routes for authenticated users
- 🔄 Dynamic navigation with active route highlighting
- 📱 Fully responsive design with Tailwind CSS + DaisyUI
- ⚡ Smooth client-side routing with React Router v6
- 🧭 Redirect after login using `useLocation` & `useNavigate`
- 🔃 Loading states handled with `useNavigation`

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React |
| Styling | Tailwind CSS, DaisyUI |
| Routing | React Router v6 |
| Auth | Firebase (Email/Password) |
| State | useState, useEffect |
| Navigation | useNavigate, useNavigation, useLocation |
| Hosting | Firebase Hosting |

---

## 📁 Project Structure

```
dragon-news/
├── public/
├── src/
│   ├── assets/
│   ├── components/        # Reusable UI components
│   ├── contexts/          # Auth context / context API
│   ├── layouts/           # Page layouts (Main, Auth, etc.)
│   ├── pages/             # Route-level page components
│   ├── routes/            # Route config & private route guard
│   ├── firebase/          # Firebase initialization
│   └── main.jsx
├── .env
├── index.html
└── package.json
```

---

## 🔐 Authentication Flow

- Users can **Register** and **Login** using Firebase Email/Password auth
- Protected pages are wrapped in a **Private Route** component
- Unauthenticated users are redirected to `/login`
- After login, users are redirected back to the originally requested page using `useLocation` state

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmadraiyano/dragon-news.git
cd dragon-news

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory and add your Firebase config:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

---

## 📦 Key Packages

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "firebase": "^10.x",
  "tailwindcss": "^3.x",
  "daisyui": "^4.x"
}
```

---

## 🌐 Deployment

The app is deployed on **Firebase Hosting**.

```bash
npm run build
firebase deploy
```

---

## 👤 Author

**Ahmad Raiyano**
- GitHub: [@ahmadraiyano](https://github.com/ahmadraiyano)