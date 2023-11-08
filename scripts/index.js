// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard (item, removeCard) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  return cardElement;
}
// @todo: Функция удаления карточки
function removeCard () {
  const removeBtn = document.querySelector('.card__delete-button');
  removeBtn.closest('.card').remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
  const card = createCard(item, removeCard);
  cardList.append(card);
})