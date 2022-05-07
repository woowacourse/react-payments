import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Card from "component/common/Card/Card.component";
import CardNameInput from "component/CardNameInput/CardNameInput.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import Modal from "component/common/Modal/Modal.component";
import CardControlButtonBox from "component/CardControlButtonBox/CardControlButtonBox.component";

import useReady from "hooks/useReady";
import { isDuplicatedCardName, isInvalidCardName } from "util/validator";
import { CardDataContext } from "provider/CardDataProvider";
import {
  ALERT_MEESAGE,
  ERROR_MESSAGE,
  REDUCER_TYPE,
  SUCCESS_MESSAGE,
} from "constants";
import { deleteCard, editCard } from "api/cardApi";

const CardNameText = styled.div`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.cardText};
  text-align: center;
  opacity: 90%;
`;

const CardNameEditButton = styled.button`
  font-size: 14px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  font-size: 12px;
  border: none;
  padding: 5px 7px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.confirmButton};
  &:hover {
    background-color: ${({ theme }) => theme.colors.confirmButtonHover};
  }
  &:disabled {
    background-color: #f0f0f0;
    cursor: auto;
  }
`;

const EditFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  gap: 10px;
`;

const EditFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const CardPreview = ({ cardDatum, idx }) => {
  const { cardData, dispatch } = useContext(CardDataContext);
  const [newCardName, setNewCardName] = useState("");
  const [newCardNameLengthReady] = useReady(newCardName, isInvalidCardName);
  const [uniqueNewCardNameReady] = useReady(
    newCardName,
    isDuplicatedCardName,
    cardData
  );
  const { cardName, id } = cardDatum;

  const [editOn, setEditOn] = useState(false);
  const [isShowModal, toggleModal] = useReducer((prev) => !prev, false);
  const navigate = useNavigate();

  const handleEditCard = () => {
    navigate(`add/${id}`);
  };

  const handleEditFormOn = () => {
    setEditOn(true);
  };

  const handleSubmitEditedName = () => {
    dispatch({
      type: REDUCER_TYPE.EDIT,
      payload: {
        id,
        cardName: newCardName,
      },
    });

    editCard(id, { cardName: newCardName });
    closeEditForm();
    window.alert(ALERT_MEESAGE.EDIT);
  };

  const handleDeleteCard = () => {
    dispatch({
      type: REDUCER_TYPE.DELETE,
      payload: { id },
    });

    deleteCard(id);
    window.alert(ALERT_MEESAGE.DELETE);
  };

  const closeEditForm = () => {
    setEditOn(false);
  };

  const onChange = (e) => {
    setNewCardName(e.target.value);
  };

  return (
    <>
      <Card onClick={toggleModal} {...cardDatum} />
      <CardNameText>
        {editOn ? (
          <EditFormContainer>
            <EditFormBox>
              <CardNameInput
                size="small"
                value={newCardName}
                onChange={onChange}
              />
              <ConfirmButton
                onClick={handleSubmitEditedName}
                disabled={!(newCardNameLengthReady && uniqueNewCardNameReady)}
              >
                수정
              </ConfirmButton>
              <ConfirmButton onClick={closeEditForm}>X</ConfirmButton>
            </EditFormBox>

            {!newCardNameLengthReady && (
              <MessageBox type="error">
                {ERROR_MESSAGE["card-name-length"]}
              </MessageBox>
            )}
            {!uniqueNewCardNameReady && (
              <MessageBox type="error">
                {ERROR_MESSAGE["unique-card-name"]}
              </MessageBox>
            )}
            {newCardNameLengthReady && uniqueNewCardNameReady && (
              <MessageBox type="success">{SUCCESS_MESSAGE}</MessageBox>
            )}
          </EditFormContainer>
        ) : (
          <>
            <p>{cardName}</p>
            <CardNameEditButton onClick={handleEditFormOn}>
              ✏️
            </CardNameEditButton>
          </>
        )}
      </CardNameText>
      {isShowModal && (
        <Modal toggleModal={toggleModal} type="edit">
          <CardControlButtonBox
            handleEditCard={() => handleEditCard(idx)}
            handleDeleteCard={handleDeleteCard}
          />
        </Modal>
      )}
    </>
  );
};

export default CardPreview;
