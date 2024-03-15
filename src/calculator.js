class Calculator {
    constructor(a, b) {
      if (!a || !b) {
        throw new Error("Invalid input");
      }
      this.a = a;
      this.b = b;
    }
    sum() {
      return this.a + this.b;
    }
    multiply() {
      return this.a * this.b;
    }
  }
  
  export default Calculator;
  