import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("the greeting property is set", () => {
    const obj: JavaScriptGreeter = new JavaScriptGreeter("hello");
    expect(obj.greeting).toBe("hello");
  });
  test("the greet method overrides the parent greet method and returns the proper string", () => {
    const obj: JavaScriptGreeter = new JavaScriptGreeter("hello");
    expect(obj.greet("Mitch")).toBe("console.log('hello, Mitch!')");
  });
});
