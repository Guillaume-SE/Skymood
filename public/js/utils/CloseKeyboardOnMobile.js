import DomElements from "../other/DomElements.js";

class CloseKeyboardOnMobile {

    closeKeyboardOnSubmit() {
        const domElements = new DomElements();
        const keyboard    = domElements.getBySelector("#city");

        keyboard.addEventListener('keypress', (event) => {
            if(event.key === 'Enter') {
                keyboard.blur();
            }
        });
    }
}

export default CloseKeyboardOnMobile;