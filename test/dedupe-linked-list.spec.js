import { expect } from "chai";
import {  dedupe } from "../src/dedupe-linked-list";
import { printLinkedList } from "../src/util";
import runner from "./runner";

describe("dedupe linked list", () => {
  const node1 = { next: null, data: 21 };
  const node2 = { next: node1, data: 14 };
  const node3 = { next: node2, data: 28 };
  const node4 = { next: node3, data: 28 };
  const node5 = { next: node4, data: 14 };
  const node6 = { next: node5, data: 7 };

  it("should remove duplicates", () => {
    let list = printLinkedList(node6);
    expect(list).to.equal("7 14 28 28 14 21");

    runner(dedupe, [node6]);

    list = printLinkedList(node6);
    expect(list).to.equal("7 14 28 21");
  });
});
