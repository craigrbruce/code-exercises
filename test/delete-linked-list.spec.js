import { expect } from "chai";
import { deleteNode } from "../src/delete-linked-list";
import { printLinkedList } from "../src/util";
import runner from "./runner";

describe("delete node from linked list", () => {
  const node1 = { next: null, data: 21 };
  const node2 = { next: node1, data: 14 };
  const node3 = { next: node2, data: 28 };
  const node4 = { next: node3, data: 28 };
  const node5 = { next: node4, data: 14 };
  const node6 = { next: node5, data: 7 };

  it("should remove duplicates", () => {
    const newHead = runner(deleteNode, [node6, 7]);

    const list = printLinkedList(newHead);
    expect(list).to.equal("14 28 28 14 21");
  });
});
