//функция открытия модального окна
//функция закрытия модального окна
//функция закрытия overlay
//функция нажатия esc
export function openModal (modal) {
  modal.classList.add('popup_is-opened');
  window.addEventListener('keydown', closeEsc);
  window.addEventListener('click', closeOverlay);
  const btnClose = modal.querySelector('.popup__close');
  btnClose.addEventListener('click', () => {
    closeModal(modal);
  })
}

export function closeModal (modal) {
  modal.classList.remove('popup_is-opened');
  window.removeEventListener('keydown', closeEsc);
}

function closeEsc (event) {
  const activeModal = document.querySelector('.popup_is-opened');
  if(event.key === 'Escape') {
    closeModal(activeModal);
  }
}

function closeOverlay (event) {
  if(event.target.classList.contains('popup_is-opened')) {
    event.target.classList.remove('popup_is-opened');
  }
}