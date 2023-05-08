import styled from 'styled-components';

type BankProfileButtonProps = {
  name: string;
  onClick: () => void;
};

const BankProfileButton = ({ children, name, onClick }: React.PropsWithChildren<BankProfileButtonProps>) => {
  return (
    <Styled.Wrapper onClick={onClick}>
      {children}
      <Styled.BankName>{name}</Styled.BankName>
    </Styled.Wrapper>
  );
};

export default BankProfileButton;

const Wrapper = styled.button`
  width: 55px;
  height: fit-content;
`;

const BankName = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

const Styled = {
  Wrapper,
  BankName,
};
