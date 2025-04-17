import styled from '@emotion/styled';

type HelperTextProps = {
  text?: string;
  type: 'isError' | 'isValid';
};

const StyledHelperText = styled.div<HelperTextProps>`
  font-size: 10px;
  margin-top: 10px;
  color: ${(props) => {
    switch (props.type) {
      case 'isError':
        return '#FF3D3D';
      case 'isValid':
        return '#15fc04';
    }
  }};
`;

const HelperText = ({ text, type }: HelperTextProps) => {
  return <StyledHelperText type={type}>{text}</StyledHelperText>;
};

export default HelperText;
