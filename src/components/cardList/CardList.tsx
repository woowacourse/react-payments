import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import type { CardGetResponse } from "../../mocks/handlers";
import { useNavigate } from "react-router-dom";
import { options } from "../../hooks/useCardBrand";
import ErrorImage from "../../assets/ErrorImage.svg";

type Connection = "idle" | "loading" | "success" | "error";

export default function CardList() {
  const [connection, setConnection] = useState<Connection>("idle");
  const [data, setData] = useState<CardGetResponse[] | null>(null);
  const fetchData = async () => {
    try {
      setConnection("loading");
      const response = await fetch("/cards");

      if (!response.ok) throw new Error("에러 발생");

      const result = await response.json();
      setData(result);

      setTimeout(() => {
        setConnection("success");
      }, 1000);
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
      setConnection("error");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 0);
  }, []);

  const navigate = useNavigate();

  const enrollNewCard = () => {
    navigate("/react-payments/add");
  };

  const retryButton = () => {
    fetchData();
  };

  const findCardColor = (issuerCode: string) => {
    const selectedCardOption = options.find(
      (value) => value.issuerCode === issuerCode,
    );
    return selectedCardOption?.color || "black";
  };

  const findCardBrand = (issuerCode: string) => {
    const selectedCardOption = options.find(
      (value) => value.issuerCode === issuerCode,
    );
    return selectedCardOption?.brand || "알수 없음";
  };

  const splitCardNumberAlongCardType = (cardNumber: string) => {
    const firstNumber = cardNumber.substring(0, 1);
    if (firstNumber === "4") return cardNumber.match(/.{1,4}/g)?.join(" ");

    const firstTwoNumber = cardNumber.substring(0, 2);
    if (firstTwoNumber >= "51" && firstTwoNumber <= "55")
      return cardNumber.match(/.{1,4}/g)?.join(" ");

    if (firstTwoNumber === "36") {
      return (
        cardNumber.substring(0, 4) +
        " " +
        cardNumber.substring(4, 10) +
        " " +
        cardNumber.slice(-4)
      );
    }

    if (firstTwoNumber === "34" || firstTwoNumber === "37") {
      return (
        cardNumber.substring(0, 4) +
        " " +
        cardNumber.substring(4, 10) +
        " " +
        cardNumber.substring(10, 15)
      );
    }

    const firstSixNumber = cardNumber.substring(0, 6);
    const firstThirdNumber = cardNumber.substring(0, 3);
    const firstFourthNumber = cardNumber.substring(0, 4);

    if (
      (firstSixNumber >= "622126" && firstSixNumber <= "622925") ||
      (firstThirdNumber >= "624" && firstThirdNumber <= "626") ||
      (firstFourthNumber >= "6282" && firstFourthNumber <= "6288")
    )
      return cardNumber.match(/.{1,4}/g)?.join(" ");
  };

  return (
    <Wrapper>
      <Header>
        보유 카드 {data && data.length > 0 ? `(${data?.length})` : ""}
      </Header>
      {connection === "loading" && (
        <SpinnerWrapper>
          <Loader />
        </SpinnerWrapper>
      )}
      {connection === "success" && data?.length === 0 && (
        <Container>
          <EmptyBox></EmptyBox>
          <h2>등록된 카드가 없습니다</h2>
          <p>아래 버튼을 눌러 첫 카드를 등록해보세요</p>
          <button type="button" onClick={enrollNewCard}>
            카드 추가하기
          </button>
        </Container>
      )}
      {connection === "success" && data && data.length > 0 && (
        <CardListContainer>
          {data.map((card) => (
            <IndividualCard key={card.id}>
              <CardPreviewColor
                $backgroundColor={findCardColor(card.issuerCode)}
              ></CardPreviewColor>
              <MyCardInfo>
                <h3>{findCardBrand(card.issuerCode)}</h3>
                <p>{splitCardNumberAlongCardType(card.number)}</p>
                <p>유효기간 {card.expirationDate}</p>
              </MyCardInfo>
              <Delete type="button">x</Delete>
            </IndividualCard>
          ))}
          <AddButton
            onClick={enrollNewCard}
            style={{
              cursor: "pointer",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            + 카드 추가
          </AddButton>
        </CardListContainer>
      )}
      {connection === "error" && (
        <Container>
          <img src={ErrorImage} alt="error!"></img>
          <h2>카드 목록을 불러올 수 없어요</h2>
          <p>잠시 후 다시 시도해 주세요.</p>
          <button type="button" onClick={retryButton}>
            다시 시도
          </button>
        </Container>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
  padding: 40px 28px 40px 28px;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
  display: flex;
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: rgba(56, 60, 73, 1);
  margin-bottom: 16px;
`;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    color: rgba(53, 60, 73, 1);
    margin: 0 0 16px 0;
  }

  p {
    margin: 0 0 16px 0;
  }

  button {
    width: 100%;
    height: 44px;
    border-radius: 5px;
    background-color: rgba(51, 51, 51, 1);
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    color: rgba(255, 255, 255, 1);
    margin: 0;
    cursor: pointer;
  }

  img {
    width: 64px;
    height: 64px;
    background: rgba(51, 51, 51, 1);
    border: 1.5px solid rgba(217, 217, 217, 1);
    border-radius: 100%;
    padding: 13px 26px;
    margin-bottom: 12px;
    cursor: pointer;
  }
`;

const EmptyBox = styled.div`
  width: 160px;
  height: 100px;
  border: 1px dashed rgba(217, 217, 217, 1);
  background-color: rgba(245, 245, 245, 1);
  margin: 0;
  margin-bottom: 16px;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IndividualCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16.5px 12px;
  width: 100%;
  height: 73px;
  border-radius: 5px;
  border: 1px solid rgba(230, 230, 230, 1);
  gap: 12px;
  margin: 0;
`;

const CardPreviewColor = styled.div<{ $backgroundColor: string }>`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: ${(prop) => prop.$backgroundColor};
`;

const MyCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  margin: 0;

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    color: rgba(53, 60, 73, 1);
    margin: 0;
  }

  p {
    font-weight: 400;
    font-size: 11px;
    line-height: 100%;
    color: rgba(140, 140, 140, 1);
    margin: 0;
  }
`;

const Delete = styled.button`
  padding: 4px 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: rgba(140, 140, 140, 1);
  width: 14px;
  height: 19px;
  background-color: transparent;
  border: none;
`;

const AddButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px dashed rgba(230, 230, 230, 1);
  padding: 12px 16px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: rgba(140, 140, 140, 1);
  background-color: transparent;
  cursor: pointer;
  margin: 0;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 100px;
`;

const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e5e5e5;
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
