import HtmlGreeter from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("the greeting property is set based on a provided value", () => {
    const obj: HtmlGreeter = new HtmlGreeter("hello");
    expect(obj.greeting).toBe("hello");
  });
  test("the tagName property is set based on a provided value", () => {
    const obj: HtmlGreeter = new HtmlGreeter("hello", "div");
    expect(obj.tagName).toBe("div");
  });
  test("the greet method uses the proper tag in its result", () => {
    const obj: HtmlGreeter = new HtmlGreeter("hello", "div");
    expect(obj.greet("Mitch")).toBe("<div>hello, Mitch!</div>");
  });
  test("the greet method uses the tagName when none is provided", () => {
    const obj: HtmlGreeter = new HtmlGreeter("hello");
    expect(obj.greet("Mitch")).toBe("<h1>hello, Mitch!</h1>");
  });
});
