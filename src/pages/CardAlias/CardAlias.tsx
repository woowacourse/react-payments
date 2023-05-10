import { useRef, useState } from 'react';
import Card from '../../components/Card';
import { useCardListContext } from '../../contexts/CardListContexts';
import styled from 'styled-components';
import { Input } from '../../components/Input';
import Header from '../../components/Header';
import PostResult from './PostResult';
import { wrapPromise } from './wrapPromise';

type CardAliasProps = {
  setPageCardList: () => void;
  currentId: number;
};

const CardAlias = ({ setPageCardList, currentId }: CardAliasProps) => {
  const { cardList, setCardList } = useCardListContext();
  // TODO: 단언 없애려면..? find는 애초에 undefined를 반환할 수 있다.
  const card = cardList.find(({ id }) => id === currentId)!;
  const [postResource, setPostResource] = useState<any>({
    result: {
      read() {
        return null;
      },
    },
  });

  const aliasRef = useRef<HTMLInputElement>(null);

  const postCard = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success');
        setPageCardList();
      }, 3000);
    });

    return wrapPromise(promise);
  };

  const handleClickButton = () => {
    setCardList((prev) => {
      return prev.map((card) => {
        if (card.id === currentId) {
          return { ...card, alias: aliasRef.current?.value };
        }
        return card;
      });
    });

    setPostResource({ result: postCard() });
  };

  return (
    <Styled.Wrapper>
      <Header title="카드 이름을 지어주세요." />
      <Styled.CardWrapper>
        <Card card={card} />
      </Styled.CardWrapper>
      <Styled.InputWrapper>
        <Styled.AliasInput width="240px" type="text" textAlign="center" maxLength={10} ref={aliasRef} />
      </Styled.InputWrapper>
      <Styled.ConfirmButton type="button" onClick={handleClickButton}>
        확인
      </Styled.ConfirmButton>
      <PostResult resource={postResource} />
    </Styled.Wrapper>
  );
};

export default CardAlias;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 0 20px;
  height: inherit;
`;

const CardWrapper = styled.div`
  margin-top: 35px;
`;

const InputWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;

const AliasInput = styled(Input)``;

const ConfirmButton = styled.button`
  margin-top: 30px;
`;

const Styled = {
  Wrapper,
  CardWrapper,
  InputWrapper,
  AliasInput,
  ConfirmButton,
};
