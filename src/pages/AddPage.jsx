import { useState, useRef, useEffect } from "react";

import Card from "../components/Card";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { Input } from "../components/Input/style";
import {
  PageWrapper,
  HeaderWrapper,
  CardWrapper,
  PasswordWrapper,
  OwnerHeader,
  Dot,
  CVCWrapper,
  Footer
} from "./style";

function AddPage() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [dueDate, setDueDate] = useState({ month: "", year: "" });
  const [owner, setOwner] = useState("");
  const [cvc, setCvc] = useState("");
  const [password, setPassword] = useState({firstPassword: '', secondPassword: ''});
  const [allRequired, setAllRequired] = useState(false);

  useEffect(() => {
    setAllRequired(
      cardNumbers.join("").length >= 16 &&
        dueDate.month.length >= 2 &&
        dueDate.year.length >= 2 &&
        owner &&
        cvc.length >=3 &&
        password.firstPassword &&
        password.secondPassword
    );
  }, [cardNumbers, dueDate, owner, cvc, password]);

  const secondCardNumberInputRef = useRef();
  const thirdCardNumberInputRef = useRef();
  const fourthCardNumberInputRef = useRef();

  const dueYearInputRef = useRef();

  const secondPasswordInputRef = useRef();

  const cardNumberInputRefs = [
    null,
    secondCardNumberInputRef,
    thirdCardNumberInputRef,
    fourthCardNumberInputRef,
  ];

  const focusNextNumberInput = (index) => {
    cardNumberInputRefs[index]?.current.focus();
  }

  const handleCardNumber = (index, e) => {
    if (e.target.value.length > 4 || isNaN(e.target.value)) return;

    setCardNumbers((prev) => {
      const newState = [...prev];
      newState[index] = e.target.value;
      return newState;
    });
 
    if(e.target.value.length >= 4){
      focusNextNumberInput(index + 1);
    }
  };

  const handleDueDate = (key, e) => {
    if (e.target.value.length > 2) return;

    setDueDate({ ...dueDate, [key]: e.target.value });

    if(e.target.value.length >= 2) {
      dueYearInputRef.current.focus();
    }
  };

  const handleOwner = (e) => {
    if (e.target.value.length > 30) return;

    setOwner(e.target.value);
  };

  const handleCvc = (e) => {
    if (e.target.value.length > 3 || isNaN(e.target.value)) return;

    setCvc(e.target.value);
  };

  const handlePassword = (key, e) => {
    if (e.target.value.length > 1 || isNaN(e.target.value)) return;

    setPassword({...password, [key]: e.target.value});

    if(e.target.value.length >= 1) {
      secondPasswordInputRef.current.focus();
    }
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Button label="<" color="#525252" />
        <h2>카드 추가</h2>
      </HeaderWrapper>
      <CardWrapper>
        <Card
          size="small"
          company="poco"
          cardNumbers={cardNumbers}
          owner={owner || "NAME"}
          dueDate={dueDate}
        />
      </CardWrapper>
      <label>카드번호</label>
      <InputBox>
        {Array.from({ length: 4 }, (_, index) => (
          <Input
            key={index}
            ref={cardNumberInputRefs[index]}
            type={index < 2 ? "number" : "password"}
            value={cardNumbers[index]}
            onChange={(e) => handleCardNumber(index, e)}
          />
        ))}
      </InputBox>
      <label>만료일</label>
      <InputBox size="50">
        <Input
          type="number"
          value={dueDate.month}
          onChange={(e) => handleDueDate("month", e)}
        />
        <Input
          type="number"
          ref={dueYearInputRef}
          value={dueDate.year}
          onChange={(e) => handleDueDate("year", e)}
        />
      </InputBox>
      <OwnerHeader>
        <label>카드 소유자 이름 (선택)</label>
        <div>{owner.length}/30</div>
      </OwnerHeader>
      <InputBox>
        <Input
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={owner}
          onChange={handleOwner}
        />
      </InputBox>
      <label>보안 코드(CVC/CVV)</label>
      <CVCWrapper>
        <InputBox size="50">
          <Input type="password" value={cvc} onChange={handleCvc} />
        </InputBox>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13.5" cy="13.5" r="13" fill="white" stroke="#BABABA" />
          <path
            d="M12.5547 16.8203C12.5547 15.9544 12.6621 15.2643 12.877 14.75C13.0918 14.2357 13.515 13.6725 14.1465 13.0605C14.7845 12.4421 15.1882 12.0026 15.3574 11.7422C15.6178 11.3451 15.748 10.9154 15.748 10.4531C15.748 9.84115 15.5951 9.37565 15.2891 9.05664C14.9896 8.73112 14.5469 8.56836 13.9609 8.56836C13.401 8.56836 12.9486 8.72786 12.6035 9.04688C12.265 9.35938 12.0957 9.78581 12.0957 10.3262H9.72266C9.73568 9.17383 10.1263 8.26237 10.8945 7.5918C11.6693 6.92122 12.6914 6.58594 13.9609 6.58594C15.2695 6.58594 16.2884 6.91797 17.0176 7.58203C17.7533 8.24609 18.1211 9.17383 18.1211 10.3652C18.1211 11.4264 17.6263 12.4714 16.6367 13.5L15.4355 14.6816C15.0059 15.1699 14.7845 15.8828 14.7715 16.8203H12.5547ZM12.3887 19.8574C12.3887 19.4733 12.5091 19.1641 12.75 18.9297C12.9909 18.6888 13.3164 18.5684 13.7266 18.5684C14.1432 18.5684 14.472 18.6921 14.7129 18.9395C14.9538 19.1803 15.0742 19.4863 15.0742 19.8574C15.0742 20.2155 14.957 20.515 14.7227 20.7559C14.4883 20.9967 14.1562 21.1172 13.7266 21.1172C13.2969 21.1172 12.9648 20.9967 12.7305 20.7559C12.5026 20.515 12.3887 20.2155 12.3887 19.8574Z"
            fill="#969696"
          />
        </svg>
      </CVCWrapper>
      <label>카드 비밀번호</label>
      <PasswordWrapper>
        <InputBox size="10">
          <Input type="password" value={password.firstPassword} onChange={(e) => handlePassword('firstPassword', e)} />
        </InputBox>
        <InputBox size="10">
          <Input type="password" ref={secondPasswordInputRef} value={password.secondPassword} onChange={(e) => handlePassword('secondPassword', e)} />
        </InputBox>
        <Dot>•</Dot>
        <Dot>•</Dot>
      </PasswordWrapper>
      <Footer><Button label='다음' color={allRequired ? '#04C09E': 'gray'}/></Footer>
    </PageWrapper>
  );
}

export default AddPage;
