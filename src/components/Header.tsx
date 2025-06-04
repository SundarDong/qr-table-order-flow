
import { useState } from "react";
import { QrCode, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [showTableNumber, setShowTableNumber] = useState(false);
  const tableNumber = "Table 7"; // This could come from props or context in a real app

  return (
    <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Bella Vista</h1>
                <p className="text-xs text-gray-500">Fine Dining Experience</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Profile Icon with Table Number */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTableNumber(!showTableNumber)}
                className="p-2 hover:bg-orange-50"
              >
                <User className="w-5 h-5 text-gray-600" />
              </Button>
              
              {showTableNumber && (
                <Card className="absolute top-12 right-0 z-50 shadow-lg border border-orange-200">
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-gray-900">{tableNumber}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Cart Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative border-orange-200 hover:bg-orange-50"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart ({cartItemsCount})
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
