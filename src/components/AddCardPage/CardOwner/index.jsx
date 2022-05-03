import FieldSet from '../../FieldSet';
import Input from '../../Input';
import PropTypes from 'prop-types';
import * as styled from './index.styled';

const showOwnerNameLength = (length) => {
  return `${length}`.padStart(2, '0');
};

const CardOwner = ({ ownerName, onChangeOwnerName, isError }) => {
  return (
    <styled.Container>
      <styled.MaxNumberIndicator>
        {showOwnerNameLength(ownerName.length)}/30
      </styled.MaxNumberIndicator>
      <FieldSet
        id="cardOwnerName"
        description="카드 소유자 이름(선택)"
        errorMessage="이름은 30자 이하의 영문이어야 합니다."
        isError={isError}
      >
        {
          <Input
            id="cardOwnerName"
            scale="large"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={ownerName}
            onChange={onChangeOwnerName}
          />
        }
      </FieldSet>
    </styled.Container>
  );
};

CardOwner.propTypes = {
  ownerName: PropTypes.string,
  onChangeOwnerName: PropTypes.func,
  isError: PropTypes.bool,
};

export default CardOwner;
