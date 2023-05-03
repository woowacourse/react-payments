import { ChangeEvent, useContext } from 'react';

import CardContext from '../../../contexts/CardContext';

import { PATHNAME } from '../../../constants/pathname';
import { useTitle } from '../../../hooks/useTitle';
import { useNavigationTo } from '../../../hooks/useNavigationTo';
import { useUpdateCardList } from '../../../hooks/useUpdateCardList';
import { useFocusButtonOnTextStateLength } from '../../../hooks/useFocusButtonOnTextStateLength';
import { useCheckFormCompletion } from '../../../hooks/useCheckFormCompletion';

import * as styled from './NicknamePage.styled';
import CardPreviewSection from '../../CardPreviewSection/CardPreviewSection';
import Input from '../../Input/Input';

const NicknamePage = () => {
  const {
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
  const buttonRef = useFocusButtonOnTextStateLength(nickname, 15);
  const updateCardList = useUpdateCardList(
    {
      serialNumbers,
      expirationDate,
      ownerName,
      securityCode,
      password,
      company,
      nickname,
    },
    setCardList
  );
  useCheckFormCompletion();
  const { navigationTo, history } = useNavigationTo(PATHNAME.HOME);
  const isFromRegisterPage = history.at(-1) === '/register';
  const title = useTitle(
    isFromRegisterPage ? '카드 등록이 완료되었습니다' : '카드 별칭을 수정합니다'
  );

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
      <styled.SubmitButton
        ref={buttonRef}
        onClick={() => {
          updateCardList();
          navigationTo();
        }}
      >
        확인
      </styled.SubmitButton>
    </styled.NicknamePageLayout>
  );
};

export default NicknamePage;
