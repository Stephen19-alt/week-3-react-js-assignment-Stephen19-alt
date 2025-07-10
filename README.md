# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📝 React Task Manager App

A responsive and modern **Task Manager** app built with **React**, **Vite**, **Tailwind CSS**, and **ShadCN UI**.  
This app demonstrates best practices in **component architecture**, **state management**, **custom hooks**, and **API integration** — all without using `react-router-dom`.

---

## 📦 Tech Stack

- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 💄 ShadCN UI (Radix-based UI components)
- 🌗 Dark/Light Theme Support
- 🌐 JSONPlaceholder Public API
- 🧠 Custom Hook (`useLocalStorage`)

---

## 🧑‍💻 Features

### ✅ Task Manager
- Add, delete, complete tasks
- Filter tasks (All / Active / Completed)
- Persist tasks in browser using `localStorage`

### 🌐 API Integration
- Fetch posts from `JSONPlaceholder`
- Search/filter posts by title
- Display in a responsive grid layout

### 🧩 Component Architecture
- Reusable `Button`, `Card`, `Input`, `Navbar`, `Footer`
- Shared layout system

### 🎛 Theme Toggle
- Toggle between dark/light mode using Tailwind's class-based strategy

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-task-manager.git
cd react-task-manager
2. Install Dependencies

pnpm install

3. Add ShadCN Components
Install required ShadCN components if not already:

pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button input card

4. Run the Dev Server

pnpm run dev
Visit: http://localhost:5173

🧪 Example API Request
Fetch Posts:

GET https://jsonplaceholder.typicode.com/posts
Example Response:

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit..."
}
🗂 Project Structure

src/
├── components/
│   ├── ThemeToggle.jsx
│   └── ui/ (ShadCN components)
├── context/
├── hooks/
│   └── useLocalStorage.js
├── layout/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── TaskManager.jsx
│   └── PostList.jsx
├── App.jsx
└── main.jsx
📸 Screenshots
You can include screenshots here after UI is built and styled.

📝 License
This project is licensed under the MIT License.

💡 Future Improvements
Drag and drop reordering of tasks

User authentication

Saving tasks to a backend (Firebase or Express API)

Unit and integration testing with Vitest

🙋‍♀️ Author
Built by Stephen Okoth
For educational and project demonstration purposes.

