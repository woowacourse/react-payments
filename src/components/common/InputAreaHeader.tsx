import styled from '@emotion/styled';

interface InputAreaHeaderProps {
  title: string;
  caption?: string;
}

const InputAreaHeader = ({ title, caption }: InputAreaHeaderProps) => {
  return (
    <InputLabelsContainer>
      <Title>{title}</Title>
      <Caption>{caption || ''}</Caption>
    </InputLabelsContainer>
  );
};

export default InputAreaHeader;

const InputLabelsContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  line-height: 100%;
  margin-bottom: 4px;
`;

const Caption = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 100%;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.caption};
`;
