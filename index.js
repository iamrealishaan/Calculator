let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);
buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'C':
        display.innerText = '';
        break;
      case 'ESC':
        if(display.innerText){
          display.innerText = display.innerText.slice(0,-1);
        }
        break;
      case '=':
        try {
          if(display.innerText){
            display.innerText = eval(display.innerText);
          }
        } catch(error) {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
