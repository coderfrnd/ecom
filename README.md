# Geer.in Clone - E-commerce Platform

A modern, high-performance e-commerce website built with Next.js, inspired by [Geer.in](https://geer.in). This project demonstrates full-stack development skills with a responsive frontend and RESTful API backend.

## 🚀 Features

### Frontend Features
- **Responsive Product Listing Page** (`/products`)
  - Grid layout that adapts to different screen sizes
  - Product cards with images, names, prices, and categories
  - Search and filter functionality
  - Loading states and error handling

- **Individual Product Pages** (`/products/[id]`)
  - Detailed product information
  - Product images, descriptions, and features
  - Price comparison with original prices
  - Add to cart and wishlist buttons

- **Modern UI/UX**
  - Clean, professional design
  - Mobile-first responsive design
  - Smooth animations and transitions
  - Intuitive navigation

### Backend Features
- **RESTful API Endpoints**
  - `GET /api/products` - Fetch all products
  - `POST /api/products` - Add new product
  - `GET /api/products/[id]` - Get single product
  - `DELETE /api/products/[id]` - Delete product

- **Data Management**
  - In-memory product storage (easily replaceable with database)
  - Input validation and error handling
  - Proper HTTP status codes

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 15.3.4 (App Router)
  - React 19.0.0
  - Tailwind CSS 4.0
  - JavaScript (ES6+)

- **Backend**
  - Next.js API Routes
  - RESTful API design
  - JSON data handling

- **Development Tools**
  - ESLint for code quality
  - PostCSS for CSS processing
  - Git for version control

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/geer-intern-assignment.git
   cd geer-intern-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
e-com/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── products/
│   │   │       ├── route.js              # GET /api/products, POST /api/products
│   │   │       └── [id]/
│   │   │           └── route.js          # GET /api/products/[id], DELETE /api/products/[id]
│   │   ├── products/
│   │   │   ├── page.js                   # Product listing page
│   │   │   └── [id]/
│   │   │       └── page.js               # Individual product page
│   │   ├── layout.js                     # Root layout
│   │   ├── page.js                       # Home page
│   │   └── globals.css                   # Global styles
│   └── components/
│       ├── ProductCard.js                # Product card component
│       └── SearchBar.js                  # Search functionality
├── public/                               # Static assets
├── package.json                          # Dependencies and scripts
└── README.md                             # Project documentation
```

## 🎯 API Documentation

### Products API

#### Get All Products
```http
GET /api/products
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "price": 2499,
    "originalPrice": 3499,
    "imageUrl": "https://images.unsplash.com/...",
    "category": "Electronics",
    "description": "High-quality wireless headphones...",
    "features": ["Active Noise Cancellation", "30-hour battery life"]
  }
]
```

#### Get Single Product
```http
GET /api/products/{id}
```
**Response:**
```json
{
  "id": 1,
  "name": "Wireless Bluetooth Headphones",
  "price": 2499,
  "originalPrice": 3499,
  "imageUrl": "https://images.unsplash.com/...",
  "category": "Electronics",
  "description": "High-quality wireless headphones...",
  "features": ["Active Noise Cancellation", "30-hour battery life"]
}
```

#### Add New Product
```http
POST /api/products
Content-Type: application/json

{
  "name": "New Product",
  "price": 999,
  "imageUrl": "https://example.com/image.jpg",
  "category": "Electronics",
  "description": "Product description",
  "features": ["Feature 1", "Feature 2"],
  "originalPrice": 1299
}
```

#### Delete Product
```http
DELETE /api/products/{id}
```
**Response:**
```json
{
  "message": "Product deleted successfully",
  "product": { ... }
}
```

## 🎨 Features in Detail

### Search & Filter
- Real-time search by product name or category
- Responsive search bar with clear visual feedback
- Results count display

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly interface elements
- Optimized images with Next.js Image component

### Product Management
- Sample products included for demonstration
- Easy to add/remove products via API
- Product categories and features
- Price comparison with discount calculations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/app/`
3. Extend API routes in `src/app/api/`
4. Update styles using Tailwind CSS classes

## 📝 Notes & Assumptions

### Current Implementation
- Uses in-memory storage for products (resets on server restart)
- Sample products are hardcoded for demonstration
- Images are sourced from Unsplash for demo purposes
- No authentication or user management implemented

### Future Enhancements
- Database integration (MongoDB, PostgreSQL)
- User authentication and authorization
- Shopping cart functionality
- Payment gateway integration
- Admin panel for product management
- Image upload functionality
- Product reviews and ratings

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive Web App (PWA) ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for internship assignment purposes. Feel free to use and modify as needed.

## 👨‍💻 Author

Created for Full Stack Developer Internship Assignment
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Language:** JavaScript

---

**Note:** This is a demonstration project showcasing full-stack development skills. In a production environment, you would want to add proper error handling, authentication, database integration, and security measures.
