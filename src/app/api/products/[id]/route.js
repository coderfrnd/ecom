import { NextResponse } from 'next/server';

// Import the products array from the main route
// In a real app, this would be a database query
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

// GET /api/products/[id] - Get a single product by ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    const product = products.find(p => p.id === id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// DELETE /api/products/[id] - Delete a product by ID
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    const productIndex = products.findIndex(p => p.id === id);
    
    if (productIndex === -1) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    const deletedProduct = products[productIndex];
    products.splice(productIndex, 1);

    return NextResponse.json(
      { message: 'Product deleted successfully', product: deletedProduct }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
} 