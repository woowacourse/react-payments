import styled from '@emotion/styled';

interface InputLabelsProps {
  title: string;
  caption?: string;
}

const InputLabels: React.FC<InputLabelsProps> = ({ title, caption }) => {
  return (
    <InputLabelsContainer>
      <Title>{title}</Title>
      <Caption>{caption || ''}</Caption>
    </InputLabelsContainer>
  );
};

export default InputLabels;

const InputLabelsContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 800;
  line-height: 100%;
  margin-bottom: 4px;
`;

const Caption = styled.p`
  font-weight: 400;
  font-size: 9.5px;
  line-height: 100%;
  vertical-align: middle;
  color: #8b95a1;
`;
