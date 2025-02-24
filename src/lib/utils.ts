import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return format(date, 'MMM d, h:mm a');
}

export function getOrderStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'picked':
      return 'bg-yellow-100 text-yellow-800';
    case 'out for delivery':
      return 'bg-blue-100 text-blue-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}