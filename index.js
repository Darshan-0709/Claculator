class Calculator {
  constructor(displayTextElement, resultTextElement) {
    this.displayTextElement = displayTextElement;
    this.resultTextElement = resultTextElement;
    this.clear();
  }

  clear() {
    this.string = '';
    this.newString = '';
    this.result = '';
  }

  
  delete() {
    this.string = this.string.toString().slice(0, -1);
  }

  appendText(charecter) {

    let lastCharecter = this.string.toString()[this.string.toString().length - 1];
    let firstCharecter = this.string.toString()[0];
    let currentCharecter = charecter;
    if(firstCharecter === '+' || firstCharecter === '-' || firstCharecter === '*' || firstCharecter === '/') {
      this.string = ''
    };
    // lastCharecter === '+' || lastCharecter === '-' || lastCharecter === '*' || lastCharecter === '/'
    if(isNaN(parseFloat(lastCharecter)) && isNaN(parseFloat(currentCharecter))){
      this.string = this.string.toString().slice(0, -1);
    }
    this.string = this.string += charecter;

  }

  evaluate() {
    let lastCharecter = this.string.toString()[this.string.toString().length - 1];
    if(lastCharecter === '+' || lastCharecter === '-' || lastCharecter === '*' || lastCharecter === '/') return;
    this.result = eval(this.string.toString());
  }
  
  equels(){
    this.string = eval(this.string.toString());
    this.result = '';
  }

  updateDisplay() {
    this.displayTextElement.innerText = this.string;
    if(this.string.toString().includes('+' || '-' || '*' || '/')){
      this.resultTextElement.innerText = this.result;
    }
  }
}

let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let deleteButton = document.querySelector('[data-delete]');
let equelsButton = document.querySelector('[data-equels]');
let allClearButton = document.querySelector('[data-all-clear]');
let displayTextElement = document.querySelector('[data-display]');
let resultTextElement = document.querySelector('[data-result]');

let calculator = new Calculator(displayTextElement, resultTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click' , ()=> {
    calculator.appendText(button.innerText);
    calculator.updateDisplay();
  })
});
operationButtons.forEach(button => {
  button.addEventListener('click' , ()=> {
    calculator.appendText(button.innerText);
    calculator.updateDisplay();
  })
});
equelsButton.addEventListener('click' , () => {
  calculator.equels();
  calculator.updateDisplay();
});
allClearButton.addEventListener('click' , () => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventListener('click' , () => {
  calculator.delete();
  calculator.updateDisplay();
});
