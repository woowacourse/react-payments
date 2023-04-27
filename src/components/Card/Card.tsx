import * as Styled from './Card.styles';
import CardType from '../../types/Card';
import CardLabel from '../@common/CardLabel';

type CardProps = Omit<CardType, 'id'> & {
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

interface cardCompanyColorsType {
  [cardName: string]: string;
}

const cardCompanyColors: cardCompanyColorsType = {
  BC카드: '#F04679',
  하나카드: '#009490',
  현대카드: '#333333',
  카카오뱅크: '#F1D900',
  롯데카드: '#ED1C24',
  신한카드: '#0046FF',
  우리카드: '#4BC2F1',
  국민카드: '#5D544B',
};

const Card = ({
  cardNumbers,
  expiredDates,
  cardOwnerName,
  cardCompany,
  setIsModalOpen,
}: CardProps) => {
  return (
    <Styled.Wrapper
      background={cardCompanyColors[cardCompany]}
      onClick={() => {
        setIsModalOpen && setIsModalOpen(true);
      }}
    >
      <CardLabel
        labelText={cardCompany || '00카드'}
        color={cardCompany ? '#ffffff' : '#000000'}
      />
      <Styled.CardItemWrapper>
        <Styled.Chip />
        <Styled.TextWrapper>
          <Styled.CardText>{cardNumbers[0]}</Styled.CardText>
          <Styled.CardText>{cardNumbers[1]}</Styled.CardText>
          <Styled.CardText>{'•'.repeat(cardNumbers[2].length)}</Styled.CardText>
          <Styled.CardText>{'•'.repeat(cardNumbers[3].length)}</Styled.CardText>
        </Styled.TextWrapper>
        <Styled.TextWrapper>
          <Styled.CardText cardName>{cardOwnerName || 'NAME'}</Styled.CardText>
          <Styled.CardText>
            {expiredDates[0] || 'MM'} / {expiredDates[1] || 'YY'}
          </Styled.CardText>
        </Styled.TextWrapper>
      </Styled.CardItemWrapper>
    </Styled.Wrapper>
  );
};

export default Card;
