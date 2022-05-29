import React, { memo, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Card from "component/common/Card/Card.component";
import CardNameInput from "component/CardNameInput/CardNameInput.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import CardControlModal from "component/CardControlModal/CardControlModal";
import Box from "styles/box";

import useReady from "hooks/useReady";
import { isDuplicatedCardName, isInvalidCardName } from "util/validator";
import {
  CardDataContext,
  deletedCardDataAction,
  editCardDataAction,
} from "provider/CardDataProvider";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import { deleteCard, editCard } from "api/cardApi";
import { RowFlexWrapper } from "styles/wrapper";
import { ColumnFlexWrapper } from "../../styles/wrapper";
import { ErrorContext } from "provider/ErrorContext";
import { CardDataType, FetchingCardDataType } from "types";

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

export interface CardPreviewProps {
  cardDatum: FetchingCardDataType;
}

const CardPreview = memo(({ cardDatum }: CardPreviewProps) => {
  const cardDataContext = useContext(CardDataContext);
  const errorContext = useContext(ErrorContext);
  if (!cardDataContext) throw new Error("Cannot find cardDataContext");
  if (!errorContext) throw new Error("Cannot find errorContext");

  const { cardData, dispatch } = cardDataContext;
  const { setError } = errorContext;

  const [newCardName, setNewCardName] = useState("");
  const [newCardNameLengthReady] = useReady(newCardName, isInvalidCardName);
  const [uniqueNewCardNameReady] = useReady(
    newCardName,
    isDuplicatedCardName,
    cardData
  );
  const { id } = cardDatum;
  const { cardName } = cardDatum.attributes;

  const [editOn, setEditOn] = useState(false);
  const [isShowModal, toggleModal] = useReducer((prev) => !prev, false);
  const navigate = useNavigate();

  const handleEditCard = () => {
    navigate(`add/${id}`);
  };

  const handleEditFormOn = () => {
    setEditOn(true);
  };

  const handleSubmitEditedName = async () => {
    dispatch(editCardDataAction({ id, cardName: newCardName }));

    try {
      await editCard(id, { cardName: newCardName });
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    }

    closeEditForm();
  };

  const handleDeleteCard = async () => {
    dispatch(deletedCardDataAction({ id }));

    try {
      await deleteCard(id);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    }
  };

  const closeEditForm = () => {
    setEditOn(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCardName(e.target.value);
  };

  return (
    <>
      <Card onClick={toggleModal} {...cardDatum.attributes} />
      <CardNameText gap="8">
        {editOn ? (
          <ColumnFlexWrapper gap="5">
            <Box
              gap="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="5px"
            >
              <CardNameInput
                styleSize="small"
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
            </Box>

            {!newCardNameLengthReady && (
              <MessageBox styleType="error">
                {ERROR_MESSAGE["card-name-length"]}
              </MessageBox>
            )}
            {!uniqueNewCardNameReady && (
              <MessageBox styleType="error">
                {ERROR_MESSAGE["unique-card-name"]}
              </MessageBox>
            )}
            {newCardNameLengthReady && uniqueNewCardNameReady && (
              <MessageBox styleType="success">{SUCCESS_MESSAGE}</MessageBox>
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
});

export default CardPreview;
