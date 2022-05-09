import { memo } from 'react';

import { Button } from '../../components';
import {
  CardCompany,
  CardCompanyModal,
  CardCompanyName,
  Dimmer,
} from './styled';

import { CardInfoContext } from '../../contexts';
import { CARD_COMPANY } from '../../constants';
import { preventBubbling } from '../../utils';

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
