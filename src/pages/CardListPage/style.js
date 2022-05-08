import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  padding-bottom: 20px;
`;

export const HeadTitle = styled.span`
  padding-left: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
`;

export const CardListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  height: 100%;
  margin-top: 65px;
  overflow-y: scroll;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.9;
`;

export const CardAlias = styled.span`
  color: ${props => (props.isNoneAlias ? '#CACACA' : '#575757')};
`;

export const CardAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 123px;
  background: #e5e5e5;
  border-radius: 5px;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #575757;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
