import readlineSync from "readline-sync";
import Calculator from "./src/calculator.js";

const a = readlineSync.questionInt("First number: ");
const b = readlineSync.questionInt("Second number: ");

try {
  const calculator = new Calculator(a, b);
  console.log("SUM: " + calculator.sum());
  console.log("MULTIPLICATION: " + calculator.multiply());
} catch (e) {
  console.log(e.message);
}
