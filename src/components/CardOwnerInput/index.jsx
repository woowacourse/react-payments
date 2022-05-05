import PropTypes from "prop-types";
import InputBox from "components/common/InputBox";
import { Input } from "components/common/Input/style";
import { CardInputWrapper } from "pages/style";
import { OwnerHeader } from "./style";
import { OWNER } from "constant";

function CardOwnerInput({ owner, handleChangeOwner }) {
  return (
    <CardInputWrapper>
      <OwnerHeader>
        <label>카드 소유자 이름 (선택)</label>
        <div>
          {owner.length}/{OWNER.MAX_LENGTH}
        </div>
      </OwnerHeader>
      <InputBox>
        <Input
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={owner}
          onChange={handleChangeOwner}
        />
      </InputBox>
    </CardInputWrapper>
  );
}

CardOwnerInput.propTypes = {
  owner: PropTypes.string,
  handleChangeOwner: PropTypes.func,
};

export default CardOwnerInput;
