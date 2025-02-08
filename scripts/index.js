const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*elements*/
const profileEditButton = document.querySelector(".profile__button-edit");
const profileEditModal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__button-close");
const profileName = document.querySelector(".profile__name");
const profileDescrition = document.querySelector(".profile__description");
const profileEditName = document.querySelector(".modal__form-name");
const profileEditDescription = document.querySelector(
  ".modal__form-description"
);
const modalSaveButton = document.querySelector(".modal__button-save");
const profileEditForm = document.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector(".cards__list");

/*functions*/

/*Event Listeners*/
profileEditButton.addEventListener("click", () => {
  profileEditName.value = profileName.textContent;
  profileEditDescription.value = profileDescrition.textContent;
  profileEditModal.classList.add("modal_opened");
});

modalCloseButton.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileEditModal.classList.remove("modal_opened");
  profileName.textContent = profileEditName.value;
  profileDescrition.textContent = profileEditDescription.value;
});

initialCards.forEach((cardData) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardList.append(cardElement);
});
