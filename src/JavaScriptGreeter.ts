import Greeter from "./greeter";

export default class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${super.greet(name)}')`;
  }
}
