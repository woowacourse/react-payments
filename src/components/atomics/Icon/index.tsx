import React from 'react';

import { ReactComponent as BC } from '../../../../public/assets/bc-logo.svg';
import { ReactComponent as HANA } from '../../../../public/assets/hanacard-logo.svg';
import { ReactComponent as HYUNDAI } from '../../../../public/assets/hyundaicard-logo.svg';
import { ReactComponent as KAKAO } from '../../../../public/assets/kakaobank-logo.svg';
import { ReactComponent as KB } from '../../../../public/assets/kbcard-logo.svg';
import { ReactComponent as LOTTE } from '../../../../public/assets/lottecard-logo.svg';
import { ReactComponent as SHINHAN } from '../../../../public/assets/shinhan-logo.svg';
import { ReactComponent as WORRI } from '../../../../public/assets/worricard-logo.svg';

type CardName = 'BC' | 'HANA' | 'HYUNDAI' | 'KAKAO' | 'KB' | 'LOTTE' | 'SHINHAN' | 'WORRI';

interface IconProps {
  cardName: CardName;
  width: string;
  height: string;
}

const Icon: React.FC<IconProps> = ({ cardName, width, height }) => {
  switch (cardName) {
    case 'BC':
      return <BC width={width} height={height} />;
    case 'HANA':
      return <HANA width={width} height={height} />;
    case 'HYUNDAI':
      return <HYUNDAI width={width} height={height} />;
    case 'KAKAO':
      return <KAKAO width={width} height={height} />;
    case 'KB':
      return <KB width={width} height={height} />;
    case 'LOTTE':
      return <LOTTE width={width} height={height} />;
    case 'SHINHAN':
      return <SHINHAN width={width} height={height} />;
    case 'WORRI':
      return <WORRI width={width} height={height} />;
  }
};

export default Icon;
