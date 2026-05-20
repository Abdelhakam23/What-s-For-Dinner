# 🍽️ What's For Dinner

<div align="center">

![What's For Dinner Banner](https://img.shields.io/badge/What's_For_Dinner-Your_Daily_Meal_Inspiration-e74432?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMSAzdjRsLTMgMlYzSDZ2NGwtMSAxdjEwaDF2LTVoMXY1aDFWOGwtMS0xVjNIMTF6TTcgMTNoMnYxSDd6TTE1LjUgM0MxMy41IDMgMTIgNi41IDEyIDloMXYxMmgydi0xMmgxQzE2IDYuNSAxNy41IDMgMTUuNSAzeiIvPjwvc3ZnPg==)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

**Tonight's dinner — sorted in seconds. Discover, cook, and enjoy. 🔥**

[🚀 Live Demo](https://what-for-dinner.netlify.app/) • [📸 Preview](#-preview) • [✨ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack)

</div>

---

## 📖 About The Project

**What's For Dinner** is a clean, elegant web app that solves one of life's most relatable daily struggles:

> *"What should we eat tonight?"* 🤷

Instead of wasting time scrolling through endless options, the app instantly surfaces a beautifully presented random recipe — complete with every detail you need, from the first ingredient to the last step.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🎲 **Random Recipes** | One click reveals a new curated recipe every time |
| 🥗 **Ingredients List** | Full ingredient list with precise quantities |
| 📋 **Step-by-Step Instructions** | Numbered, clear cooking steps from start to finish |
| 📊 **Nutrition Facts** | Calories, protein, carbs, fat, fiber, and sodium |
| 💡 **Chef's Tips** | Pro tips that actually make a difference in the final dish |
| ⏱️ **Time & Servings** | Prep time + cook time + number of servings at a glance |
| ⭐ **Ratings** | Community rating displayed for each recipe |
| 📱 **Fully Responsive** | Works flawlessly on mobile, tablet, and desktop |

---

## 📸 Preview



https://github.com/user-attachments/assets/5b0fc314-5ae6-4ad3-bcfe-3dfe1ab9ac85




---

## 🛠️ Tech Stack

```
what's-for-dinner/
├── 🧱 HTML5          — Page structure and semantic markup
├── 🎨 CSS3           — Custom styles + CSS variables + Responsive design
├── ⚡ Vanilla JS     — Display logic and DOM manipulation
├── 🅱️ Bootstrap 5   — Grid system, Navbar, Tabs, and Pills components
└── 🔣 Font Awesome   — All UI icons
```

---

## 📁 Project Structure

```
what's-for-dinner/
│
├── 📄 index.html               # Main page and full HTML structure
│
├── 📂 css/
│   ├── style.css               # Core custom styles
│   ├── media.css               # Responsive breakpoints
│   ├── bootstrap.min.css       # Bootstrap framework
│   └── all.min.css             # Font Awesome icons
│
├── 📂 js/
│   ├── main.js                 # Recipe data + display logic
│   └── bootstrap.bundle.min.js
│
└── 📂 images/
    ├── favicon.png
    ├── mahmoud.jpeg            # Profile picture
    ├── meal-1.jpg              # Honey Garlic Salmon
    ├── meal-2.jpg              # Creamy Garlic Parmesan Chicken
    ├── meal-3.jpg              # Classic Beef Stir-Fry
    ├── meal-4.jpg              # Avocado Toast with Poached Eggs
    ├── meal-5.jpg              # Mediterranean Tuna Salad
    └── meal-6.jpg              # Fudgy Chocolate Brownies
```

---

## 🍴 Current Recipes

| # | Name | Difficulty | Category | Rating | Total Time |
|---|------|------------|----------|--------|------------|
| 1 | 🐟 Honey Garlic Salmon | Easy | Seafood | ⭐ 4.9 | 25 min |
| 2 | 🍗 Creamy Garlic Parmesan Chicken | Easy | Chicken | ⭐ 4.8 | 35 min |
| 3 | 🥩 Classic Beef Stir-Fry | Medium | Beef | ⭐ 4.7 | 30 min |
| 4 | 🥑 Avocado Toast with Poached Eggs | Easy | Breakfast | ⭐ 4.9 | 10 min |
| 5 | 🥗 Mediterranean Tuna Salad | Easy | Salad | ⭐ 4.6 | 10 min |
| 6 | 🍫 Fudgy Chocolate Brownies | Medium | Dessert | ⭐ 5.0 | 37 min |

---

## 🚀 Getting Started

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/whats-for-dinner.git

# 2. Navigate into the project folder
cd whats-for-dinner

# 3. Open index.html directly in your browser
# Or use the Live Server extension in VS Code
```

> **Note:** This is a pure static HTML/CSS/JS project — no Node, no build tools, no backend required. Just open the file and it works. ✅

### With VS Code Live Server

```
1. Open the project folder in VS Code
2. Install the "Live Server" extension
3. Right-click on index.html
4. Select "Open with Live Server"
```

---

## 🎨 Color System

```css
:root {
  --main-color: #e74432;     /* Primary red-orange accent */
}

/* Gradients */
background: linear-gradient(to right, #ff6900, #fb2c36); /* "Try Another" button */
background: linear-gradient(#fef8ed, #fff9eb, #fffbeb);   /* Main background */

/* Supporting colors */
#ffedd4   /* Navbar border */
#ffe4dc   /* Action icon backgrounds */
#dbf9e7   /* Level badge background */
#dbeafe   /* Category badge background */
#fffbea   /* Chef's tips background */
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile  */        → Default styles
/* Tablet  */  768px → font-size: 110%
/* Laptop  */  992px → Fixed image height (650px), scrollable info panel
/* Desktop */ 1200px → font-size: 110%
```

---

## 🧩 How It Works

### 1. Recipe Data (`main.js`)
Each recipe is a JavaScript object with all the data needed to render the full UI:

```js
var meals = [
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image: "../images/meal-1.jpg",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    rate: 4.9,
    level: "easy",
    category: "seafood",
    ingredients: [ ... ],
    instructions: [ ... ],
    nutrition: { calories, carbohydrates, fiber, protein, fat, sodium },
    tips: [ ... ]
  },
  // ... more recipes
];
```

### 2. Rendering a Recipe (`displayMeal`)
Grabs all DOM elements and populates them dynamically from the current recipe object:

```js
function displayMeal() {
  title.innerText = meals[idx].name;
  desc.innerText = meals[idx].description;
  // ...

  // Dynamically generates ingredient, instruction,
  // nutrition, and tip HTML from the data arrays
}
```

### 3. Randomization (`changeIdx`)
A random index is picked on page load and again each time the button is clicked:

```js
// On page load
var idx = Math.floor(Math.random() * meals.length);
displayMeal();

// On button click
function changeIdx() {
  idx = Math.floor(Math.random() * meals.length);
  displayMeal();
}
```

---

## 🔮 Planned Features

- [ ] 🔍 **Search & Filter** — Filter recipes by category, difficulty, or total time
- [ ] 🔖 **Saved Recipes** — Bookmark favorites and persist them with `localStorage`
- [ ] 🕐 **Recently Viewed** — Track and revisit your recipe history
- [ ] 🌙 **Dark Mode** — A warm dark theme for late-night cooking sessions
- [ ] 🔗 **Share Recipe** — Share a recipe via link or as an image
- [ ] ➕ **Add Your Own** — Let users submit their own recipes
- [ ] 🌐 **API Integration** — Connect to TheMealDB API for thousands of recipes
- [ ] 📲 **PWA Support** — Make it installable as a Progressive Web App

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the project

# 2. Create a new branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "Add: amazing feature ✨"

# 4. Push to your branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

---

## 👨‍💻 Author

<div align="center">

Built with ❤️ and a without ☕ because i don't love it HAHAHAHAHAHA

**⭐ If you find this project useful, a star would mean a lot!**

</div>

---

<div align="center">
<sub>What's For Dinner © 2026 — Bon Appétit! 🍽️</sub>
</div>
