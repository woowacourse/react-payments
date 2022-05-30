import styled from 'styled-components';

interface BlockInputProps {
  isValid: boolean;
}

export const Input = styled.input`
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
`;

export const BlockInput = styled(Input)<BlockInputProps>`
  height: 45px;
  padding: 12px;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_001};
  border-radius: 7px;
  color: ${({ theme }) => theme.PALETTE.MINT_002};

  &:focus {
    outline-color: ${({ theme, isValid }) =>
      isValid ? theme.PALETTE.MINT_002 : theme.PALETTE.RED_001};
  }
`;

export const UnderlineInput = styled(Input)`
  padding: 0 0 6px;
  width: 241px;
  background-color: ${({ theme }) => theme.PALETTE.WHITE_001};
  border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.GRAY_002};
  border-radius: 0;
  color: ${({ theme }) => theme.PALETTE.GRAY_003};

  &:focus {
    outline: none;
  }
`;
