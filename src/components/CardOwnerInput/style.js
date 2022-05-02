import styled from "styled-components";

const OwnerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    font-size: 12px;
    margin-bottom: 10px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.DARK_GRAY};
  }
`;

export { OwnerHeader };
