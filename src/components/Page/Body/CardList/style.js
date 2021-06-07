import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/style/FlexCenter';

const Container = styled.div`
  width: 100%;
  height: 32.5rem;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  overflow: auto;
`;

const CardListContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const CardAddButtonContainer = styled(FlexCenter)`
  width: 100%;
  margin: 0;
`;

const CardItemContainer = styled(FlexCenter)`
  width: 100%;
  flex-direction: column;
  margin: 0;
  margin-bottom: 1.5rem;
`;

const CardNickName = styled(FlexCenter)`
  width: 100%;
  margin: 0.6rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #575757;
`;

export { Container, CardListContainer, CardAddButtonContainer, CardItemContainer, CardNickName };
