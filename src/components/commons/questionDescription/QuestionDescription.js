import Styled from './QuestionDescription.style';
import { Circle } from '../circle/Circle';
import CVCInfoImage from '../../../assets/CVCInfo.png';

export const QuestionDescription = () => {
  return (
    <Styled.QuestionDescription>
      <Styled.Container>
        <Circle width="27px" height="27px" backgroundColor="transparent" border="1px solid #BABABA">
          <Styled.QuestionMark>?</Styled.QuestionMark>
        </Circle>
      </Styled.Container>
      <Styled.MessageContainer className="message-container">
        <Styled.Message>
          <img className="image" src={CVCInfoImage} />
        </Styled.Message>
      </Styled.MessageContainer>
    </Styled.QuestionDescription>
  );
};
