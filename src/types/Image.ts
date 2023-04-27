import logoBC from '../assets/logo-bc.svg';
import logoHana from '../assets/logo-hana.svg';
import logoHyundai from '../assets/logo-hyundai.svg';
import logoKakao from '../assets/logo-kakao.svg';
import logoLotte from '../assets/logo-lotte.svg';
import logoShinhan from '../assets/logo-shinhan.svg';
import logoWoori from '../assets/logo-woori.svg';
import logoKB from '../assets/logo-kb.svg';

export const IMAGE_PATH: ImagePathType = {
  BC카드: logoBC,
  신한카드: logoShinhan,
  카카오뱅크: logoKakao,
  현대카드: logoHyundai,
  우리카드: logoWoori,
  롯데카드: logoLotte,
  하나카드: logoHana,
  국민카드: logoKB,
};

export default interface ImagePathType {
  BC카드: string;
  신한카드: string;
  카카오뱅크: string;
  현대카드: string;
  우리카드: string;
  롯데카드: string;
  하나카드: string;
  국민카드: string;
}
