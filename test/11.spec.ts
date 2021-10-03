import "mocha";
import { expect } from "chai";

import { getTodo } from "../src/11";

describe("Task 11", () => {
  it("Should get todo id = 1", async () => {
    const todo = await getTodo(1);
    expect(todo).to.be.an("object");
    expect(todo.id).to.equal(1);
    expect(todo.userId).to.be.a("number");
    expect(todo.title).to.be.a("string");
    expect(todo.completed).to.be.a("boolean");
  });

  it("Should get todo id = 100", async () => {
    const todo = await getTodo(100);
    expect(todo).to.be.an("object");
    expect(todo.id).to.equal(100);
    expect(todo.userId).to.be.a("number");
    expect(todo.title).to.be.a("string");
    expect(todo.completed).to.be.a("boolean");
  });

  it("Should NOT get todo id = 1000", async () => {
    let hadError = false;
    try {
      await getTodo(1000);
    } catch (error) {
      hadError = true;
      expect(error.message).to.equal("Request failed with status 404");
    }
    expect(hadError).to.be.true;
  });
});
