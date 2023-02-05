import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import ImagePopUp from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPupup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ConfirmationPopup from "./ConfirmationPopup.js";
import { SuccessInfoTooltip } from "./SuccessInfoTooltip.js";
import { FailInfoTooltip } from "./FailInfoTooltip.js";

import { Login } from "./Login.js";
import { Register } from "./Register.js";
import ProtectedRoute from "./ProtectedRoute.js";

import api from "../utils/Api.js";
import * as Auth from "./Auth";

import { CurrentUserContext } from "../context/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [deletedCard, setDeletedCard] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  const [isSelectedCardPopupOpen, setIsSelectedCardPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isFailPopupOpen, setIsFailPopupOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSuccessRegistration() {
    setIsSuccessPopupOpen(!isSuccessPopupOpen);
  }

  function handleFailRegistration() {
    setIsFailPopupOpen(!isFailPopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleDeleteButtonClick(card) {
    setIsConfirmationPopupOpen(!isConfirmationPopupOpen);
    setDeletedCard(card);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsSelectedCardPopupOpen(!isSelectedCardPopupOpen);
  }

  function closeAllPopUps() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsSelectedCardPopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsSuccessPopupOpen(false);
    setIsFailPopupOpen(false);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete() {
    api
      .deleteCardInApi(deletedCard._id)
      .then((res) => {
        console.log(res);
        closeAllPopUps();
        setCards(cards.filter((c) => c._id !== deletedCard._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    setIsLoading(true);
    api
      .editProfileInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopUps();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api
      .editAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopUps();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAddPlaceSubmit(place) {
    setIsLoading(true);
    api
      .addCardInApi(place)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopUps();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  useEffect(() => {
    handleTokenCheck();
  }, []);

  function handleTokenCheck() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      Auth.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate("/my-profile", { replace: true });
        }
      });
    }
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />

        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/my-profile" replace />
              ) : (
                <Navigate to="/sign-in" replace />
              )
            }
          />
          <Route
            path="/sign-in"
            element={<Login handleLogin={handleLogin} />}
          />
          <Route
            path="/sign-up"
            element={
              <Register
                success={handleSuccessRegistration}
                fail={handleFailRegistration}
              />
            }
          />
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute
                element={
                  <Main
                    cards={cards}
                    onEditAvatar={handleEditAvatarClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditProfile={handleEditProfileClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleDeleteButtonClick}
                  />
                }
                loggedIn={loggedIn}
              />
            }
          />
        </Routes>

        <Footer />

        <EditAvatarPupup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopUps}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopUps}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopUps}
          onAddCard={handleAddPlaceSubmit}
          isLoading={isLoading}
        />

        <ConfirmationPopup
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopUps}
          onConfirm={handleCardDelete}
        />

        <ImagePopUp
          card={selectedCard}
          isOpen={isSelectedCardPopupOpen}
          onClose={closeAllPopUps}
        />

        <SuccessInfoTooltip
          isOpen={isSuccessPopupOpen}
          onClose={closeAllPopUps}
        />

        <FailInfoTooltip isOpen={isFailPopupOpen} onClose={closeAllPopUps} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
