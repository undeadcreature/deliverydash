import React from 'react';
import { MapPin, Phone, CreditCard, Package, Navigation } from 'lucide-react';
import { Button } from './ui/button';
import { formatDate, getOrderStatusColor } from '@/lib/utils';

interface OrderCardProps {
  order: {
    id: string;
    customerName: string;
    address: string;
    phone: string;
    paymentMode: string;
    status: string;
    items: Array<{ name: string; quantity: number }>;
    orderDate: Date;
    specialInstructions?: string;
  };
  onStatusUpdate: (orderId: string, newStatus: string) => void;
}

export function OrderCard({ order, onStatusUpdate }: OrderCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleStatusUpdate = (newStatus: string) => {
    onStatusUpdate(order.id, newStatus);
  };

  const getNextStatus = () => {
    switch (order.status.toLowerCase()) {
      case 'assigned':
        return 'picked';
      case 'picked':
        return 'out for delivery';
      case 'out for delivery':
        return 'delivered';
      default:
        return null;
    }
  };

  const nextStatus = getNextStatus();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-all duration-200 hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{order.customerName}</h3>
          <p className="text-gray-500 text-sm">{formatDate(order.orderDate)}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getOrderStatusColor(order.status)}`}>
          {order.status}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{order.address}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm">{order.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <CreditCard className="h-4 w-4 mr-2" />
          <span className="text-sm">{order.paymentMode}</span>
        </div>
      </div>

      <div className="mt-4 space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="text-blue-600"
          onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.address)}`, '_blank')}
        >
          <Navigation className="h-4 w-4 mr-2" />
          Navigate
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
        {nextStatus && (
          <Button
            size="sm"
            onClick={() => handleStatusUpdate(nextStatus)}
          >
            Mark as {nextStatus}
          </Button>
        )}
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-medium mb-2">Order Items</h4>
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center text-sm">
                <Package className="h-4 w-4 mr-2 text-gray-400" />
                <span>{item.name}</span>
                <span className="ml-auto">x{item.quantity}</span>
              </div>
            ))}
          </div>
          {order.specialInstructions && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Special Instructions</h4>
              <p className="text-sm text-gray-600">{order.specialInstructions}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}