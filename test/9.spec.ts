import "mocha";
import { expect } from "chai";

import { IShoppingCartItem, Product, ShoppingCart } from "../src/9";

function getNames(items: Array<IShoppingCartItem>): string[] {
  return items.map(({ product }) => product.getName());
}

describe("Task 9", () => {
  const shoppingCart = new ShoppingCart();
  const product0 = new Product(0, "NextJS book", 30);
  const product1 = new Product(1, "Texas Instruments TI-84 Plus Graphing Calculator", 110);
  const product2 = new Product(
    2,
    "De'Longhi Icona Vintage ECOV 311.BG, manual espresso machine",
    130,
  );

  it("Should start with 0 items", () => {
    expect(shoppingCart.getItems()).to.have.lengthOf(0);
    expect(shoppingCart.itemCount()).to.equal(0);
    expect(shoppingCart.getPrice()).to.equal(0);
  });

  it("Should add 1 item", () => {
    shoppingCart.addItem(product0, 1);
    expect(shoppingCart.getItems()).to.have.lengthOf(1);
    expect(shoppingCart.itemCount()).to.equal(1);
    expect(shoppingCart.getPrice()).to.equal(product0.getPrice());
    expect(getNames(shoppingCart.getItems())).to.deep.equal([product0.getName()]);
  });

  it("Should add other items", () => {
    shoppingCart.addItem(product1, 2);
    expect(shoppingCart.getItems()).to.have.lengthOf(2);
    expect(shoppingCart.itemCount()).to.equal(3);
    expect(shoppingCart.getPrice()).to.equal(product0.getPrice() + product1.getPrice() * 2);
    expect(getNames(shoppingCart.getItems())).to.deep.equal([
      product0.getName(),
      product1.getName(),
    ]);
  });

  it("Should remove item", () => {
    shoppingCart.removeItem(product1.getId());
    expect(shoppingCart.getItems()).to.have.lengthOf(1);
    expect(shoppingCart.itemCount()).to.equal(1);
    expect(shoppingCart.getPrice()).to.equal(product0.getPrice());
    expect(getNames(shoppingCart.getItems())).to.deep.equal([product0.getName()]);
  });

  it("Should add more amount to existing items", () => {
    shoppingCart.addItem(product0, 1);
    expect(shoppingCart.getItems()).to.have.lengthOf(1);
    expect(shoppingCart.itemCount()).to.equal(2);
    expect(shoppingCart.getPrice()).to.equal(product0.getPrice() * 2);
    expect(getNames(shoppingCart.getItems())).to.deep.equal([
      product0.getName(),
      product1.getName(),
    ]);
  });

  it("Should add more items", () => {
    shoppingCart.addItem(product1, 5);
    expect(shoppingCart.getItems()).to.have.lengthOf(2);
    expect(shoppingCart.itemCount()).to.equal(6);
    expect(shoppingCart.getPrice()).to.equal(product0.getPrice() + product1.getPrice() * 5);
    expect(getNames(shoppingCart.getItems())).to.deep.equal([
      product0.getName(),
      product1.getName(),
    ]);
  });

  it("Should remove item and add other item", () => {
    shoppingCart.removeItem(product0.getId());
    shoppingCart.addItem(product2, 2);
    expect(shoppingCart.getItems()).to.have.lengthOf(2);
    expect(shoppingCart.itemCount()).to.equal(7);
    expect(shoppingCart.getPrice()).to.equal(product1.getPrice() * 5 + product2.getPrice() * 2);
    expect(getNames(shoppingCart.getItems())).to.deep.equal([
      product1.getName(),
      product2.getName(),
    ]);
  });

  it("Should throw on non-existing error", () => {
    expect(shoppingCart.removeItem(236)).to.throw(Error, "Item not found");
    expect(shoppingCart.getItems()).to.have.lengthOf(2);
    expect(shoppingCart.itemCount()).to.equal(7);
  });

  it("Should clear shopping cart", () => {
    shoppingCart.clear();
    expect(shoppingCart.getItems()).to.have.lengthOf(0);
    expect(shoppingCart.itemCount()).to.equal(0);
    expect(shoppingCart.getPrice()).to.equal(0);
  });
});
