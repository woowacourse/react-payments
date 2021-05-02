import Styled from './QuestionDescription.style';
import { Circle } from '../circle/Circle';
import CVCInfoImage from '../../../assets/CVCInfo.png';

const circleStyles = { width: '27px', height: '27px', backgroundColor: 'transparent', border: '1px solid #BABABA' };

export const QuestionDescription = () => {
  return (
    <Styled.QuestionDescription>
      <Styled.Container>
        <Circle styles={circleStyles}>
          <Styled.QuestionMark>?</Styled.QuestionMark>
        </Circle>
      </Styled.Container>
      <Styled.MessageContainer className="message-container">
        <Styled.Message>
          <img className="image" src={CVCInfoImage} alt="CVC-INFO" />
        </Styled.Message>
      </Styled.MessageContainer>
    </Styled.QuestionDescription>
  );
};
