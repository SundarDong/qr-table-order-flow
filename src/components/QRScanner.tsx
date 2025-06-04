
import { useState } from "react";
import { QrCode, Scan, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface QRScannerProps {
  onScanComplete: () => void;
}

const QRScanner = ({ onScanComplete }: QRScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      onScanComplete();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="backdrop-blur-sm bg-white/90 shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome to Bella Vista</CardTitle>
            <CardDescription className="text-gray-600">
              Scan the QR code on your table to view our menu and place your order
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">QR Code Area</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Point your camera at the QR code</p>
            </div>
            
            <div className="space-y-4">
              <Button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-lg"
              >
                {isScanning ? (
                  <div className="flex items-center space-x-2">
                    <Scan className="w-5 h-5 animate-pulse" />
                    <span>Scanning...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5" />
                    <span>Start Scanning</span>
                  </div>
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={onScanComplete}
                className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                View Demo Menu
              </Button>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Table #12 • Bella Vista Restaurant
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QRScanner;
