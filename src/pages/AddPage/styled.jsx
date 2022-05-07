import styled from 'styled-components';

import { Button, Card } from '../../components';

const StyledPage = styled.form`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-size: 16px;
  margin-left: 18px;
`;

const StyledCard = styled(Card)`
  align-self: center;
  margin-bottom: 25px;
`;

const NextButton = styled(Button)`
  align-self: end;
`;

const Dimmer = styled.div`
  background: #000000a1;
  height: 757px;
  margin: -30px -30px -30px -30px;
  position: absolute;
  width: 400px;
`;

const CardCompanyModal = styled.div`
  animation: show 0.2s;
  background: #fdfdfd;
  border-radius: 5px 5px 0 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 227px;
  position: absolute;
  width: 400px;
`;

const CardCompany = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const CardCompanyName = styled.div`
  color: #525252;
  margin-top: 10px;
  font-size: 12px;
  line-height: 14px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

export {
  StyledPage,
  Header,
  Title,
  StyledCard,
  NextButton,
  Dimmer,
  CardCompanyModal,
  CardCompany,
  CardCompanyName,
  InputGroup,
};
