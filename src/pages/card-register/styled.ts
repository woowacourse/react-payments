import CardRegister from './CardRegister.styled';
import { CardNameInput, CardRegisterConfirm } from '../card-register-confirm/CardRegisterConfirm.styled';
import CardFront from './components/card-preview/flipable-card/card-front/CardFront.styled';
import CardBack from './components/card-preview/flipable-card/card-back/CardBack.styled';
import FlipableCardWrapper from './components/card-preview/flipable-card/FlipableCardWrapper.styled';
import FlipableCard from './components/card-preview/flipable-card/FlipableCard.styled';
import HelpTip from './components/card-form/helptip/HelpTip.styled';
import { PasswordInput, passwordInputStyle } from './components/card-form/card-password/CardPasswordInput.styled';

const S = {
  CardRegisterConfirm,
  CardRegister,
  CardNameInput,
  CardFront,
  CardBack,
  FlipableCardWrapper,
  FlipableCard,
  HelpTip,
  PasswordInput,
  passwordInputStyle,
};

export default S;
