import styled from '@emotion/styled';

interface InputLabelsProps {
  title: string;
  caption?: string;
}

const InputLabels: React.FC<InputLabelsProps> = ({ title, caption }) => {
  return (
    <Width100>
      <Title>{title}</Title>
      <Caption>{caption || ''}</Caption>
    </Width100>
  );
};

export default InputLabels;

const Width100 = styled.div`
  width: 100%;
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
