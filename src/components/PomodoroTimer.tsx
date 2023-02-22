import React from "react";
import LottieAnimation from "./LottieAnimation";
import BreakAnimation from "../datas/breakLottie.json";

type Props = {
  time: number;
  isOnWorkPhase: boolean;
};

function Pomodorotimer({ time, isOnWorkPhase }: Props) {
  const getTime = () => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    const timeString = `${min < 10 ? "0" + min : min} : ${
      sec < 10 ? "0" : ""
    }${sec}`;
    return timeString;
  };
  getTime();
  return (
    <div className="w-full h-28 bg-nightBlue bg-opacity-40 md:bg-pomodoroBg backdrop-blur-3xl md:backdrop-blur-pomodoroBlur rounded-lg flex items-center justify-center relative ">
      <p className="text-5xl  font-medium text-white font-inter">{getTime()}</p>
      {!isOnWorkPhase && <LottieAnimation animation={BreakAnimation} />}
    </div>
  );
}

export default Pomodorotimer;
