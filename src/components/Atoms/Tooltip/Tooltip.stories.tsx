import Tooltip from './index';
import MESSAGE from 'constant/message';

interface TooltipArgs {
  message: string;
  margin: string;
}

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
};

export const SecurityNumber = (args: TooltipArgs) => {
  return <Tooltip {...args} />;
};

SecurityNumber.args = {
  message: MESSAGE.TOOLTIP_SECURITY_NUMBER,
};
