import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 208px;
  height: 130px;
  padding: 16px;
  background-color: ${props => props.hexColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: ${props => `${props.hexColor}cc`};
  }
`;

const CardHeader = styled.div``;
const CardChip = styled.div`
  width: 45px;
  height: 25px;
  margin: 8px;
  border-radius: 10%;
  background-color: #cbba64;
`;
const CardBottom = styled.div``;
const CardNumber = styled.div``;
const CardInfo = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
const CardParagraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${props => props.width}px;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  overflow-y: auto;
`;

const CardAddBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
`;

export {
  CardAddBox,
  CardContainer,
  CardBox,
  CardHeader,
  CardChip,
  CardBottom,
  CardNumber,
  CardInfo,
  CardParagraph,
  GridContainer,
};
