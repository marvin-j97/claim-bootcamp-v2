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

/**
 * Shopping cart class
 * You'll need:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
 */
export class ShoppingCart {
  private items: Array<IShoppingCartItem>;

  constructor() {
    this.items = [];
  }

  /**
   * Adds N products
   * If the type of product is already in the shopping cart
   * don't add new item entry, but increment amount instead
   */
  addItems(product: Product, amount: number): void {
    // TODO: implement
  }

  /**
   * Delete an item entry by ID
   * If the item does not exist, an error containing
   * "Item not found" should be thrown
   */
  removeItem(id: number): void {
    // TODO: implement
  }

  /**
   * Clears the shopping cart
   */
  clear(): void {
    // TODO: implement
  }

  /**
   * Sums up all item prices
   */
  getPrice(): number {
    // TODO: implement
    return -1;
  }

  /**
   * Returns the amount of products in the cart
   */
  itemCount(): number {
    // TODO: implement
    return -1;
  }

  getItems(): Array<IShoppingCartItem> {
    return this.items.slice();
  }
}
