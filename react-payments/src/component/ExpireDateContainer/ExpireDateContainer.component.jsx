import Input from "../common/Input/Input.component";
import InputBox from "../common/InputBox/InputBox.component";
import ConnectorBox from "../common/ConnectorBox/ConnectorBox.component";
import MessageBox from "../common/MessageBox/MessageBox.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants";
import Label from "../common/Label/Label.component";
import { useContext } from "react";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";

const ExpireDateContainer = () => {
  const {
    state: { expireDate, expireDateReady },
    action: { onChangeExpireDate, onKeyDownExpireDate },
  } = useContext(ExpireDateContext);

  return (
    <>
      <Label>만료일</Label>
      <InputBox formType="expire-date">
        <Input
          type="number"
          placeholder="MM"
          name="month"
          value={expireDate.month}
          onChange={onChangeExpireDate}
          onKeyDown={onKeyDownExpireDate}
          data-testid="expire-date-0"
        />
        <ConnectorBox>/</ConnectorBox>
        <Input
          type="number"
          placeholder="YY"
          name="year"
          value={expireDate.year}
          onChange={onChangeExpireDate}
          onKeyDown={onKeyDownExpireDate}
          data-testid="expire-date-1"
        />
      </InputBox>

      {expireDateReady ? (
        <MessageBox type="success">{SUCCESS_MESSAGE}</MessageBox>
      ) : (
        <MessageBox type="error">{ERROR_MESSAGE.EXPIRE_DATE} </MessageBox>
      )}
    </>
  );
};

export default ExpireDateContainer;
