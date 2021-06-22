import Greeter from "./greeter";
import JavaScriptGreeter from "./JavaScriptGreeter";
import promptConfig from "prompt-sync";
import LoudGreeter from "./LoudGreeter";
import HtmlGreeter from "./HtmlGreeter";
const greeter = new Greeter("hello");
const javaScriptGreeter = new JavaScriptGreeter("hello");
const loudGreeter = new LoudGreeter("Mitch");
const htmlGreeter = new HtmlGreeter("hello", "div");
const prompt = promptConfig({ sigint: true });
console.log(greeter.greet("Mitch"));
console.log(javaScriptGreeter.greet("Mitch"));
console.log(loudGreeter.greet("Mitch"));
let input = prompt("Please enter something: ");
console.log(input);

console.log(greeter.greet(input));
