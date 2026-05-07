import styled from '@emotion/styled';

export default function HintText({ children }: { children: React.ReactNode }) {
  return <Text>{children}</Text>;
}

const Text = styled.span`
  font-size: 9.5px;
  font-weight: 400;
  color: #8b95a1;
`;
