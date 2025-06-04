
import { Clock, Star, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface MenuCategoryProps {
  category: string;
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

const MenuCategory = ({ category, items, onAddToCart }: MenuCategoryProps) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-orange-200 pb-2">
        {category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 border-orange-100 hover:border-orange-200">
            <CardHeader className="pb-3">
              <div className="aspect-video bg-gradient-to-r from-orange-100 to-red-100 rounded-lg mb-3 flex items-center justify-center">
                <div className="text-orange-300 text-4xl">🍽️</div>
              </div>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </CardTitle>
                <div className="flex space-x-1">
                  {item.isVegetarian && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <Leaf className="w-3 h-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                  {item.isSpicy && (
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
                      <Flame className="w-3 h-3 mr-1" />
                      Spicy
                    </Badge>
                  )}
                </div>
              </div>
              <CardDescription className="text-gray-600 line-clamp-2">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{item.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.prepTime}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                <Button
                  onClick={() => onAddToCart(item)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
