import type { ComponentProps } from 'react';
import BC카드 from '../../assets/payments/vendors/BC카드.png';
import 국민카드 from '../../assets/payments/vendors/국민카드.png';
import 롯데카드 from '../../assets/payments/vendors/롯데카드.png';
import 신한카드 from '../../assets/payments/vendors/신한카드.png';
import 우리카드 from '../../assets/payments/vendors/우리카드.png';
import 카카오뱅크 from '../../assets/payments/vendors/카카오뱅크.png';
import 하나카드 from '../../assets/payments/vendors/하나카드.png';
import 현대카드 from '../../assets/payments/vendors/현대카드.png';
import type { CreditCardVendorName } from '../../domain/CreditCardVendor';
import { Icon } from '../common/Icon';

const CreditCardVendorIcons: Record<CreditCardVendorName, string> = {
  BC카드,
  신한카드,
  카카오뱅크,
  현대카드,
  우리카드,
  롯데카드,
  하나카드,
  국민카드,
};

type VendorIconProps = {
  vendor: CreditCardVendorName;
} & Omit<ComponentProps<typeof Icon>, 'src' | 'alt' | 'size'> &
  Partial<Pick<ComponentProps<typeof Icon>, 'size'>>;

export const VendorIcon = (props: VendorIconProps) => {
  const { vendor, size, ...iconProps } = props;

  return (
    <Icon src={CreditCardVendorIcons[vendor]} alt={vendor} size={size ?? 4.5} {...iconProps} />
  );
};
