import { useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const useTimer = (onTime, time, trigger) => {
  useEffect(() => {
    if (time) {
      let timer = setTimeout(
        onTime,
        typeof time === "number" ? time : dayjs.duration(time).asMilliseconds()
      );
      return () => {
        clearTimeout(timer);
      };
    }
  }, [onTime, time, trigger]);
};
