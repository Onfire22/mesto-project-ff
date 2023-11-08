// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function cardInit (item) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);
  cardElement.querySelector('.card__image').src = item.link;
  return cardElement;
};
// @todo: Функция удаления карточки
function removeCard (evt) {
  const eventTarget = evt.target;
  eventTarget.parentElement.remove();
};
// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
  const card = cardInit(item, removeCard);
  cardList.append(card);
});