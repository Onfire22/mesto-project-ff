import '../pages/index.css';
import { createCard, removeCard, likeCard } from "./card.js";
import { initialCards } from "./cards.js";
import { openModal, closeModal } from "./modal.js";
export const cardTemplate = document.querySelector('#card-template').content;
export const cardList = document.querySelector('.places__list');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const editModal = document.querySelector('.popup_type_edit');
const addModal = document.querySelector('.popup_type_new-card');
const imgModal = document.querySelector('.popup_type_image');
const imgInModal = document.querySelector('.popup__image');
const imgCaption = document.querySelector('.popup__caption');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const formElementUser = document.forms.edit_profile;
const nameInput = formElementUser.name;
const jobInput = formElementUser.description;
const formElementPlace = document.forms.new_place;
const placeName = formElementPlace.place_name;
const placeLink = formElementPlace.link;

// Вывод карточки на страницу
initialCards.forEach(function(item) {
  const card = createCard(item, removeCard, likeCard, openCard);
  cardList.append(card);
})

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(editModal);
}

function handleFormPlace (event) {
  event.preventDefault();
  const userCard = createCard({name: placeName.value, link: placeLink.value}, removeCard, likeCard, openCard);
  cardList.prepend(userCard);
  closeModal(addModal);
  formElementPlace.reset();
}

function openCard (event) {
    imgInModal.src = placeLink.value;
    imgInModal.alt = placeName.value;
    imgCaption.textContent = placeName.value;
    imgInModal.src = event.target.src;
    imgInModal.alt = `Фотография ${event.target.alt}`;
    imgCaption.textContent = event.target.alt;
    openModal(imgModal);
}

btnEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openModal(editModal);
})

btnAddCard.addEventListener('click', () => {
  openModal(addModal);
})

formElementUser.addEventListener('submit', handleFormSubmit);
formElementPlace.addEventListener('submit', handleFormPlace);