import Greeter from "./greeter";

export default class LoudGreeter extends Greeter {
  private extra: string = "!";
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}
