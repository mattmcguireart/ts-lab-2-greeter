import chalk from "chalk";

class ChalkGreeter {
  greeting: string;
  color: string = "purple";
  constructor(greeting: string, color: string) {
    this.greeting = greeting;
    this.color = color;
  }
  greet(): void {
    console.log(`${chalk[this.color]}`);
  }
}
