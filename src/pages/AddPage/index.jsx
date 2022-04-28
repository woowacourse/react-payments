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
      <CardNumberForm cardNumbers={cardNumbers} cardNumberInputRefs={cardNumberInputRefs} handleCardNumber={handleCardNumber}/>
      <CardDueDateForm dueDate={dueDate} dueYearInputRef={dueYearInputRef} handleDueDate={handleDueDate} />
      <CardOwnerForm owner={owner} handleOwner={handleOwner} />
      <CardCVCForm cvc={cvc} handleCvc={handleCvc} />
      <CardPasswordForm password={password} handlePassword={handlePassword} secondPasswordInputRef={secondPasswordInputRef} />
      <FooterWrapper>
        <Button label='다음' color={allRequired ? '#04C09E': 'gray'}/>
      </FooterWrapper>
    </PageWrapper>
  );
}

export default AddPage;
