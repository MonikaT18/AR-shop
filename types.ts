
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  imageUrl: string;
  badge?: 'New' | 'Popular' | 'Sale';
}

export interface ToastType {
  id: number;
  message: string;
}
