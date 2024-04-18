import styled from "styled-components";
import { CardInfo } from "../PaymentApp";

const UserName = ({ userName }: { userName: CardInfo[] }) => {
  const latestUserNames: { [key: number]: string } = {};

  userName.forEach((cardInfo) => {
    // NOTE: ardInfo.index가 문자열이므로 숫자로 변환
    const index = Number(cardInfo.index);
    // NOTE: 해당 인덱스의 최신 상태 가져오기
    latestUserNames[index] = cardInfo.currentValue;
  });

  return (
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px",  height:"20px"}}>
      {Object.keys(latestUserNames).map((index) => (
        <UserNameStyled key={index}> {latestUserNames[Number(index)]}</UserNameStyled>
      ))}
    </div>
  );
};

const UserNameStyled = styled.span`
  color: white;
`;

export default UserName;
