import { useLayoutEffect, useRef } from "react";

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const UseEffectOnce = (fn, deps) => {
  const isMountedRef = useRef(!isDevelopment);

  useLayoutEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return undefined;
    }
    return fn();
  }, [deps]);
};

export default UseEffectOnce;