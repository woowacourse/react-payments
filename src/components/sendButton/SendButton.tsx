import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useCardNumberContext } from "../../context/cardNumber/CardNumberContext";
import { useCardBrandContext } from "../../context/cardBrand/CardBrandContext";
import { useExpireDateContext } from "../../context/expireDate/ExpireDateContext";
import { useCvcContext } from "../../context/cvc/CvcContext";

export default function SendButton() {
  const { cardNumber } = useCardNumberContext();
  const {
    selectedItem: { issuerCode },
  } = useCardBrandContext();
  const { expireDate } = useExpireDateContext();
  const { cvc } = useCvcContext();

  const navigate = useNavigate();
  const sendResult = async () => {
    try {
      const requestCardNumber = cardNumber.join("");
      const requestExpirationDate = `${expireDate.month}/${expireDate.year}`;
      const requestIssuerCode = issuerCode;
      const requestCvc = cvc;

      const response = await fetch("/cards", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: requestCardNumber,
          expirationDate: requestExpirationDate,
          cvc: requestCvc,
          issuerCode: requestIssuerCode,
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json();
          throw errorData;
        } else {
          throw new Error(
            `카드 정보를 저장할 수 없습니다. 다시 시도해주세요.: ${response.status}`,
          );
        }
      }

      navigate("/react-payments/enrollment", {
        state: {
          cardNumber: requestCardNumber,
          issuerCode: requestIssuerCode,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("에러 발생:", error);
        alert(error.message || "카드 정보를 저장할 수 없습니다.");
        return;
      }

      const customError = error as { code?: string; message?: string };
      if (customError.code) {
        console.error(`${customError.code}: ${customError.message}`);
        alert(customError.message);
      } else {
        console.error("알 수 없는 에러 발생:", error);
        alert("카드 정보를 저장할 수 없습니다.");
      }
    }
  };

  return (
    <Wrapper>
      <Button type="submit" onClick={sendResult}>
        확인
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  margin: 0 -20px -20px -20px;
  position: sticky;
  bottom: -20px;
  order: 999;
  margin-top: auto;
  z-index: 10;
`;

const Button = styled.button`
  padding: 20px;
  background-color: black;
  color: white;
  width: 100%;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;
