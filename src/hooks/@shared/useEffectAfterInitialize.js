import { useEffect, useRef } from "react";

const useEffectAfterInitialize = (callbackFunction, dependency = []) => {
  if (!dependency?.length) {
    console.error(
      "useEffectAfterInitialize 에러 : dependency 배열은 1개 이상의 element를 가지고 있어야합니다."
    );
  }

  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    }

    callbackFunction();
  }, dependency);
};

export default useEffectAfterInitialize;
