import { cardTemplate, cardList } from './index.js'
export function createCard (item, removeCard, likeCard, openCard) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);
  const cardImg = cardElement.querySelector('.card__image');
  cardImg.src = item.link;
  cardImg.alt = item.name;
  const btnLike = cardElement.querySelector('.card__like-button');
  btnLike.addEventListener('click', likeCard);
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