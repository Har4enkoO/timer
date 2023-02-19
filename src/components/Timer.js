import React, { useEffect, useState } from "react";

export const Timer = ({ seconds, autostart, step }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState(seconds);

  const tick = () => {
    if (paused || over || !autostart) return;

    if (time <= 0) {
      setOver(true);
      return;
    }

    setTime((prev) => (prev - step / 1000).toFixed(step > 999 ? 0 : 3));
  };

  const reset = () => {
    setTime(seconds);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), step);

    return () => clearInterval(timerID);
  });

  return (
    <div>
      <div
        style={{
          height: "10px",
          width: `${(100 * time) / seconds}%`,
          backgroundColor: "black",
        }}
      ></div>
      <p>{`${time}`}</p>
      <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
};
