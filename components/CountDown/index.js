import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

export const MINUTE = 60; // SECONDS
export const SECOND = 1000; // MILLISECONDS
export const DEFAULT_INIT_TIME = 5 * MINUTE; // 5 MINUTES

const formatTimer = (time) => {
  const minutes = Math.trunc(time / MINUTE);
  const seconds = time - minutes * MINUTE;

  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};

export const CountDown = ({
  time,
  setTime,
  setParentState = null,
  start = true,
}) => {
  const [run, setRun] = useState(start);
  const [initTime, setInitTime] = useState(DEFAULT_INIT_TIME);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    if (run && timerInterval === null) {
      setInitTime(time);
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, SECOND);

      setTimerInterval(interval);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [run]);

  useEffect(() => {
    if (time <= 0) {
      setTime(0);
      setRun(false);
      if (setParentState) setParentState(true);
    }
  }, [time]);

  return (
    <div
      className={classNames('count-down', {
        warning: time < initTime / 2 && time > initTime / 4,
        dangerous: time < initTime / 4,
      })}
    >
      <p>{formatTimer(time)}</p>
    </div>
  );
};
