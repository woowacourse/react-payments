import styled from 'styled-components';

export default function Label({ children, htmlFor, marginBottom }) {
  return (
    <Styled.Label htmlFor={htmlFor} marginBottom={marginBottom}>
      {children}
    </Styled.Label>
  );
}

const Styled = {
  Label: styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  margin-bottom: ${({ marginBottom }) => marginBottom || '4px'}
  color: #525252;
`,
};
