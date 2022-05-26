import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ERROR_MESSAGE, PATH } from '../utils/constants';
import BackwardButton from '../components/common/BackwardButton';
import Button from '../components/common/Button';
import CardPreview from '../components/common/CardPreview';
import TextBox from '../components/common/TextBox';
import useFetch from '../hooks/useFetch';

const StyledStoredCardList = styled.div`
  margin: 65px 59px;
  display: flex;
  flex-direction: column;

  height: 508px;

  overflow-y: auto;

  /* hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .button {
    width: 208px;
    min-height: 123px;
    border-radius: 5px;

    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: ${(props) => props.theme.GRAY_600};
  }

  .card-box:hover {
    opacity: 0.6;
  }

  .text-box {
    margin: 0 0 26px;
    font-weight: 700;
    line-height: 16px;
  }
`;

const StoredCardListPage = () => {
  const {
    error: errorWithGetting,
    data: cardList,
    fetch: fetchGetCardList,
  } = useFetch('get');

  useEffect(() => {
    fetchGetCardList({ API_URL: `${process.env.REACT_APP_CARD_API}/cards` });
  }, []);

  useEffect(() => {
    if (errorWithGetting) {
      alert(ERROR_MESSAGE.FAILED_GET);
    }
  }, [errorWithGetting]);

  return (
    <>
      <BackwardButton showBackWard={false}>보유 카드</BackwardButton>
      <StyledStoredCardList>
        {cardList &&
          Object.values(cardList).map(({ cardName, values, id }) => (
            <article key={id}>
              <Link to={PATH.EDIT_CARD_PAGE} state={{ cardName, values, id }}>
                <CardPreview values={values} />
              </Link>
              <TextBox fontSize="14px">{cardName}</TextBox>
            </article>
          ))}

        <Link to={PATH.ADD_CARD_PAGE}>
          <Button color="#575757" backgroundColor="#E5E5E5">
            +
          </Button>
        </Link>
      </StyledStoredCardList>
    </>
  );
};

export default StoredCardListPage;
