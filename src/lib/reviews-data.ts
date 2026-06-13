import reviewPhoto1 from "@/assets/review-photo-1.jpg.asset.json";
import reviewPhoto2 from "@/assets/review-photo-2.jpg.asset.json";
import reviewPhoto3 from "@/assets/review-photo-3.jpg.asset.json";
import reviewPhoto4 from "@/assets/review-photo-4.jpg.asset.json";
import reviewPhoto5 from "@/assets/review-photo-5.jpg.asset.json";
import reviewPhoto6 from "@/assets/review-photo-6.jpg.asset.json";

export interface Review {
  name: string;
  rating: number;
  text: string;
  language: "en" | "mr" | "hi";
  date: string;
  photo?: string;
}

export const reviewPhotos = {
  one: reviewPhoto1.url,
  two: reviewPhoto2.url,
  three: reviewPhoto3.url,
  four: reviewPhoto4.url,
  five: reviewPhoto5.url,
  six: reviewPhoto6.url,
};

export const reviews: Review[] = [
  {
    name: "Rahul Patil",
    rating: 5,
    text: "Family sobat dinner la aalo hoto. Ambience khup chan aahe ani food quality pan excellent hoti. Staff khup helpful aahe.",
    language: "mr",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Chicken Hyderabadi Dum Biryani was amazing. Quantity was enough for two people. Will definitely come back with friends.",
    language: "en",
    date: "1 month ago",
  },
  {
    name: "Sandeep Kulkarni",
    rating: 5,
    text: "शिरपूरमध्ये family dinner साठी एकदम बेस्ट ठिकाण. Food taste khup chan aahe ani price pan reasonable aahe.",
    language: "mr",
    date: "3 weeks ago",
  },
  {
    name: "Anjali Deshmukh",
    rating: 4,
    text: "Food quality is consistent every time. Biryani and tandoori starters are my favorites. The Paneer Tikka Masala is heavenly!",
    language: "en",
    date: "2 months ago",
  },
  {
    name: "Vijay Joshi",
    rating: 5,
    text: "Best restaurant in Shirpur for non-veg. Murgh Musallam is must try. Celebration sathi perfect jaga.",
    language: "mr",
    date: "1 week ago",
  },
  {
    name: "Meera Gupta",
    rating: 5,
    text: "हमने अपनी anniversary यहाँ celebrate की। बहुत अच्छा experience रहा। Decorations and service both were excellent.",
    language: "hi",
    date: "3 weeks ago",
  },
  {
    name: "Amit Shinde",
    rating: 4,
    text: "Good place for family dining. Kids loved the food. Parking is available which is a big plus in Shirpur.",
    language: "en",
    date: "1 month ago",
  },
  {
    name: "Neha Patil",
    rating: 5,
    text: "Tandoori Chicken khup tasty hota. Crispy outside, juicy inside. Perfectly cooked. Chinese starters pan try kara.",
    language: "mr",
    date: "2 weeks ago",
  },
  {
    name: "Rajesh Wagh",
    rating: 5,
    text: "Fish Curry is outstanding. Fresh fish, perfect spices. Being from coastal region, I can tell the difference. Highly recommended!",
    language: "en",
    date: "1 month ago",
  },
  {
    name: "Sunita Bhosale",
    rating: 5,
    text: "शिरपूरमधील सर्वोत्तम veg thali. Desi ghee cha swad khup chan aahe. Amhi niyamit yetao.",
    language: "mr",
    date: "2 months ago",
  },
  {
    name: "Karan Mehta",
    rating: 4,
    text: "Corporate dinner sathi book kelela. Staff ne khup chan arrange kel. Food pan timely aala. Professional service.",
    language: "mr",
    date: "3 weeks ago",
  },
  {
    name: "Pooja Singh",
    rating: 5,
    text: "Dal Makhani is the best I've had in this region. Creamy, rich, and perfectly spiced. The naan was soft and buttery too.",
    language: "en",
    date: "1 month ago",
  },
  {
    name: "Mahesh Chavan",
    rating: 5,
    text: "Birthday party celebrate kelela. Decoration, cake cutting arrangement, ani food - saglikade khup chan hot.",
    language: "mr",
    date: "2 weeks ago",
  },
  {
    name: "Deepika Nair",
    rating: 4,
    text: "Very good ambience for a small town restaurant. Food presentation is excellent. Mutton Rogan Josh was chef's kiss.",
    language: "en",
    date: "3 weeks ago",
  },
  {
    name: "Suresh Pawar",
    rating: 5,
    text: "हमारी family का favorite restaurant है। हर special occasion पे यहीं आते हैं। Quality कभी compromise नहीं हुई।",
    language: "hi",
    date: "1 month ago",
  },
  {
    name: "Rohit Desai",
    rating: 5,
    text: "Paneer Kingdom dish khup unique aahe. Different paneer preparations ekach plate madhe. Presentation pan premium.",
    language: "mr",
    date: "2 weeks ago",
  },
  {
    name: "Anita Kadam",
    rating: 5,
    text: "Best Butter Chicken in Shirpur! Rich, creamy, and perfectly balanced spices. My kids love the Chinese noodles too.",
    language: "en",
    date: "1 month ago",
  },
  {
    name: "Ganesh More",
    rating: 4,
    text: "Price quality ratio khup changla aahe. Shirpur madhe itkyam premium quality chi food khup kami thikani milte.",
    language: "mr",
    date: "3 weeks ago",
  },
  {
    name: "Fatima Sheikh",
    rating: 5,
    text: "Halal options available which is rare here. Chicken Biryani and Seekh Kebab are authentic. Will recommend to everyone.",
    language: "en",
    date: "2 weeks ago",
  },
  {
    name: "Nitin Yadav",
    rating: 5,
    text: "हमने यहाँ अपनी company की party की। 50 लोगों का arrangement बहुत अच्छे से manage किया। Food quality top class.",
    language: "hi",
    date: "1 month ago",
  },
];
