import styled from '@emotion/styled';

export const StyledInput = styled.input<{isError: boolean}>`
    flex: 1;
    width: 100%;
    border: 1px solid ${({isError}) => (isError ? '#FF3D3D' : '#ACACAC')};
    color: #000000;
    font-size: 11px;
    font-weight: 400;
    padding: 8px;
    border-radius: 2px;

    &::placeholder {
      color: #ACACAC;
    }

    &:focus {
      border-color: ${({isError}) => (isError ? '#FF3D3D' : '#000000')};
    }
`;