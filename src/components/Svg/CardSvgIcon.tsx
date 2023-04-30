import {
  BC,
  HANA,
  HYUNDAI,
  KAKAOBANK,
  KOOKMIN,
  LOTTE,
  SHINHAN,
  WOORI,
} from '.';
import { CardCompanyType } from '../../types/Card';

interface CardSvgIconProps {
  type: CardCompanyType;
  size?: number;
}

const CARD_ICON_COMPONENTS: { [key in CardCompanyType]: any } = {
  'bc-card': <BC />,
  'hana-card': <HANA />,
  'hyundai-card': <HYUNDAI />,
  'kakao-card': <KAKAOBANK />,
  'kookmin-card': <KOOKMIN />,
  'lotte-card': <LOTTE />,
  'shinhan-card': <SHINHAN />,
  'woori-card': <WOORI />,
};

const CardSvgIcon = ({ type, size }: CardSvgIconProps) => {
  return CARD_ICON_COMPONENTS[type];
};

export default CardSvgIcon;
