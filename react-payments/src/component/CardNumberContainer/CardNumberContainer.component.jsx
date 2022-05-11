import { memo, useContext } from "react";

import Label from "component/common/Label/Label.component";
import InputBox from "component/common/InputBox/InputBox.component";
import Input from "component/common/Input/Input.component";
import ConnectorBox from "component/common/ConnectorBox/ConnectorBox.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants";
import { CardNumberContext } from "provider/CardNumberProvider";

const CardNumberContainer = memo(() => {
  const {
    state: { cardNumber, cardNumberReady },
    action: { onChangeCardNumber, onKeyDownCardNumber },
  } = useContext(CardNumberContext);

  return (
    <>
      <Label>카드 번호</Label>

      <InputBox formType="card-number">
        <Input
          type="number"
          name="first"
          value={cardNumber["first"]}
          onChange={onChangeCardNumber}
          onKeyDown={onKeyDownCardNumber}
          data-testid="card-number-0"
        />
        <ConnectorBox>-</ConnectorBox>
        <Input
          type="number"
          name="second"
          value={cardNumber["second"]}
          onChange={onChangeCardNumber}
          onKeyDown={onKeyDownCardNumber}
          data-testid="card-number-1"
        />
        <ConnectorBox>-</ConnectorBox>
        <Input
          type="password"
          name="third"
          value={cardNumber["third"]}
          onChange={onChangeCardNumber}
          onKeyDown={onKeyDownCardNumber}
          data-testid="card-number-2"
        />
        <ConnectorBox>-</ConnectorBox>
        <Input
          type="password"
          name="fourth"
          value={cardNumber["fourth"]}
          onChange={onChangeCardNumber}
          onKeyDown={onKeyDownCardNumber}
          data-testid="card-number-3"
        />
      </InputBox>

      {cardNumberReady ? (
        <MessageBox type="success">{SUCCESS_MESSAGE}</MessageBox>
      ) : (
        <MessageBox type="error">{ERROR_MESSAGE["card-number"]} </MessageBox>
      )}
    </>
  );
});

export default CardNumberContainer;
