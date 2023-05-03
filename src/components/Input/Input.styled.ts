import styled from 'styled-components';

interface InputProps {
  name: string;
  maxLength: number;
  center?: boolean;
}

const InputWidth: { [key: string]: string } = {
  1: '45px',
  2: '70px',
  3: '80px',
  4: '100%',
  8: '100%',
  30: '100%',
};

export const Input = styled.input<InputProps>`
  width: ${(props) => InputWidth[props.maxLength]};
  max-width: calc(600px - 56px);
  height: 45px;

  padding: ${(props) => props.name === 'ownerName' && '0 16px'};

  background-color: ${(props) => props.name !== 'nickname' && '#e5e5e5'};

  border: none;
  border-radius: ${(props) => props.name !== 'nickname' && '10px'};
  border-bottom: ${(props) => props.name === 'nickname' && '2px solid black'};

  font-weight: 600;
  font-size: ${(props) => (props.type === 'password' ? '24px' : '18px')};
  text-align: ${(props) => props.center && 'center'};
  letter-spacing: 2px;

  &:focus {
    border: ${(props) => props.name !== 'nickname' && '2px solid #0078ff;'};
  }
`;
