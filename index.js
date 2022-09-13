
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'CE'){
            screen.value = screen.value.substr(0,screen.value.length - 1);
        }
        else if(buttonText == 'sin'){
            screen.value = Math.sin(screen.value);
        }
        else if(buttonText == 'cos'){
            screen.value = Math.cos(screen.value);
        }
        else if(buttonText == 'tan'){
            screen.value = Math.tan(screen.value);
        }
        else if(buttonText == 'e'){
            screen.value = 2.71828182846;
        }
        else if(buttonText == 'log'){
            screen.value = Math.log(screen.value);
        }
        else if(buttonText == 'π'){
            screen.value = 3.14159265359;
        }
        else if(buttonText == '√'){
            screen.value = Math.sqrt(screen.value,2);
        }
        else if(buttonText == '^'){
            screen.value = Math.pow(screen.value,2);
        }
        else if(buttonText == 'x!'){
            var k, num,j;
            j=1
            num=screen.value;
            for(k=1;k<=num;k++){
                j=j*k;
            }
            k=k-1;
            screen.value = j;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue
        }
    })
   
}

