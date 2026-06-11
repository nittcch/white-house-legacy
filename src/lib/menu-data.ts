export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  veg?: boolean;
  spicy?: boolean;
  bestseller?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "veg-soups",
    name: "Veg Soups",
    items: [
      { name: "Tomato Soup", price: "₹80", veg: true },
      { name: "Cream of Mushroom", price: "₹90", veg: true },
      { name: "Sweet Corn Soup", price: "₹85", veg: true },
      { name: "Hot & Sour Soup", price: "₹85", veg: true, spicy: true },
      { name: "Manchow Soup", price: "₹90", veg: true, spicy: true },
    ],
  },
  {
    id: "non-veg-soups",
    name: "Non Veg Soups",
    items: [
      { name: "Chicken Clear Soup", price: "₹100", veg: false },
      { name: "Chicken Hot & Sour", price: "₹110", veg: false, spicy: true },
      { name: "Mutton Soup", price: "₹120", veg: false },
      { name: "Seafood Soup", price: "₹130", veg: false },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      { name: "Green Salad", price: "₹70", veg: true },
      { name: "Russian Salad", price: "₹90", veg: true },
      { name: "Chicken Salad", price: "₹120", veg: false },
    ],
  },
  {
    id: "veg-tandoori",
    name: "Veg Tandoori Starters",
    items: [
      { name: "Paneer Tikka", price: "₹220", veg: true, bestseller: true },
      { name: "Paneer Malai Tikka", price: "₹240", veg: true },
      { name: "Veg Seekh Kebab", price: "₹180", veg: true },
      { name: "Tandoori Mushroom", price: "₹200", veg: true },
      { name: "Stuffed Tandoori Aloo", price: "₹170", veg: true },
    ],
  },
  {
    id: "non-veg-tandoori",
    name: "Non Veg Tandoori Starters",
    items: [
      { name: "Chicken Tikka", price: "₹250", veg: false, bestseller: true },
      { name: "Chicken Malai Tikka", price: "₹270", veg: false },
      { name: "Chicken Seekh Kebab", price: "₹240", veg: false },
      { name: "Tandoori Chicken (Half)", price: "₹220", veg: false, bestseller: true },
      { name: "Tandoori Chicken (Full)", price: "₹380", veg: false },
      { name: "Mutton Seekh Kebab", price: "₹300", veg: false },
      { name: "Fish Tikka", price: "₹320", veg: false },
      { name: "Tandoori Prawns", price: "₹350", veg: false },
    ],
  },
  {
    id: "veg-chinese",
    name: "Veg Chinese Starters",
    items: [
      { name: "Veg Manchurian (Dry)", price: "₹180", veg: true },
      { name: "Veg Manchurian (Gravy)", price: "₹190", veg: true },
      { name: "Chilli Paneer (Dry)", price: "₹220", veg: true, spicy: true },
      { name: "Chilli Paneer (Gravy)", price: "₹230", veg: true, spicy: true },
      { name: "Crispy Veg", price: "₹170", veg: true },
      { name: "Spring Rolls", price: "₹150", veg: true },
    ],
  },
  {
    id: "non-veg-chinese",
    name: "Non Veg Chinese Starters",
    items: [
      { name: "Chicken Manchurian (Dry)", price: "₹230", veg: false },
      { name: "Chicken Manchurian (Gravy)", price: "₹240", veg: false },
      { name: "Chilli Chicken (Dry)", price: "₹250", veg: false, spicy: true, bestseller: true },
      { name: "Chilli Chicken (Gravy)", price: "₹260", veg: false, spicy: true },
      { name: "Chicken Lollipop", price: "₹240", veg: false },
      { name: "Dragon Chicken", price: "₹280", veg: false, spicy: true },
      { name: "Fish Manchurian", price: "₹300", veg: false },
    ],
  },
  {
    id: "dal",
    name: "Dal",
    items: [
      { name: "Dal Fry", price: "₹140", veg: true },
      { name: "Dal Tadka", price: "₹150", veg: true },
      { name: "Dal Makhani", price: "₹180", veg: true, bestseller: true },
      { name: "Yellow Dal", price: "₹130", veg: true },
    ],
  },
  {
    id: "veg-main",
    name: "Veg Main Course",
    items: [
      { name: "Mix Veg", price: "₹160", veg: true },
      { name: "Veg Kolhapuri", price: "₹170", veg: true, spicy: true },
      { name: "Aloo Gobi", price: "₹140", veg: true },
      { name: "Bhindi Masala", price: "₹150", veg: true },
      { name: "Chana Masala", price: "₹150", veg: true },
      { name: "Baingan Bharta", price: "₹150", veg: true },
      { name: "Mushroom Masala", price: "₹180", veg: true },
      { name: "Palak Paneer", price: "₹200", veg: true, bestseller: true },
    ],
  },
  {
    id: "paneer-main",
    name: "Paneer Main Course",
    items: [
      { name: "Paneer Butter Masala", price: "₹220", veg: true, bestseller: true },
      { name: "Shahi Paneer", price: "₹230", veg: true },
      { name: "Kadai Paneer", price: "₹220", veg: true },
      { name: "Paneer Tikka Masala", price: "₹240", veg: true },
      { name: "Paneer Bhurji", price: "₹210", veg: true },
      { name: "Mutter Paneer", price: "₹200", veg: true },
      { name: "Paneer Pasanda", price: "₹250", veg: true },
    ],
  },
  {
    id: "non-veg-main",
    name: "Non Veg Main Course",
    items: [
      { name: "Butter Chicken", price: "₹280", veg: false, bestseller: true },
      { name: "Chicken Tikka Masala", price: "₹300", veg: false },
      { name: "Chicken Curry", price: "₹250", veg: false },
      { name: "Kadai Chicken", price: "₹260", veg: false },
      { name: "Chicken Korma", price: "₹280", veg: false },
      { name: "Chicken Hyderabadi", price: "₹300", veg: false },
      { name: "Mutton Curry", price: "₹320", veg: false },
      { name: "Mutton Rogan Josh", price: "₹340", veg: false, bestseller: true },
      { name: "Fish Curry", price: "₹300", veg: false },
      { name: "Prawn Curry", price: "₹350", veg: false },
      { name: "Egg Curry", price: "₹180", veg: false },
      { name: "Murgh Musallam", price: "₹450", veg: false, bestseller: true },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    items: [
      { name: "Tandoori Roti", price: "₹25", veg: true },
      { name: "Butter Roti", price: "₹30", veg: true },
      { name: "Naan", price: "₹35", veg: true },
      { name: "Butter Naan", price: "₹40", veg: true, bestseller: true },
      { name: "Garlic Naan", price: "₹50", veg: true },
      { name: "Cheese Naan", price: "₹80", veg: true },
      { name: "Kulcha", price: "₹45", veg: true },
      { name: "Lachha Paratha", price: "₹45", veg: true },
      { name: "Missi Roti", price: "₹35", veg: true },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      { name: "Steamed Rice", price: "₹80", veg: true },
      { name: "Jeera Rice", price: "₹90", veg: true },
      { name: "Veg Pulao", price: "₹120", veg: true },
      { name: "Peas Pulao", price: "₹110", veg: true },
      { name: "Kashmiri Pulao", price: "₹150", veg: true },
      { name: "Biryani Rice", price: "₹100", veg: true },
    ],
  },
  {
    id: "biryani",
    name: "Biryani",
    items: [
      { name: "Veg Biryani", price: "₹180", veg: true },
      { name: "Paneer Biryani", price: "₹200", veg: true },
      { name: "Chicken Biryani", price: "₹250", veg: false, bestseller: true },
      { name: "Chicken Hyderabadi Dum Biryani", price: "₹300", veg: false, bestseller: true },
      { name: "Mutton Biryani", price: "₹320", veg: false },
      { name: "Egg Biryani", price: "₹180", veg: false },
    ],
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    items: [
      { name: "Veg Fried Rice", price: "₹150", veg: true },
      { name: "Schezwan Veg Fried Rice", price: "₹170", veg: true, spicy: true },
      { name: "Chicken Fried Rice", price: "₹200", veg: false },
      { name: "Schezwan Chicken Fried Rice", price: "₹220", veg: false, spicy: true },
      { name: "Egg Fried Rice", price: "₹160", veg: false },
      { name: "Prawn Fried Rice", price: "₹280", veg: false },
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    items: [
      { name: "Veg Hakka Noodles", price: "₹150", veg: true },
      { name: "Schezwan Veg Noodles", price: "₹170", veg: true, spicy: true },
      { name: "Chicken Hakka Noodles", price: "₹200", veg: false },
      { name: "Chicken Schezwan Noodles", price: "₹220", veg: false, spicy: true },
      { name: "Egg Noodles", price: "₹160", veg: false },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: [
      { name: "Veg Sandwich", price: "₹80", veg: true },
      { name: "Cheese Sandwich", price: "₹100", veg: true },
      { name: "Grilled Sandwich", price: "₹110", veg: true },
      { name: "Chicken Sandwich", price: "₹120", veg: false },
      { name: "Club Sandwich", price: "₹150", veg: false },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      { name: "Veg Pakora", price: "₹70", veg: true },
      { name: "Paneer Pakora", price: "₹100", veg: true },
      { name: "Chicken Pakora", price: "₹120", veg: false },
      { name: "Samosa (2 pcs)", price: "₹40", veg: true },
      { name: "French Fries", price: "₹80", veg: true },
      { name: "Onion Rings", price: "₹90", veg: true },
    ],
  },
  {
    id: "chaat",
    name: "Chaat",
    items: [
      { name: "Pani Puri", price: "₹50", veg: true },
      { name: "Bhel Puri", price: "₹60", veg: true },
      { name: "Sev Puri", price: "₹60", veg: true },
      { name: "Dahi Puri", price: "₹70", veg: true },
      { name: "Dahi Bhalla", price: "₹80", veg: true },
      { name: "Papdi Chaat", price: "₹70", veg: true },
      { name: "Aloo Tikki Chaat", price: "₹80", veg: true },
    ],
  },
  {
    id: "accompaniments",
    name: "Accompaniments",
    items: [
      { name: "Papad (2 pcs)", price: "₹30", veg: true },
      { name: "Masala Papad", price: "₹40", veg: true },
      { name: "Raita", price: "₹50", veg: true },
      { name: "Mixed Raita", price: "₹60", veg: true },
      { name: "Pickle", price: "₹30", veg: true },
      { name: "Green Chutney", price: "₹20", veg: true },
    ],
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    items: [
      { name: "Vanilla Milkshake", price: "₹80", veg: true },
      { name: "Chocolate Milkshake", price: "₹90", veg: true },
      { name: "Strawberry Milkshake", price: "₹90", veg: true },
      { name: "Mango Milkshake", price: "₹100", veg: true, bestseller: true },
      { name: "Oreo Milkshake", price: "₹110", veg: true },
      { name: "Kit Kat Milkshake", price: "₹120", veg: true },
      { name: "Cold Coffee", price: "₹90", veg: true },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Fresh Lime Soda", price: "₹50", veg: true },
      { name: "Masala Chaas", price: "₹40", veg: true },
      { name: "Jaljeera", price: "₹40", veg: true },
      { name: "Soft Drinks", price: "₹40", veg: true },
      { name: "Mineral Water (1L)", price: "₹30", veg: true },
      { name: "Fresh Juice", price: "₹80", veg: true },
      { name: "Mojito (Virgin)", price: "₹90", veg: true },
    ],
  },
];
