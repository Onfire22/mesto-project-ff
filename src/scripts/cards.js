//массив карточек +
//функция создания карточки +
//функция удаления +
//функция лайка
import { cardTemplate, cardList } from "./index.js";

const archyz = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg", import.meta.url);
const chelyabinsk = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg", import.meta.url);
const ivanovo = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg", import.meta.url);
const kamchatka = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg", import.meta.url);
const cholmogorsk = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg", import.meta.url);
const baikal = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg", import.meta.url);

export const initialCards = [
  {
    name: "Архыз",
    link: archyz,
  },
  {
    name: "Челябинская область",
    link: chelyabinsk,
  },
  {
    name: "Иваново",
    link: ivanovo,
  },
  {
    name: "Камчатка",
    link: kamchatka,
  },
  {
    name: "Холмогорский район",
    link: cholmogorsk,
  },
  {
    name: "Байкал",
    link: baikal,
  }
];

export function createCard (item, removeCard, likeCard, openCard) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);
  const cardImg = cardElement.querySelector('.card__image');
  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardList.addEventListener('click', likeCard);
  cardImg.addEventListener('click', openCard);
  return cardElement;
}

export function removeCard (event) {
  event.target.closest('.card').remove();
}

export function likeCard (event) {
  if(event.target.classList.contains('card__like-button')) {
    event.target.classList.toggle('card__like-button_is-active');
  }
}