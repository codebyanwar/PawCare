# 🐾 PawCare – Pet Care in Winter

PawCare is a modern pet care platform designed to help pet owners easily explore winter pet-care services, view service details, book appointments, and manage their profiles. The website features a clean, responsive UI with authentication, service booking, expert tips, and a friendly winter-themed design — built so pet owners can keep their furry friends warm, safe, and healthy through the cold season.

## 🌐 Live Site

[Live URL Here](#)

## 🎯 Purpose

Many pet owners struggle to find trustworthy, well-organized information about winter pet care in one place. PawCare brings together service discovery, expert-backed tips, and easy booking into a single, approachable platform — so pet parents can make informed decisions for their pets without hopping between multiple sources.

## ✨ Key Features

- **Responsive Layout** – Fully responsive navbar, footer, and page content across mobile, tablet, and desktop.
- **Authentication (Firebase)**
  - Email/Password login and registration with password validation (uppercase, lowercase, minimum 6 characters).
  - Google Sign-In for one-click login and registration.
  - Forgot Password flow with a dedicated reset form.
  - Auth-aware Navbar — shows the logged-in user's avatar with their display name on hover, and a Logout button; shows Login/Register when logged out.
- **Protected Routes** – The Service Details page is only accessible to logged-in users; unauthenticated visitors are redirected to Login and returned to their intended page after signing in.
- **Home Page**
  - Winter-themed hero section.
  - Popular Winter Care Services, dynamically rendered from a JSON dataset (image, name, rating, price, and a "View Details" button).
  - Winter Care Tips for Pets section.
  - Meet Our Expert Vets / Team section.
  - An additional relevant section highlighting the platform's value to pet owners.
- **Service Details Page** – Displays all service fields and includes a "Book Service" form (Name, Email) with a success toast on submission.
- **My Profile Page** – Displays the logged-in user's name, email, and photo, with an "Update Profile" feature to update name and image using Firebase's `updateProfile()`.
- **Toast Notifications** – Success and error feedback throughout the app using `react-hot-toast`.
- **Crash-Free Routing** – Built with React Router's data APIs (`loader`, `useLoaderData`) so routes load and reload cleanly with no console errors.
- **Environment Variables** – Firebase configuration keys are secured using environment variables and excluded from version control.

## 🛠️ Tech Stack & NPM Packages

- **React** – Core UI library
- **React Router** – Client-side routing, nested layouts, and data loaders
- **Tailwind CSS** – Utility-first styling
- **DaisyUI** – Tailwind component library for consistent UI elements
- **Motion (Framer Motion)** – Subtle animations and transitions
- **Firebase** – Authentication (Email/Password, Google) and profile management
- **react-icons** – Icon set used across the UI
- **react-hot-toast** – Toast notifications for success/error states

## 🔑 Environment Variables

Create a `.env` file in the project root with your Firebase configuration:

```
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone <your-repo-url>

# Move into the project directory
cd pawcare

# Install dependencies
npm install

# Add your .env file with Firebase config (see above)

# Start the development server
npm run dev
```

## 📁 Project Structure (Overview)

```
src/
├── assets/
├── Component/
├── Layout/
├── Loaders/
├── Pages/
├── Provider/       # AuthProvider (Firebase context)
├── Routes/
```

## 📌 Notes

- No backend server is used — services and tips are served from local JSON data, and the booking form is a front-end-only simulation (success toast, no persistence).
- Deployed as a Single Page Application with routing configured to prevent errors on page reload.