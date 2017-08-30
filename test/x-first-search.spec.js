import { expect } from "chai";
import { bfs, dfs, Node } from "../src/x-first-search";
import runner from "./runner";

var root = new Node(0);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

describe("breadth first search", () => {
  it("should traverse correctly", () => {
    const actual = bfs(root);
    expect(actual).to.equal("0 1 2 3 4 5 6");
  });
});

describe("depth first search", () => {
  it("should traverse correctly", () => {
    const actual = dfs(root);
    expect(actual).to.equal("0 1 3 4 2 5 6");
  });
});
