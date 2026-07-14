export interface Product {
  id: number;
  name: string;
  price: number;
  discount: number; // у відсотках, 0 якщо немає знижки
  category: string;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: 'Футболка', price: 350, discount: 0, category: 'Одяг', image: 'tshirt.jpg' },
  { id: 2, name: 'Джинси', price: 900, discount: 20, category: 'Одяг', image: 'jeans.jpg' },
  { id: 3, name: 'Кросівки', price: 1800, discount: 10, category: 'Взуття', image: 'sneakers.jpg' },
  { id: 4, name: 'Черевики', price: 2200, discount: 0, category: 'Взуття', image: 'boots.jpg' },
  { id: 5, name: 'Рюкзак', price: 750, discount: 15, category: 'Аксесуари', image: 'backpack.jpg' },
  { id: 6, name: 'Кепка', price: 250, discount: 0, category: 'Аксесуари', image: 'cap.jpg' },
  { id: 7, name: 'Светр', price: 650, discount: 0, category: 'Одяг', image: 'sweater.jpg' },
  { id: 8, name: 'Сандалі', price: 500, discount: 25, category: 'Взуття', image: 'sandals.jpg' },
  { id: 9, name: 'Годинник', price: 1500, discount: 0, category: 'Аксесуари', image: 'watch.jpg' }
];
