import { useEffect, useState } from 'react';
import { CardType, Page, PageProps } from '../../abstracts/types';
import Card from '../common/Card';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CARD_LIST_STORAGE_KEY } from '../../abstracts/constants';
import styled from 'styled-components';
import PageTemplate from '../template/PageTemplate';
import CardAliasInput from '../box/inputSection/CardAliasInput';

const CardAliasSetPage = ({ navigate, navData }: PageProps) => {
  const { pushLocalStorage } = useLocalStorage<CardType[]>(CARD_LIST_STORAGE_KEY);

  useEffect(() => {
    if (!navData) {
      alert('잘못된 접근입니다.');
      navigate(Page.list);
    }
  }, [navData, navigate]);
  const card = navData as CardType;

  const [cardAlias, setCardAlias] = useState<string>('');

  const setAlias = () => {
    card['alias'] = cardAlias;
    pushLocalStorage(card);

    navigate(Page.list);
  };

  return (
    <PageTemplate>
      <CardAliasSetWrapper>
        <CardRegisterText>마지막으로 카드 별명을 정해주세요.</CardRegisterText>
        <Card {...card} />
        <CardAliasInputWrapper>
          <CardAliasInput
            inputValues={cardAlias}
            setInputValues={(value: string | string[]) => setCardAlias(value as string)}
          />
        </CardAliasInputWrapper>
      </CardAliasSetWrapper>
      <ButtonWrapper>
        <SubmitButton type="button" onClick={setAlias}>
          확인
        </SubmitButton>
      </ButtonWrapper>
    </PageTemplate>
  );
};

export default CardAliasSetPage;

const CardAliasSetWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CardRegisterText = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #383838;
  margin-bottom: 36px;
`;

const CardAliasInputWrapper = styled.div`
  width: 100%;
  margin-top: 36px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
`;

const SubmitButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #000000;
  background-color: transparent;
  border: none;
  height: 34px;

  cursor: pointer;
`;
