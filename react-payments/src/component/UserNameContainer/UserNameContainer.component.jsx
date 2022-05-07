import { useContext } from "react";

import Label from "component/common/Label/Label.component";
import InputBox from "component/common/InputBox/InputBox.component";
import Input from "component/common/Input/Input.component";

import { UserNameContext } from "provider/UserNameProvider";

const UserNameContainer = () => {
  const {
    state: { userName },
    action: { onChangeUserName },
  } = useContext(UserNameContext);

  return (
    <>
      <Label type="user-name">
        <div>카드 소유자 이름(선택)</div>
        <div>{`${userName.length}/30`}</div>
      </Label>

      <InputBox formType="user-name">
        <Input
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={userName}
          onChange={onChangeUserName}
          data-testid="card-user"
        />
      </InputBox>
    </>
  );
};

export default UserNameContainer;
