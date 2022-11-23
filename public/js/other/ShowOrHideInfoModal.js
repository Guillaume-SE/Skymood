import DomElements from './DomElements.js';

class ShowOrHideInfoModal {
    openModal() {
        const domElements      = new DomElements;
        const openModalButton  = domElements.getBySelector('#showModal');
        const modal            = domElements.getBySelector('#infoModal');
        const overlay          = domElements.getBySelector('#overlay');

        openModalButton.addEventListener('click', () => {
            modal.classList.add("information-modal-active");
            overlay.classList.add("information-modal__overlay-visible");
        });
    }
    closeModal() {
        const domElements       = new DomElements;
        const closeModalButton  = domElements.getBySelector('#hideModal');
        const modal             = domElements.getBySelector('#infoModal');
        const overlay           = domElements.getBySelector('#overlay');

        closeModalButton.addEventListener('click', () => {
            modal.classList.remove("information-modal-active");
            overlay.classList.remove("information-modal__overlay-visible");
        });
        overlay.addEventListener('click', () => {
            modal.classList.remove("information-modal-active");
            overlay.classList.remove("information-modal__overlay-visible");           
        });
    }
}

export default ShowOrHideInfoModal;