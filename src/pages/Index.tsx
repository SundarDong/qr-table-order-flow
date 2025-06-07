
import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MenuCategory from "@/components/MenuCategory";
import Cart from "@/components/Cart";
import QRScanner from "@/components/QRScanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  prepTime: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Index = () => {
  const [currentView, setCurrentView] = useState<'scanner' | 'menu'>('scanner');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
      price: 28.99,
      category: "Mains",
      image: "/placeholder.svg",
      rating: 4.8,
      prepTime: "25 min",
      isVegetarian: true
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
      price: 32.99,
      category: "Mains",
      image: "/placeholder.svg",
      rating: 4.9,
      prepTime: "20 min"
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan, croutons, and classic caesar dressing",
      price: 16.99,
      category: "Starters",
      image: "/placeholder.svg",
      rating: 4.6,
      prepTime: "10 min",
      isVegetarian: true
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
      isVegetarian: true
    },
    {
      id: 5,
      name: "Spicy Pasta Arrabbiata",
      description: "Penne pasta in spicy tomato sauce with garlic and red peppers",
      price: 22.99,
      category: "Mains",
      image: "/placeholder.svg",
      rating: 4.7,
      prepTime: "15 min",
      isVegetarian: true,
      isSpicy: true
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
      isVegetarian: true
    }
  ];

  const categories = ["Starters", "Mains", "Desserts"];

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Filter menu items based on search query
  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (currentView === 'scanner') {
    return <QRScanner onScanComplete={() => setCurrentView('menu')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col">
      {/* Header */}
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Menu</h2>
          <p className="text-gray-600">Crafted with passion, served with love</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {categories.map(category => {
            const categoryItems = filteredMenuItems.filter(item => item.category === category);
            
            // Only show category if it has items after filtering
            if (categoryItems.length === 0) return null;
            
            return (
              <MenuCategory
                key={category}
                category={category}
                items={categoryItems}
                onAddToCart={addToCart}
              />
            );
          })}
          
          {/* Show message if no items match search */}
          {searchQuery && filteredMenuItems.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No items found</p>
              <p className="text-gray-400">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Cart Button for Mobile */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <Button
            onClick={() => setIsCartOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg"
          >
            <ShoppingCart className="w-6 h-6" />
            <Badge className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs px-1.5 py-0.5">
              {getTotalItems()}
            </Badge>
          </Button>
        </div>
      )}

      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onClearCart={clearCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;
