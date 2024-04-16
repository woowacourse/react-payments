import * as Preview from './style';
import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';

const CardInformationPreview = () => {
  return (
    <Preview.Container>
      <Preview.ImgContainer>
        <Preview.CardImg src={magnetic} alt="magnetic" />
        <Preview.CardImg src={visa} alt="visa" />
      </Preview.ImgContainer>
      <Preview.UserInformationContainer>
        <Preview.CardNumberContainer>
          <Preview.UserInfomation typo={theme.typography.cardNumber}>1234</Preview.UserInfomation>
          <Preview.UserInfomation typo={theme.typography.cardNumber}>5678</Preview.UserInfomation>
          <Preview.UserInfomation typo={theme.typography.cardNumber}>ºººº</Preview.UserInfomation>
          <Preview.UserInfomation typo={theme.typography.cardNumber}>ºººº</Preview.UserInfomation>
        </Preview.CardNumberContainer>
        <Preview.UserInfomation typo={theme.typography.cardExpirationDate}>
          04/21
        </Preview.UserInfomation>
        <Preview.UserInfomation typo={theme.typography.cardUserName}>COOKIE</Preview.UserInfomation>
      </Preview.UserInformationContainer>
    </Preview.Container>
  );
};

export default CardInformationPreview;
