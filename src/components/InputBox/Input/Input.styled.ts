import styled from 'styled-components';

interface InputProps {
  maxLength: number;
  center?: boolean;
}

const InputWidth: { [key: string]: string } = {
  1: '45px',
  2: '70px',
  3: '80px',
  4: '100%',
  30: '100%',
};

export const Input = styled.input<InputProps>`
  width: ${(props) => InputWidth[props.maxLength]};
  height: 45px;

  background-color: #e5e5e5;

  border-radius: 10px;
  border: none;

  font-weight: 600;
  font-size: ${(props) => (props.type === 'password' ? '24px' : '18px')};
  letter-spacing: 2px;
  text-align: ${(props) => props.center && 'center'};

  padding: ${(props) => props.name === 'ownerName' && '0 16px'};

  &:focus {
    border: 2px solid #0078ff;
  }
`;
