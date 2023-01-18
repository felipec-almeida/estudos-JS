//Factory
function createMicrofone(color) {

    let isOn = true;

    function toggleOnOff() {

        if(isOn) {

            console.log("Desligar...");

        } else {

            console.log("Ligar...");

        }
        isOn = !isOn;
    }

    return {color, toggleOnOff};

}

const microfoneBlack = createMicrofone("Black");
const microfoneGray = createMicrofone("Gray");
const microfoneWhite = createMicrofone("White");

console.log(microfoneGray.color, microfoneGray.toggleOnOff());