import { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
    price: 28.99,
    category: "Mains",
    image: "/placeholder.svg",
    rating: 4.8,
    prepTime: "25 min",
    isVegetarian: true,
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
    price: 32.99,
    category: "Mains",
    image: "/placeholder.svg",
    rating: 4.9,
    prepTime: "20 min",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, parmesan, croutons, and classic caesar dressing",
    price: 16.99,
    category: "Starters",
    image: "/placeholder.svg",
    rating: 4.6,
    prepTime: "10 min",
    isVegetarian: true,
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Rich dark chocolate soufflé with vanilla ice cream",
    price: 12.99,
    category: "Desserts",
    image: "/placeholder.svg",
    rating: 4.9,
    prepTime: "30 min",
    isVegetarian: true,
  },
  {
    id: 5,
    name: "Spicy Pasta Arrabbiata",
    description:
      "Penne pasta in spicy tomato sauce with garlic and red peppers",
    price: 22.99,
    category: "Mains",
    image: "/placeholder.svg",
    rating: 4.7,
    prepTime: "15 min",
    isVegetarian: true,
    isSpicy: true,
  },
  {
    id: 6,
    name: "Bruschetta Trio",
    description: "Three varieties: tomato basil, mushroom, and ricotta honey",
    price: 14.99,
    category: "Starters",
    image: "/placeholder.svg",
    rating: 4.5,
    prepTime: "8 min",
    isVegetarian: true,
  },
];
