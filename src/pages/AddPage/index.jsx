import { useState, useRef, useEffect } from "react";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Form from "../../components/Form";
import PasswordForm from "../../components/PasswordForm";

import { PageWrapper, CardWrapper, FooterWrapper } from "./style";

import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { CARD_NUMBER, DUE_DATE, OWNER, CVC, PASSWORD, COLORS, MONTH } from '../../constant'

function AddPage() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [dueDate, setDueDate] = useState(["", ""]);
  const [owner, setOwner] = useState("");
  const [cvc, setCvc] = useState("");
  const [password, setPassword] = useState(["", ""]);
  const [allRequired, setAllRequired] = useState(false);
  const [error, setError] = useState([false, false]);


  useEffect(() => {
    setAllRequired(
      cardNumbers.join("").length >= CARD_NUMBER.UNIT_LENGTH * 4 &&
      dueDate[0].length >= DUE_DATE.UNIT_LENGTH &&
      dueDate[1].length >= DUE_DATE.UNIT_LENGTH &&
      owner &&
      cvc.length >= CVC.UNIT_LENGTH &&
      password[0] &&
      password[1]
    );
  }, [cardNumbers, dueDate, owner, cvc, password, error]);

  const firstCardNumberInputRef = useRef();
  const secondCardNumberInputRef = useRef();
  const thirdCardNumberInputRef = useRef();
  const fourthCardNumberInputRef = useRef();

  const dueYearInputRef = useRef();

  const secondPasswordInputRef = useRef();

  const cardNumberInputRefs = [
    firstCardNumberInputRef,
    secondCardNumberInputRef,
    thirdCardNumberInputRef,
    fourthCardNumberInputRef,
  ];

  const focusNextNumberInput = (index) => {
    cardNumberInputRefs[index+1]?.current.focus();
  }

  const handleCardNumber = ({target:{value}}, index) => {
    if (value.length > CARD_NUMBER.UNIT_LENGTH || isNaN(value)) return;

    setCardNumbers((prev) => {
      const newState = [...prev];
      newState[index] = value;
      return newState;
    });
 
    if(value.length >= CARD_NUMBER.UNIT_LENGTH) {
      focusNextNumberInput(index);
    }
  };

  const handleDueDate = ({target:{value}}, index) => {
    if (value.length > DUE_DATE.UNIT_LENGTH) return;

    setDueDate((prev) => {
      const newState = [...prev];
      newState[index] = value;
      return newState;
    });
    
    if(index===0 && (value > MONTH.MAX || value < MONTH.MIN)) {
      setError((prev) => {
        const newState = [...prev];
        newState[0] = value > MONTH.MAX || value < MONTH.MIN;
        return newState;
      });
    }
    
    else {
      const currentYear = new Date().getFullYear().toString().slice(2);
      setError((prev) => {
        const newState = [...prev];
        newState[0] = value > currentYear;
        return newState;
      });
    }

    if(value.length >= DUE_DATE.UNIT_LENGTH) {
      dueYearInputRef.current.focus();
    }
  };

  const handleOwner = ({target:{value}}) => {
    if (value.length > OWNER.MAX_LENGTH) return;

    setOwner(value);
  };

  const handleCvc = ({target:{value}}) => {
    if (value.length > CVC.UNIT_LENGTH || isNaN(value)) return;

    setCvc(value);
  };

  const handlePasswordFirst = ({target:{value}}) => {
    if (value.length > PASSWORD.UNIT_LENGTH || isNaN(value)) return;

    setPassword((prev) => {
      const newState = [...prev];
      newState[0] = value;
      return newState;
    });

    if(value.length >= 1) {
      secondPasswordInputRef.current.focus();
    }
  }

  const handlePasswordSecond = ({target:{value}}) => {
    if (value.length > PASSWORD.UNIT_LENGTH || isNaN(value)) return;

    setPassword((prev) => {
      const newState = [...prev];
      newState[1] = value;
      return newState;
    });
  }

  const handleSubmit = () => {
   if(error.month || error.year) {
      alert('만료일을 확인해주세요');
      return;
    }
    alert(`${owner}님의 카드가 등록되었습니다`)
  }

  return (
    <PageWrapper>
      <Header>
        <Button><Arrow /></Button>
        <h2>카드 추가</h2>
      </Header>
      <CardWrapper>
        <Card
          size="small"
          company="우테코"
          cardNumbers={cardNumbers}
          owner={owner || "NAME"}
          dueMonth={dueDate.month || 'MM'}
          dueYear={dueDate.year || 'YY'} 
        />
      </CardWrapper>
      <Form 
        label='카드 번호' 
        inputInfo={[
          {type: 'number', id: 'first-card-number', value: cardNumbers[0], ref: cardNumberInputRefs[0]},
          {type: 'number', id: 'second-card-number', value: cardNumbers[1], ref: cardNumberInputRefs[1]},
          {type: 'password', id: 'third-card-number', value: cardNumbers[2], ref: cardNumberInputRefs[2]},
          {type: 'password', id: 'fourth-card-number', value: cardNumbers[3], ref: cardNumberInputRefs[3]}
        ]}
        onChange={handleCardNumber}
        />
      <Form 
        label='만료일'
        size={50}
        inputInfo={[
          {type: 'number', id: 'due-month', value: dueDate[0], placeholder: 'MM'},
          {type: 'number', id: 'due-year', value: dueDate[1], ref: dueYearInputRef, placeholder: 'YY'},
        ]}
        onChange={handleDueDate}
        />
      <Form 
        label='카드 소유자 이름 (선택)'
        countHelper={OWNER.MAX_LENGTH}
        inputInfo={[
          {type: 'string', id: 'owner', value: owner, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.'},
        ]}
        onChange={handleOwner}
        />
      <Form 
        label='보안 코드(CVC/CVV)'
        size={30}
        questionHelper={true}
        inputInfo={[
          {type: 'password', id: 'cvc', value: cvc},
        ]}
        onChange={handleCvc}
        helpText='카드 뒷면의 7자리 숫자 중 마지막 3자리'
        />
      <PasswordForm 
        label='카드 비밀번호'
        size={12}
        inputInfo={[
          {type: 'password', id: 'first-password', value: password[0]},
          {type: 'password', id: 'second-password', value: password[1], ref:secondPasswordInputRef},
        ]}
        onChangeFirst={handlePasswordFirst}
        onChangeSecond={handlePasswordSecond}
      />
       <FooterWrapper> 
        {allRequired && <Button color={COLORS.MINT} onClick={handleSubmit}>다음</Button> }
      </FooterWrapper>
    </PageWrapper>
  );
}

export default AddPage;
