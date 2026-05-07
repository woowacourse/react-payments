import styled from "@emotion/styled";

export default function NetworkBrandErrorMessage({ message }) {
  return (
    message && (
      <ErrorMessageDetail>
        <summary>{message}</summary>
        <ul>
          <li>Visa 브랜드는 4로 시작하는 16자리 숫자 입니다.</li>
          <li>MasterCard 브랜드는 51 ~ 55로 시작하는 16자리 숫자 입니다.</li>
          <li>
            UnionPay 브랜드는 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리
            숫자 입니다.
          </li>
          <ul>
            <li>예시: 622126~622925로 시작하는 경우: 6221 2612 3456 7890</li>
            <li>예시: 624~626로 시작하는 경우: 6240 1234 5678 9012</li>
            <li>예시: 6282~6288로 시작하는 경우: 6282 1234 5678 9012</li>
          </ul>
        </ul>
      </ErrorMessageDetail>
    )
  );
}

const ErrorMessageDetail = styled.details`
  summary {
    font-size: 11px;
    color: #b32424;
  }

  ul {
    font-size: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul > li {
    color: #2a2a2b;
  }

  ul > ul {
    padding: 0 10px;
  }

  ul > ul li {
    color: #65676b;
  }
`;
