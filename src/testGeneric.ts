class DataStore<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }

  getById(id: number): T {
    return this.data[id];
  }

  remove(id: number): void {
    this.data = this.data.filter((_, index) => index !== id);
  }
}

// Example usage
const numberStore = new DataStore<number>();

numberStore.add(10);
numberStore.add(20);
numberStore.add(30);

console.log(numberStore.getAll()); // [10, 20, 30]

interface Product {
    id: number;
    name: string;
    price: number;
}

const productStore = new DataStore<Product>();

const product1: Product = { id: 1, name: 'Product A', price: 100 };

productStore.add(product1);

console.log(productStore.getAll()); // [{ id: 1, name: 'Product A', price: 100 }]