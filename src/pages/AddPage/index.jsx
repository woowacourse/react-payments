import { useState, useRef, useEffect } from "react";

import Card from "../../components/Card";
import Button from "../../components/Button";
import {
  PageWrapper,
  HeaderWrapper,
  CardWrapper,
  FooterWrapper
} from "./style";

import CardNumberForm from "./CardNumberForm";
import CardDueDateForm from "./CardDueDateForm";
import CardOwnerForm from './CardOwnerForm'
import CardCVCForm from "./CardCVCForm";
import CardPasswordForm from "./CardPasswordForm";

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
        cvc.length >= 3 &&
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

  const handleCardNumber = (index, {target:{value}}) => {
    if (value.length > 4 || isNaN(value)) return;

    setCardNumbers((prev) => {
      const newState = [...prev];
      newState[index] = value;
      return newState;
    });
 
    if(value.length >= 4){
      focusNextNumberInput(index + 1);
    }
  };

  const handleDueDate = (key, {target:{value}}) => {
    if (value.length > 2) return;

    setDueDate({ ...dueDate, [key]: value });

    if(value.length >= 2) {
      dueYearInputRef.current.focus();
    }
  };

  const handleOwner = ({target:{value}}) => {
    if (value.length > 30) return;

    setOwner(value);
  };

  const handleCvc = ({target:{value}}) => {
    if (value.length > 3 || isNaN(value)) return;

    setCvc(value);
  };

  const handlePassword = (key, {target:{value}}) => {
    if (value.length > 1 || isNaN(value)) return;

    setPassword({...password, [key]: value});

    if(value.length >= 1) {
      secondPasswordInputRef.current.focus();
    }
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Button>
          <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke="#525252" strokeWidth="1.5"/>
          </svg>
        </Button>
        <h2>카드 추가</h2>
      </HeaderWrapper>
      <CardWrapper>
        <Card
          size="small"
          company="poco"
          cardNumbers={cardNumbers}
          owner={owner || "NAME"}
          dueMonth={dueDate.month || 'MM'}
          dueYear={dueDate.year || 'YY'} 
        />
      </CardWrapper>
      <CardNumberForm cardNumbers={cardNumbers} cardNumberInputRefs={cardNumberInputRefs} handleCardNumber={handleCardNumber}/>
      <CardDueDateForm dueDate={dueDate} dueYearInputRef={dueYearInputRef} handleDueDate={handleDueDate} />
      <CardOwnerForm owner={owner} handleOwner={handleOwner} />
      <CardCVCForm cvc={cvc} handleCvc={handleCvc} />
      <CardPasswordForm password={password} handlePassword={handlePassword} secondPasswordInputRef={secondPasswordInputRef} />
      <FooterWrapper> 
        <Button color={allRequired ? '#04C09E': 'gray'}>다음</Button>
      </FooterWrapper>
    </PageWrapper>
  );
}

export default AddPage;
