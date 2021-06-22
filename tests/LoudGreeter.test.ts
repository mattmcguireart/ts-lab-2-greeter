import LoudGreeter from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("the greeting property is set", () => {
    let obj: LoudGreeter = new LoudGreeter("hello");
    expect(obj.greeting).toBe("hello");
  });
  test("the greet method includes the extra exclamation points that are represented by the extra property", () => {
    let obj: LoudGreeter = new LoudGreeter("hello");
    expect(obj.greet("Mitch")).toBe("hello, Mitch!!");
  });
  test("the adVolume method adds an additional exclamation point to the extra property", () => {
    let obj: LoudGreeter = new LoudGreeter("hello");
    expect(obj.greet("Mitch")).toBe("hello, Mitch!!");
  });
});
