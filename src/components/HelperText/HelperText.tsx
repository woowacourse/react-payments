import styled from '@emotion/styled';

type HelperTextProps = {
  text?: string;
  type: 'isError' | 'isValid';
};

const StyledHelperText = styled.div<HelperTextProps>`
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
