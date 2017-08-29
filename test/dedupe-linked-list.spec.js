import { expect } from "chai";
import { printList, dedupe } from "../src/dedupe-linked-list";
import runner from "./runner";

describe("dedupe linked list", () => {
  const node1 = { next: null, data: 21 };
  const node2 = { next: node1, data: 14 };
  const node3 = { next: node2, data: 28 };
  const node4 = { next: node3, data: 28 };
  const node5 = { next: node4, data: 14 };
  const node6 = { next: node5, data: 7 };

  it("should remove duplicates", () => {
    let list = printList(node6);
    expect(list).to.equal("7 14 28 28 14 21");

    dedupe(node6);

    list = printList(node6);
    expect(list).to.equal("7 14 28 21");
  });
});
