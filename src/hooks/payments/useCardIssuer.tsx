import React, { KeyboardEvent, useRef, useState } from 'react';

import { CardIssuer } from '../../type';
import useHTMLRefs from '../useRefs';
import useIsFocus from '../useIsFocus';
import useRadio from '../useRadio';

export default function useCardIssuer() {
  const options: CardIssuer[] = [
    'BcCard',
    'HanaCard',
    'HyndaiCard',
    'KBCard',
    'KakaoBank',
    'LotteCard',
    'ShinhanCard',
    'WooriCard',
  ];

  const isValid = useRef(false);

  const {
    value,
    onMouseDowns: radioOnMouseDowns,
    initValue,
  } = useRadio(options);

  const {
    isFocus: optionContainerIsFocus,
    onFocus: optionContainerOnFocus,
    onBlur: optionContainerOnBlur,
  } = useIsFocus();
  const [isTouched, setIsTouched] = useState(false);

  const refs = useHTMLRefs<HTMLDivElement>(options.length);
  const nowRefIdx = useRef(0);

  const optionOnMouseDowns = radioOnMouseDowns.map((mouseDown, idx) => {
    return () => {
      mouseDown();
      optionContainerOnBlur();
      isValid.current = true;
      nowRefIdx.current = idx;
    };
  });

  const optionOnFocuses = radioOnMouseDowns.map(mousedown => {
    return () => {
      isValid.current = false;
      optionContainerOnFocus();
      mousedown();
    };
  });

  const optionOnKeyDowns = Array.from({ length: refs.length }).map((_, idx) => {
    return (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        optionOnMouseDowns[idx]();
        nowRefIdx.current = idx;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        refs[Math.max(idx - 1, 0)].current?.focus();
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        refs[Math.min(idx + 1, options.length - 1)].current?.focus();
      }

      if (event.key === 'Escape') {
        optionContainerOnBlur();
      }

      if (event.key === 'Tab') {
        event.preventDefault();
      }
    };
  });

  return {
    issuer: value,
    isValid: isValid.current,
    optionOnMouseDowns,
    optionOnFocuses,
    optionOnKeyDowns,
    selectIsFocus: optionContainerIsFocus,
    isTouched,
    refs,
    selectOnFocus: () => {
      optionContainerOnFocus();
      isValid.current = false;
      //렌더링을 대기
      setTimeout(() => {
        refs[nowRefIdx.current].current?.focus();
      }, 0);
    },
    selectOnBlur: () => {
      setIsTouched(true);
      optionContainerOnBlur();
    },
    initValue: () => {
      initValue();
      isValid.current = false;
      nowRefIdx.current = 0;
    },
  };
}

export interface UseCardIssuer {
  issuer: CardIssuer;
  isValid: boolean;
  optionOnMouseDowns: (() => void)[];
  optionOnFocuses: (() => void)[];
  optionOnKeyDowns: ((event: KeyboardEvent) => void)[];
  selectIsFocus: boolean;
  isTouched: boolean;
  refs: React.RefObject<HTMLDivElement>[];
  selectOnFocus: () => void;
  selectOnBlur: () => void;
  initValue: () => void;
}
