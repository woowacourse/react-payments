import { Input, Button, Modal } from '..';

import { CARD_RULE } from '../../constants';
import { CardInfoContext } from '../../contexts';

export default function CardCVCInput() {
  return (
    <CardInfoContext.Consumer>
      {({ CVC, setCVC, isModalOpen, toggleModal }) => (
        <div>
          <Input
            description="보안 코드(CVC/CVV)"
            type="password"
            width="84px"
            value={CVC}
            maxLength={CARD_RULE.CVC_LENGTH}
            onChangeFunc={setCVC}
          />
          <Button
            border="1px solid #BABABA"
            color="#969696"
            content="?"
            margin={{ l: '11px' }}
            shape="circle"
            size="small"
            onClickFunc={toggleModal}
          />
          <Modal
            visible={isModalOpen}
            description="카드 뒷면에 적힌 유효성 검사 코드"
          />
        </div>
      )}
    </CardInfoContext.Consumer>
  );
}
