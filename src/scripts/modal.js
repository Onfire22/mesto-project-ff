//функция открытия модального окна
//функция закрытия модального окна
//функция закрытия overlay
//функция нажатия esc
export function openModal (modal) {
  modal.classList.add('popup_is-opened');
  window.addEventListener('keydown', closeEsc);
  modal.addEventListener('click', closeOverlay);
}

export function closeModal (modal) {
  modal.classList.remove('popup_is-opened');
  window.removeEventListener('keydown', closeEsc);
  window.removeEventListener('click', closeOverlay);
}

function closeEsc (event) {
  const activeModal = document.querySelector('.popup_is-opened');
  if(event.key === 'Escape') {
    closeModal(activeModal);
  }
}

function closeOverlay (event) {
  if(event.target.classList.contains('popup_is-opened' || event.target.classList.contains('popup__close'))) {
    closeModal(event.target);
  }
}