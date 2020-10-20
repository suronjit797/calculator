let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenV = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenV += buttonText;
            screen.value = screenV;

        } else if (buttonText == '=') {
            screenV = eval(screenV);
            screen.value = screenV;

        } else if (buttonText == 'C') {
            screenV = "";
            screen.value = screenV;

        } else if (buttonText == '%') {

            screenV = eval(screenV) / 100;
            screen.value = screenV;

        } else if (buttonText == "<=") {
            screenV = screen.value.substring(0, screen.value.length * 1 - 1);
            screen.value = screenV;



        } else {
            screenV += buttonText;
            screen.value = screenV;
        }
    })
}