import { expect } from "chai";
import bs from "../src/binary-search-rotated";
import runner from "./runner";

const array = [
  176,
  188,
  199,
  200,
  210,
  222,
  1,
  10,
  20,
  47,
  59,
  63,
  75,
  88,
  99,
  107,
  120,
  133,
  155,
  162,
];

describe("binary search rotated", () => {
  it("should return -1 for non-existent key", () => {
    const actual = runner(bs, [array, 666]);
    expect(actual).to.equal(-1);
  });

  it("should return the correct index", () => {
    const actual = runner(bs, [array, 200]);
    expect(actual).to.equal(3);
  });
});
