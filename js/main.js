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
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: {
      calories: 30,
      carbohydrates: 28,
      fiber: 0,
      protein: 35,
      fat: 14,
      sodium: 720,
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Creamy Garlic Parmesan Chicken",
    description:
      "Tender chicken breasts smothered in a rich, creamy garlic and parmesan sauce.",
    image: "../images/meal-2.jpg",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rate: 4.8,
    level: "easy",
    category: "chicken",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "2 tablespoons olive oil",
      "1 cup heavy cream",
      "1/2 cup chicken broth",
      "1 teaspoon garlic powder",
      "1 cup parmesan cheese, grated",
      "1 cup fresh spinach, chopped",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Season chicken breasts with salt, pepper, and garlic powder on both sides.",
      "Heat olive oil in a large skillet over medium-high heat and sear chicken for 5 minutes each side until golden and cooked through. Remove and set aside.",
      "In the same skillet, reduce heat and pour in chicken broth and heavy cream. Bring to a simmer.",
      "Stir in the grated parmesan cheese until the sauce thickens slightly.",
      "Add the chopped spinach and let it wilt in the sauce for 2 minutes.",
      "Return the chicken to the skillet, coat with the sauce, and serve hot over pasta or rice.",
    ],
    nutrition: {
      calories: 450,
      carbohydrates: 6,
      fiber: 1,
      protein: 42,
      fat: 28,
      sodium: 680,
    },
    tips: [
      "Make sure the skillet is hot before adding the chicken to lock in the juices.",
      "You can add sun-dried tomatoes for an extra burst of Italian flavor.",
      "If the sauce is too thick, splash in a little more chicken broth.",
    ],
  },
  {
    name: "Classic Beef Stir-Fry",
    description:
      "Juicy strips of beef sizzled with fresh vegetables in a savory ginger-soy sauce.",
    image: "../images/meal-3.jpg",
    prepTime: 20,
    cookTime: 10,
    servings: 3,
    rate: 4.7,
    level: "medium",
    category: "beef",
    ingredients: [
      "1 lb flank steak, thinly sliced",
      "2 cups broccoli florets",
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "1 tablespoon cornstarch",
    ],
    instructions: [
      "In a bowl, toss the sliced beef with cornstarch and one tablespoon of soy sauce. Let it marinate for 10 minutes.",
      "Heat sesame oil in a large wok or skillet over high heat.",
      "Add the beef and stir-fry quickly for 2-3 minutes until browned. Remove from the pan.",
      "Add garlic, broccoli, bell pepper, and carrots to the same pan. Stir-fry for 4 minutes until crisp-tender.",
      "Return beef to the pan, pour in the remaining soy sauce, and toss everything together for 1 minute until glossy.",
    ],
    nutrition: {
      calories: 320,
      carbohydrates: 15,
      fiber: 3,
      protein: 30,
      fat: 12,
      sodium: 890,
    },
    tips: [
      "Slice the beef against the grain so it stays incredibly tender.",
      "Keep the heat high; stir-fry is all about quick cooking at maximum temperature.",
      "Serve immediately over steamed jasmine rice.",
    ],
  },
  {
    name: "Avocado Toast with Poached Eggs",
    description:
      "Crispy sourdough topped with creamy mashed avocado, perfectly poached eggs, and red pepper flakes.",
    image: "../images/meal-4.jpg",
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    rate: 4.9,
    level: "easy",
    category: "breakfast",
    ingredients: [
      "2 slices of sourdough bread",
      "1 ripe avocado",
      "2 large eggs",
      "1 teaspoon lemon juice",
      "1/4 teaspoon red pepper flakes",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Toast the sourdough slices until golden and crunchy.",
      "In a small bowl, mash the avocado with lemon juice, salt, and pepper.",
      "Poach the eggs in simmering water with a drop of vinegar for 3 minutes until the whites are set but yolks are runny.",
      "Spread the mashed avocado evenly over the toasted bread.",
      "Top each slice with a poached egg, sprinkle with red pepper flakes, and serve immediately.",
    ],
    nutrition: {
      calories: 390,
      carbohydrates: 32,
      fiber: 8,
      protein: 16,
      fat: 22,
      sodium: 410,
    },
    tips: [
      "A drop of vinegar in the boiling water helps the egg whites hold their shape.",
      "Use fully ripe avocados - they should feel slightly soft to a gentle squeeze.",
      "Drizzle a little extra virgin olive oil on top for extra richness.",
    ],
  },
  {
    name: "Mediterranean Tuna Salad",
    description:
      "A fresh and zesty tuna salad packed with crisp cucumbers, tomatoes, olives, and a light lemon dressing.",
    image: "../images/meal-5.jpg",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    rate: 4.6,
    level: "easy",
    category: "salad",
    ingredients: [
      "2 cans of tuna in olive oil, drained",
      "1 cup cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/4 cup red onion, finely chopped",
      "1/4 cup kalamata olives, sliced",
      "2 tablespoons lemon juice",
      "1 tablespoon fresh parsley, chopped",
    ],
    instructions: [
      "In a large mixing bowl, flake the drained tuna with a fork.",
      "Add the diced cucumber, cherry tomatoes, red onion, and sliced olives to the bowl.",
      "Drizzle with fresh lemon juice and toss gently to combine all ingredients.",
      "Garnish with fresh parsley and season with a pinch of salt and pepper before serving.",
    ],
    nutrition: {
      calories: 260,
      carbohydrates: 8,
      fiber: 2,
      protein: 26,
      fat: 14,
      sodium: 540,
    },
    tips: [
      "Let the salad sit in the fridge for 15 minutes before serving to let the flavors marry.",
      "Tuna packed in olive oil tastes much richer in salads than tuna in water.",
      "You can crumble some feta cheese on top for a creamy, salty kick.",
    ],
  },
  {
    name: "Fudgy Chocolate Brownies",
    description:
      "Rich, dense, and super fudgy chocolate brownies with a crackly top.",
    image: "../images/meal-6.jpg",
    prepTime: 15,
    cookTime: 22,
    servings: 9,
    rate: 5.0,
    level: "medium",
    category: "dessert",
    ingredients: [
      "1/2 cup unsalted butter, melted",
      "1 cup granulated sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1/3 cup cocoa powder",
      "1/2 cup all-purpose flour",
      "1/2 cup chocolate chips",
    ],
    instructions: [
      "Preheat your oven to 350°F (175°C) and line an 8x8 inch baking pan with parchment paper.",
      "Whisk the melted butter and sugar together in a medium bowl.",
      "Add the eggs and vanilla extract; beat well until the mixture becomes slightly pale.",
      "Fold in the cocoa powder and flour gently until just combined (do not overmix).",
      "Stir in the chocolate chips and spread the batter smoothly into the prepared pan.",
      "Bake for 20-22 minutes. The center should be set but still soft. Let cool completely before slicing.",
    ],
    nutrition: {
      calories: 210,
      carbohydrates: 26,
      fiber: 2,
      protein: 3,
      fat: 11,
      sodium: 95,
    },
    tips: [
      "Do not overbake! A toothpick inserted in the center should come out with a few moist crumbs.",
      "Using room temperature eggs helps them blend into the sugar-butter mixture better.",
      "For clean squares, wipe your knife with a warm, damp cloth between each cut.",
    ],
  },
];

