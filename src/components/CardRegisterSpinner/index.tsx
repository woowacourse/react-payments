import { useEffect } from 'react';

import CheckIcon from '../common/CheckIcon';
import Spinner from '../common/Spinner';

import useFinishValue from '../../hooks/useFinishValue';
import useFinishAction from '../../hooks/useFinishAction';
import useTimeout from '../../hooks/useTimeout';

import styles from './cardRegisterSpinner.module.css';

interface Props {
  endCallback: () => void;
}

const CardRegisterSpinner = ({ endCallback }: Props) => {
  const isFinish = useFinishValue();
  const finishWork = useFinishAction();

  const [finishTimer] = useTimeout(finishWork, 2000);
  const [endCallbackTimer] = useTimeout(endCallback, 1000);

  useEffect(() => {
    finishTimer();
  }, [finishTimer]);

  useEffect(() => {
    if (isFinish) {
      endCallbackTimer();
    }
  }, [endCallbackTimer, isFinish]);

  return (
    <div className={styles.container}>
      {isFinish ? <CheckIcon /> : <Spinner />}
    </div>
  );
};

export default CardRegisterSpinner;
