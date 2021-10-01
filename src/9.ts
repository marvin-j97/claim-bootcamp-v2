export class Product {
  private id: number;
  private price: number;
  private name: string;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

export interface IShoppingCartItem {
  product: Product;
  amount: number;
}

export class ShoppingCart {
  private items: Array<IShoppingCartItem>;

  constructor() {
    this.items = [];
  }

  addItem(product: Product, amount: number): void {
    // TODO: implement
  }

  removeItem(id: number): void {
    return;
  }

  clear(): void {
    // TODO: implement
  }

  getPrice(): number {
    // TODO: implement
    return -1;
  }

  itemCount(): number {
    // TODO: implement
    return -1;
  }

  getItems(): Array<IShoppingCartItem> {
    return this.items.slice();
  }
}
