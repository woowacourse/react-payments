import { ChangeEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CardContext from '../../../contexts/CardContext';

import { PATHNAME } from '../../../constants/pathname';
import { generateCardKey } from '../../../domains/keyGenerator';
import { useIsFilledForm } from '../../../hooks/useIsFilledForm';
import { useUpdateCardList } from '../../../hooks/useUpdateCardList';

import * as styled from './NicknamePage.styled';
import CardPreviewSection from '../../CardPreviewSection/CardPreviewSection';
import Input from '../../Input/Input';
import FormSubmitButton from '../../FormSubmitButton/FormSubmitButton';

const NicknamePage = () => {
  const {
    cardList,
    setCardList,
    serialNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    company,
    nickname,
    setNickname,
  } = useContext(CardContext);
  const card = {
    serialNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    company,
    nickname,
  };
  const updateCardList = useUpdateCardList(card, setCardList);
  const navigation = useNavigate();

  const title =
    cardList && Object.hasOwn(cardList, generateCardKey(card))
      ? '카드 별칭을 수정합니다'
      : '카드 등록이 완료되었습니다';

  const isFilledForm = useIsFilledForm();
  useEffect(() => {
    if (!isFilledForm) {
      navigation(PATHNAME.HOME);
    }
  }, [isFilledForm, navigation]);

  const handleClickFormSubmit = () => {
    updateCardList();
    navigation(PATHNAME.HOME);
  };

  return (
    <styled.NicknamePageLayout>
      <styled.Title>{title}</styled.Title>
      <CardPreviewSection />
      <styled.InputBox>
        <Input
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setNickname(value)
          }
          width="xl"
          type="text"
          maxLength={15}
          value={nickname}
          isFocus={true}
        />
      </styled.InputBox>
      <FormSubmitButton
        handleClickFormSubmit={handleClickFormSubmit}
        text="확인"
      />
    </styled.NicknamePageLayout>
  );
};

export default NicknamePage;
