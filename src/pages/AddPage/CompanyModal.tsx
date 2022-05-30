import {
  CardCompany,
  CardCompanyModal,
  CardCompanyName,
  Dimmer,
} from './styled';

import { Button } from 'components';
import { CARD_COMPANY } from 'constants/index';
import { CardInfoContext } from 'contexts';
import { memo } from 'react';
import { preventBubbling } from 'utils/event';

function CompanyModal() {
  return (
    <CardInfoContext.Consumer>
      {({ toggleCardCompanyModal, onClickCardCompany }) => (
        <Dimmer onClick={toggleCardCompanyModal}>
          <CardCompanyModal onClick={preventBubbling}>
            {CARD_COMPANY.map(({ name, color }) => (
              <CardCompany
                data-name={name}
                data-color={color}
                onClick={onClickCardCompany}
                key={name}
              >
                <Button
                  border="0.1px solid #bababa"
                  bgColor={color}
                  shape="circle"
                />
                <CardCompanyName>{name}</CardCompanyName>
              </CardCompany>
            ))}
          </CardCompanyModal>
        </Dimmer>
      )}
    </CardInfoContext.Consumer>
  );
}

export default memo(CompanyModal);
