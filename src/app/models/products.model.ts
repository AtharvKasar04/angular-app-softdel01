export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    stock?: number;
    category?: string;
    rating?: {
        'rate': number;
        'count': number;
    }
}