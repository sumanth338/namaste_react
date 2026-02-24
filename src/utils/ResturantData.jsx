const restaurants = [
  {
    id: 1,
    name: "Biryani House",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&fit=crop",
    rating: 4.6,
    cuisine: "Hyderabadi",
    deliveryTime: "25-30 mins",
    menu: [
      { id: 1, name: "Hyderabadi Biryani", price: 350, description: "Authentic Hyderabadi biryani with basmati rice" },
      { id: 2, name: "Chicken Biryani", price: 380, description: "Spicy chicken biryani with tender pieces" },
      { id: 3, name: "Mutton Biryani", price: 450, description: "Rich mutton biryani with aromatic spices" },
      { id: 4, name: "Veg Biryani", price: 280, description: "Delicious vegetarian biryani with mixed vegetables" },
      { id: 5, name: "Egg Biryani", price: 320, description: "Flavorful egg biryani with boiled eggs" },
      { id: 6, name: "Raita", price: 80, description: "Cool yogurt side dish" }
    ]
  },
  {
    id: 2,
    name: "Punjab Da Dhaba",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&fit=crop",
    rating: 4.4,
    cuisine: "North Indian",
    deliveryTime: "30-35 mins",
    menu: [
      { id: 1, name: "Butter Chicken", price: 420, description: "Creamy tomato-based curry with tender chicken" },
      { id: 2, name: "Dal Makhani", price: 280, description: "Creamy black lentils cooked overnight" },
      { id: 3, name: "Paneer Tikka", price: 320, description: "Grilled cottage cheese with spices" },
      { id: 4, name: "Naan", price: 60, description: "Fresh baked Indian bread" },
      { id: 5, name: "Garlic Naan", price: 80, description: "Naan topped with garlic and butter" },
      { id: 6, name: "Lassi", price: 100, description: "Sweet yogurt drink" }
    ]
  },
  {
    id: 3,
    name: "Dosa Junction",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dw=400&fit=crop",
    rating: 4.7,
    cuisine: "South Indian",
    deliveryTime: "20-25 mins",
    menu: [
      { id: 1, name: "Masala Dosa", price: 120, description: "Crispy dosa with spiced potato filling" },
      { id: 2, name: "Plain Dosa", price: 80, description: "Classic crispy dosa" },
      { id: 3, name: "Rava Dosa", price: 140, description: "Crispy semolina dosa" },
      { id: 4, name: "Idli Sambar", price: 100, description: "Steamed rice cakes with lentil curry" },
      { id: 5, name: "Vada", price: 60, description: "Crispy lentil donuts" },
      { id: 6, name: "Filter Coffee", price: 50, description: "Traditional South Indian coffee" }
    ]
  },
  {
    id: 4,
    name: "Chaat Bazaar",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&fit=crop",
    rating: 4.3,
    cuisine: "Street Food",
    deliveryTime: "15-20 mins",
    menu: [
      { id: 1, name: "Pani Puri", price: 80, description: "Crispy puris filled with spicy water" },
      { id: 2, name: "Bhel Puri", price: 100, description: "Puffed rice with chutneys and vegetables" },
      { id: 3, name: "Pav Bhaji", price: 150, description: "Spiced vegetable curry with buttered bread" },
      { id: 4, name: "Samosa", price: 40, description: "Crispy pastry filled with spiced potatoes" },
      { id: 5, name: "Dahi Puri", price: 90, description: "Puris filled with yogurt and chutneys" },
      { id: 6, name: "Aloo Tikki", price: 70, description: "Spiced potato patties" }
    ]
  },
  {
    id: 5,
    name: "Rajdhani Thali",
    image: "https://images.unsplash.com/photo-1711153419402-336ee48f2138?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&fit=crop",
    rating: 4.5,
    cuisine: "Rajasthani",
    deliveryTime: "30-35 mins",
    menu: [
      { id: 1, name: "Rajasthani Thali", price: 450, description: "Complete meal with dal, vegetables, roti, rice" },
      { id: 2, name: "Dal Baati Churma", price: 380, description: "Traditional Rajasthani dish" },
      { id: 3, name: "Gatte Ki Sabzi", price: 320, description: "Gram flour dumplings in spicy curry" },
      { id: 4, name: "Ker Sangri", price: 280, description: "Traditional desert vegetables" },
      { id: 5, name: "Bajra Roti", price: 50, description: "Millet flatbread" },
      { id: 6, name: "Gulab Jamun", price: 60, description: "Sweet milk dumplings in syrup" }
    ]
  },
  {
    id: 6,
    name: "Kolkata Rolls",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?w=400&fit=crop",
    rating: 4.2,
    cuisine: "Bengali",
    deliveryTime: "20-25 mins",
    menu: [
      { id: 1, name: "Chicken Roll", price: 180, description: "Spiced chicken wrapped in paratha" },
      { id: 2, name: "Egg Roll", price: 120, description: "Scrambled egg wrapped in paratha" },
      { id: 3, name: "Mutton Roll", price: 220, description: "Tender mutton wrapped in paratha" },
      { id: 4, name: "Paneer Roll", price: 150, description: "Spiced paneer wrapped in paratha" },
      { id: 5, name: "Kathi Roll", price: 200, description: "Special kebab roll" },
      { id: 6, name: "Mishti Doi", price: 80, description: "Sweet yogurt dessert" }
    ]
  }
];

export default restaurants;
