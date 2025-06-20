import { NextResponse } from 'next/server';

// In-memory storage for products (in a real app, this would be a database)
let products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2499,
    originalPrice: 3499,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Foldable design"
    ]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 8999,
    originalPrice: 12999,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Advanced fitness tracking with heart rate monitoring and GPS.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Sleep tracking"
    ]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    description: "Comfortable and sustainable cotton t-shirt made from organic materials.",
    features: [
      "100% organic cotton",
      "Breathable fabric",
      "Multiple sizes available",
      "Eco-friendly packaging"
    ]
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 599,
    originalPrice: 799,
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    category: "Home & Living",
    description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    features: [
      "24-hour cold retention",
      "12-hour hot retention",
      "BPA-free",
      "Leak-proof design",
      "1L capacity"
    ]
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    features: [
      "15W fast charging",
      "Qi-compatible",
      "LED indicator",
      "Non-slip surface",
      "Overcharge protection"
    ]
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 1299,
    originalPrice: 1799,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    category: "Sports",
    description: "Premium non-slip yoga mat perfect for all types of yoga and fitness activities.",
    features: [
      "Non-slip surface",
      "6mm thickness",
      "Eco-friendly material",
      "Includes carrying strap",
      "Multiple colors available"
    ]
  }
];

// GET /api/products - Return list of products
export async function GET() {
  try {
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Add a new product
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, price, imageUrl, category, description, features, originalPrice } = body;

    // Validation
    if (!name || !price || !imageUrl) {
      return NextResponse.json(
        { error: 'Name, price, and imageUrl are required' },
        { status: 400 }
      );
    }

    if (typeof price !== 'number' || price <= 0) {
      return NextResponse.json(
        { error: 'Price must be a positive number' },
        { status: 400 }
      );
    }

    // Create new product
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name,
      price,
      imageUrl,
      category: category || 'General',
      description: description || '',
      features: features || [],
      originalPrice: originalPrice || null
    };

    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
} 