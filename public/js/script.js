import AddEventSubmitCityButton from './other/AddEventSubmitCityButton.js';
import ShowOrHideInfoModal      from './other/ShowOrHideInfoModal.js';
import CloseKeyboardOnMobile    from './utils/CloseKeyboardOnMobile.js';


document.addEventListener("DOMContentLoaded", function () {

    sessionStorage.clear();
    new AddEventSubmitCityButton().addEventOnClick();
    new ShowOrHideInfoModal().openModal();
    new ShowOrHideInfoModal().closeModal();
    new CloseKeyboardOnMobile().closeKeyboardOnSubmit();
});