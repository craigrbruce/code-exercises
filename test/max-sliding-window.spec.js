import { expect } from "chai";
import m from "../src/max-sliding-window";
import runner from "./runner";

describe("max sliding window", () => {
  const array = [-4, 2, -5, 1, -1, 6];
  const window = 3;

  it("should return max from each window", () => {
    const actual = runner(m, [array, window]);

    expect(actual).to.deep.equal([2, 1, 6]);
  });

  it("should throw an error if window size exceeds array size", () => {
    const erroneous = () => runner(m, [array, 42]);
    expect(erroneous).to.throw(Error, "Window size is too large");
  });
});
