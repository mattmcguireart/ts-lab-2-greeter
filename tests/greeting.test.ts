import Greeter from "../src/greeter";

describe("Greeting class", () => {
  test("constructor sets the greeting property from a parameter", () => {
    const newGreeting: Greeter = new Greeter("hello");
    expect(newGreeting.greeting).toBe("hello");
  });
  test("returns the composed greeting based on the greeting property and name parameter", () => {
    const newGreeting: Greeter = new Greeter("hello");
    expect(newGreeting.greet("Matt")).toBe("hello, Matt!");
  });
});
