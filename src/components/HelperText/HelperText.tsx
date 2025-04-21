import styled from '@emotion/styled';

type HelperTextProps = {
  text?: string;
  type: 'isError' | 'isValid';
};

const StyledHelperText = styled.div<HelperTextProps>`
  font-size: 10px;
  margin-top: 10px;
  color: ${(props) => {
    return { isError: '#FF3D3D', isValid: '#15fc04' }[props.type];
  }};
`;

const HelperText = ({ text, type }: HelperTextProps) => {
  return <StyledHelperText type={type}>{text}</StyledHelperText>;
};

export default HelperText;
