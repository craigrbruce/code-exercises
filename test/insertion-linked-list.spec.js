import { expect } from "chai";
import { sort } from "../src/insertion-linked-list";
import { printLinkedList } from "../src/util";
import runner from "./runner";

describe("sort linked list", () => {
  const node3 = { next: null, data: 11 };
  const node4 = { next: node3, data: 82 };
  const node5 = { next: node4, data: 23 };
  const node6 = {
    next: node5,
    data: 29,
  };

  it("should sort list", () => {
    const sorted = runner(sort, [node6]);

    const list = printLinkedList(sorted);
    expect(list).to.equal("11 23 29 82");
  });
});
