import { Component, signal, computed } from '@angular/core';
import { products, Product } from '../data/products';

@Component({
  selector: 'app-product-catalog',
  imports: [],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css'
})
export class ProductCatalog {
  allProducts = signal<Product[]>(products);

  categories = computed(() =>
    [...new Set(this.allProducts().map(p => p.category))]
  );

  selectedCategories = signal<Set<string>>(new Set());

  minPrice = signal(0);
  maxPrice = signal(3000);

  constructor() {
    this.selectedCategories.set(new Set(this.categories()));
  }

  toggleCategory(category: string) {
    const current = new Set(this.selectedCategories());
    if (current.has(category)) {
      current.delete(category);
    } else {
      current.add(category);
    }
    this.selectedCategories.set(current);
  }

  filteredProducts = computed(() =>
    this.allProducts().filter(p =>
      this.selectedCategories().has(p.category) &&
      p.price >= this.minPrice() &&
      p.price <= this.maxPrice()
    )
  );

  finalPrice(product: Product): number {
    return Math.round(product.price * (1 - product.discount / 100));
  }
}
