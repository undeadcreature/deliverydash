import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { OrderCard } from '../components/order-card';

const mockOrders = [
  {
    id: '1',
    customerName: 'John Doe',
    address: '123 Main St, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    paymentMode: 'Cash on Delivery',
    status: 'Picked',
    orderDate: new Date(),
    items: [
      { name: 'Pizza Margherita', quantity: 2 },
      { name: 'Coca Cola', quantity: 3 }
    ],
    specialInstructions: 'Please ring the doorbell twice'
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    address: '456 Park Ave, New York, NY 10002',
    phone: '+1 (555) 987-6543',
    paymentMode: 'Online Payment',
    status: 'Out for Delivery',
    orderDate: new Date(),
    items: [
      { name: 'Chicken Burger', quantity: 1 },
      { name: 'French Fries', quantity: 2 }
    ]
  },
];

export function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = orders.filter(order =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Assigned Orders</h1>
          <div className="mt-4 sm:mt-0 flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onStatusUpdate={handleStatusUpdate}
          />
        ))}
      </div>
    </div>
  );
}