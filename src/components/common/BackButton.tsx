import styled from 'styled-components';

const Button = styled.button`
  width: 10px;
  height: 10px;
  border-left: 1.5px solid black;
  border-bottom: 1.5px solid black;
  transform: rotate(45deg);
`;

type BackButtonProps = {
  onClick?: () => void;
};

export const BackButton = (props: BackButtonProps) => {
  const { onClick } = props;

  return <Button onClick={onClick} />;
};
