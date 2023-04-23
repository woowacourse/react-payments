import './CVCTooltip.css';
import cvcInfo from '../asset/cvc_info.png';

type TooltipData = {
  title: string;
  detail: string;
};

const Tooltip = ({ title, detail }: TooltipData) => {
  return (
    <>
      <button type="button" className="cvc-info-button">
        <img src={cvcInfo} alt="cvc_info" />
      </button>
      <div className="cvc-info-box">
        <p>{title}</p>
        <p>{detail}</p>
      </div>
    </>
  );
};
export default Tooltip;