// console.log(meals[0]);

function displayMeal() {
  var title = document.getElementById("title");
  title.innerText = meals[idx].name;
  var desc = document.getElementById("desc");
  desc.innerText = meals[idx].description;
  var mealImg = document.getElementById("mealImg");
  mealImg.src = meals[idx].image;

  var rate = document.getElementById("rate");
  rate.innerText = meals[idx].rate;

  var prepTime = document.getElementById("prepTime");
  prepTime.innerText = meals[idx].prepTime;

  var cookTime = document.getElementById("cookTime");
  cookTime.innerText = meals[idx].cookTime;

  var serving = document.getElementById("servings");
  serving.innerText = meals[idx].servings;

  var level = document.getElementById("level");
  level.innerText = meals[idx].level;

  var category = document.getElementById("category");
  category.innerText = meals[idx].category;

  var ingredients = document.getElementById("ingredient");
  ingredients.innerHTML = ``;
  for (var i = 0; i < meals[idx].ingredients.length; i++) {
    // console.log(meals[idx].ingredients[i]);

    ingredients.innerHTML += `<div class="step d-flex align-items-center gap-2">
                        <div class="num">${i + 1}</div>
                        <p class="m-0">${meals[idx].ingredients[i]}</p>
                      </div>`;
  }

  var instructions = document.getElementById("instructions");
  instructions.innerHTML = ``;
  for (var i = 0; i < meals[idx].instructions.length; i++) {
    instructions.innerHTML += `<div class="instructions d-flex align-items-center gap-2">
                        <span class="d-flex align-items-center">${i + 1} </span>
                        <p class="m-0">${meals[idx].instructions[i]}</p>
                      </div>`;
  }
  // 1. امسك الحاوية بتاعة الـ nutrition
  var nutritionContainer = document.getElementById("calorie");
  nutritionContainer.innerHTML = ``;

  var nutritionIcons = {
    calories: "fa-fire",
    carbohydrates: "fa-wheat-awn",
    fiber: "fa-seedling",
    protein: "fa-egg",
    fat: "fa-bacon",
    sodium: "fa-bacon",
  };

  for (var key in meals[idx].nutrition) {
    var value = meals[idx].nutrition[key];
    var iconClass = nutritionIcons[key] || "fa-chart-pie";

    nutritionContainer.innerHTML += `
      <div class="calorie d-flex justify-content-between align-items-center mb-2">
        <div class="left d-flex align-items-center gap-2">
          <div class="icon d-flex align-items-center">
            <i class="fa-solid ${iconClass}"></i>
          </div>
          <span class="title text-capitalize">${key}</span>
        </div>
        <span class="right"> ${value} ${key === "calories" ? "kcal" : "g"} </span>
      </div>`;
  }

  var tips = document.getElementById('tip');
  tips.innerHTML = ``;
  for (var i = 0; i < meals[idx].tips.length; i++){
    tips.innerHTML+=` <div class="tip d-flex align-items-center gap-2">
                        <div class="done">
                          <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <p class="m-0" >${meals[idx].tips[i]}</p>
                      </div>`
  }
}

var idx = Math.floor(Math.random() * meals.length);

displayMeal();

function changeIdx() {
  idx = Math.floor(Math.random() * meals.length);
  console.log(idx);
  displayMeal();
}
