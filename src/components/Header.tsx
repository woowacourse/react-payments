import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  navigator: boolean;
}

const Header = ({ title, navigator }: Props) => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  return (
    <S.Header>
      {navigator && (
        <S.Navigator
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={goToMain}
        >
          <path
            d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
            stroke="#525252"
            strokeWidth="1.5"
          />
        </S.Navigator>
      )}

      <span>{title}</span>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    display: flex;
    align-items: center;
    margin-top: 24px;
  `,

  Navigator: styled.svg`
    margin-right: 24px;
    cursor: pointer;
  `,
};

export default Header;
