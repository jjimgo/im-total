const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  if(operator == '+'){
    return String(parseFloat(n1) + parseFloat(n2));
  }
  else if(operator =='-'){
    
    return String(parseFloat(n1) - parseFloat(n2));
  }
  else if(operator == '*'){
    return String(parseFloat(n1) * parseFloat(n2));
  }
  else if(operator == '/'){
    return String(parseFloat(n1) / parseFloat(n2));
  }

}


buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    
    if (action === 'number') {

      if(firstOperend.textContent == '0'){
        firstOperend.textContent  = buttonContent;
      }else if(firstOperend.textContent != '0'){
        secondOperend.textContent = buttonContent;
      }
      
      // 0
      console.log('숫자 ' + buttonContent + ' 버튼');
    }

    if (action === 'operator') {
      
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {

      // console.log('소수점 버튼');
    }

    if (action === 'clear') {

      firstOperend.textContent = '0';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
      operator.textContent = '+';
      

      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(firstOperend.textContent,operator.textContent ,secondOperend.textContent);

      console.log('계산 버튼');
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

let a = 0;
let b = 0;

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {

    
      if(a == 0){
        display.textContent = buttonContent;
        previousNum = display.textContent;
        a = 1;
      }else{
        display.textContent += buttonContent;
        previousNum = display.textContent;
      }
      
    }
    if (action === 'operator') {

      operatorForAdvanced = buttonContent;
      console.log("-----초심")
      previousKey = display.textContent;
      a=0;
        
      
      
      // 112.1252
      
    }
    if (action === 'decimal') {
      if(a == 1){
        display.textContent += '.';
        a=2;
      }
      if(a == 0){
        display.textContent = '0.';
        a=2;
      }
      //1,0,0,+,1,2,+,1,5,-,-,2,3,-,1,4,4,2,/,2,3,/,/,1,2,*,2,3,Enter
      
    }
    if (action === 'clear') {
      display.textContent = '0';
      operatorForAdvanced = undefined;
      previousKey = undefined;
      previousNum = undefined;
      a =0;

    }
    if (action === 'calculate') {
      
      
      if(typeof(operatorForAdvanced) == 'undefined'){
        console.log("Enter");
      }else{
        display.textContent = calculate( previousKey, operatorForAdvanced, previousNum);
        previousKey = display.textContent;
      }
      
      
    }
  }

});
