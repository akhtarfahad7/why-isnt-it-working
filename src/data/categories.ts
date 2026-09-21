import type { Category } from "@/lib/db/types";

export const categories: Category[] = [
  {
    id: "cat-electronics",
    name: "Electronics",
    slug: "electronics",
    description: "Laptops, phones, tablets, monitors, printers, and other devices",
    icon: "💻",
  },
  {
    id: "cat-networking",
    name: "Networking",
    slug: "networking",
    description: "Wi-Fi, routers, Bluetooth, and internet connectivity issues",
    icon: "📡",
  },
  {
    id: "cat-vehicles",
    name: "Vehicles",
    slug: "vehicles",
    description: "Cars, motorcycles, and other vehicles",
    icon: "🚗",
  },
  {
    id: "cat-appliances",
    name: "Appliances",
    slug: "appliances",
    description: "Home appliances like AC, washing machine, microwave, refrigerator",
    icon: "🏠",
  },
  {
    id: "cat-home",
    name: "Home",
    slug: "home",
    description: "Plumbing, electrical, doors, windows, and household issues",
    icon: "🔧",
  },
  {
    id: "cat-software",
    name: "Software",
    slug: "software",
    description: "Windows, apps, performance, crashes, and computer issues",
    icon: "🖥️",
  },
  {
    id: "cat-internet",
    name: "Internet",
    slug: "internet",
    description: "Browser, email, streaming, VPN, and online services",
    icon: "🌐",
  },
];
