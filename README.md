# 🛍️ Yabous

A modern e-commerce frontend built with **React 19**, **Vite 6**, **TailwindCSS 4**, and **Redux Toolkit**, using data fetched from the [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/).

website Link : http://yabous-salihbezais-projects.vercel.app/

## ✨ Features

- ⚡ Built with **Vite** for fast development and optimized production builds
- 🎨 Styled using **TailwindCSS**
- 🛒 Global state management with **Redux Toolkit**
- 🔥 Smooth UX with **React Hot Toast** notifications
- 🌙 Light/Dark mode with **next-themes**
- 📧 Email service integration via **EmailJS**
- ⭐ Product ratings with **React Star Ratings**
- 📦 Dynamic product data fetched from an external API
- 🎠 Interactive sliders using **Swiper.js**
- 🔄 Routing with **React Router DOM v7**
- 🚀 Fully responsive design
- 🛒 shopping cart functionality
- 💳 payment integration (Stripe, PayPal)
- 🔒 Authentication (Sign in / Sign up)

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite 6
- **Styling:** TailwindCSS 4, Emotion
- **State Management:** Redux Toolkit
- **API:** [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/)
- **UI Components:** MUI Icons, Heroicons, React Icons
- **Other Libraries:** Swiper, React Countdown, React Hot Toast, EmailJS

## 📸 Screenshots

> _Coming soon: add images of your application here!_

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/salihbezai/yabous.git
cd store
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The app should now be running at `http://localhost:5173` by default.

## ⚙️ Available Scripts

| Script            | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Run the app in development mode  |
| `npm run build`   | Create a production build        |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint to check code quality |

## 📦 API Reference

- [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/)

Example product object:

```json
{
  "id": 1,
  "title": "Product Title",
  "price": 100,
  "description": "Product description",
  "images": ["image1.jpg", "image2.jpg"],
  "category": {
    "id": 1,
    "name": "Clothes",
    "image": "category-image.jpg"
  }
}
```

## 🧪 Future Improvements

- 📈 Add analytics (Google Analytics)
- 📝 Unit & Integration tests (Jest + React Testing Library)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](https://github.com/salihbezai/store/issues) or submit a pull request.

## 📃 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

## 📬 Contact

- GitHub: [salihbezai](https://github.com/salihbezai)
- Email: salihbezai98@gmail.com
