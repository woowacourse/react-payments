import { GRAY } from '../../constants/palette';
import Container from '../common/Container';
import Input from '../common/Input';
import Button from '../common/Button';
import AddCardInputContainer from './AddCardInputContainer';
import { AddCardFormContainer } from './styles';

const AddCardForm = () => {
  return (
    <AddCardFormContainer>
      <form>
        <AddCardInputContainer label={'카드번호'}>
          <Container flex alignItems="center" justifyContent="center" backgroundColor={GRAY}>
            <Input type="number" textCenter min="1111" max="9999" width="14%" />
            -
            <Input type="number" textCenter min="1111" max="9999" width="14%" />
            -
            <Input type="password" textCenter maxLength={4} width="14%" />
            -
            <Input type="password" textCenter maxLength={4} width="14%" />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={'만료일'} width="40%">
          <Container flex justifyContent="center" alignItems="center" backgroundColor={GRAY}>
            <Input type="number" textCenter maxLength={2} width="40%" />
            /
            <Input type="number" textCenter maxLength={2} width="40%" />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={['카드 소유자 이름(선택)', `0 / 30`]}>
          <Container flex justifyContent="center" backgroundColor={GRAY}>
            <Input type="text" width="90%" />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={'보안 코드(CVC/CVV)'}>
          <Container flex justifyContent="center" backgroundColor={GRAY} width="25%">
            <Input type="number" max="999" textCenter />
          </Container>
          <Container className="question-mark">
            <img src="/buttons/question-mark-btn.svg" alt="cvc/cvv 도움말" />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={'카드 비밀번호'}>
          <Container flex justifyContent="space-between" width="60%">
            <Container flex justifyContent="center" backgroundColor={GRAY} width="23%">
              <Input type="password" textCenter />
            </Container>
            <Container flex justifyContent="center" backgroundColor={GRAY} width="23%">
              <Input type="password" textCenter />
            </Container>
            <Container flex justifyContent="center" alignItems="center" width="23%">
              *
            </Container>
            <Container flex justifyContent="center" alignItems="center" width="23%">
              *
            </Container>
          </Container>
        </AddCardInputContainer>
        <Button className="submit-btn">다음</Button>
      </form>
    </AddCardFormContainer>
  );
};

export default AddCardForm;
