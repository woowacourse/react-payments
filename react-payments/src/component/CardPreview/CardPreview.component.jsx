import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Card from "component/common/Card/Card.component";
import CardNameInput from "component/CardNameInput/CardNameInput.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import CardControlModal from "component/CardControlModal/CardControlModal";

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
import { RowFlexWrapper } from "styles/wrapper";
import { ColumnFlexWrapper } from "../../styles/wrapper";

const CardNameText = styled(RowFlexWrapper)`
  font-weight: 700;
  font-size: 14px;
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

const EditFormBox = styled(RowFlexWrapper)`
  margin-top: 5px;
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
      <CardNameText gap="8">
        {editOn ? (
          <ColumnFlexWrapper gap="5">
            <EditFormBox gap="10">
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
          </ColumnFlexWrapper>
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
        <CardControlModal
          toggleModal={toggleModal}
          type="edit"
          handleEditCard={handleEditCard}
          handleDeleteCard={handleDeleteCard}
        />
      )}
    </>
  );
};

export default CardPreview;
