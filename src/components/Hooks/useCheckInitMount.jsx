import { useEffect, useState } from "react";

export default function useCheckInitMount(callback, dependency) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted === false) {
      setIsMounted(true);
    } else {
      callback();
    }
  }, dependency);
}
