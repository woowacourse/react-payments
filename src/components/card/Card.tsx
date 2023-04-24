import styled from 'styled-components';

interface CardProps {
  cardNumberSet: string[];
  owner: string;
  expiracy: string;
}

const Wrapper = styled.div`
  width: 213px;
  height: 133px;
  background: #333;
  box-shadow: 3px 3px 5px #00000040;
  border-radius: 5px;
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`;
const Title = styled.div`
  color: #383838;
  font-size: 12px;
  height: 14px;
  margin-bottom: 22px;
`;
const Magnet = styled.div`
  background: #cbba64;
  position: absolute;
  top: 40px;
  width: 40px;
  height: 26px;
  margin-bottom: 15px;
  border-radius: 4px;
`;
const CardNumber = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 4px;
  align-items: center;
`;
const CardNumberItem = styled.span`
  width: 34px;
  letter-spacing: 3px;
  &:nth-child(3) {
    font-size: 24px;
    letter-spacing: 2px;
  }
  &:last-child {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

const OwnerAndExpiracyWrapper = styled.div``;

const Owner = styled.span`
  display: inline-block;
  width: 130px;
  color: #fff;
  font-weight: bold;
  overflow-x: hidden;
  word-break: break-all;
  font-size: 14px;
`;

const Expiracy = styled.span`
  color: #fff;
  float: right;
  font-weight: bold;
  font-size: 14px;
`;

const ENCRYPT_INDEX = 2;

export default function Card({ cardNumberSet, owner, expiracy }: CardProps) {
  const onwerName = owner.length > 10 ? owner.slice(0, 10) : owner;
  return (
    <Wrapper>
      <Title></Title>
      <Magnet />
      <div>
        <CardNumber>
          {cardNumberSet.map((cardNumberItem: string, index: number) => (
            <CardNumberItem key={`${index}${cardNumberItem}`}>
              {index >= ENCRYPT_INDEX
                ? '·'.repeat(cardNumberItem.length)
                : cardNumberItem}
            </CardNumberItem>
          ))}
        </CardNumber>
        <OwnerAndExpiracyWrapper>
          <Owner title={owner}>{onwerName}</Owner>
          <Expiracy>{expiracy}</Expiracy>
        </OwnerAndExpiracyWrapper>
      </div>
    </Wrapper>
  );
}
