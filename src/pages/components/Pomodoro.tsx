import React, { useEffect, useState } from "react";
import ButtonPomodoro from "./ButtonPomodoro";
import { svgStaticDatas } from "@/datas/svg";
import PomodoroTimer from "./PomodoroTimer";
import LottieAnimation from "./LottieAnimation";
import BreakAnimation from "../../datas/breakLottie.json";
import PomodoroModal from "./PomodoroModal";
function Pomodoro() {
  const [iconIndex, setIconIndex] = useState(0); // enable to change icon play/pause onClick
  const [timerActive, setTimerActive] = useState(false); //Stop or start the timer
  const [defaultTime, setDefaultTime] = useState(10);
  const [time, setTime] = useState(defaultTime);
  const [workTime, setWorkTime] = useState(defaultTime); //Timer set by default for 25 minutes
  const [breakTime, setBreakTime] = useState(300);
  const [isOnWorkPhase, setIsOnWorkPhase] = useState(true);
  const [progress, setProgress] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Timer function

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        if (timerActive) {
          setTime((time) => time - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isOnWorkPhase, timerActive, defaultTime]);

  useEffect(() => {
    setProgress(100 - time / (defaultTime / 100));
  }, [time, progress, defaultTime]);

  //Make play pause button works
  const handleClickPomodoroPlayer = () => {
    setTimerActive(!timerActive);

    setIconIndex(!timerActive ? 1 : 0);
  };

  useEffect(() => {
    setIconIndex(timerActive ? 1 : 0);
  }, [timerActive]);
  // Set timer depending on the button

  const setTimeBasedOnButton = (iconName: string) => {
    switch (iconName) {
      case "25Icon.svg":
        setIsOnWorkPhase(true);
        setDefaultTime(1500);

        setTime(1500);
        setWorkTime(time);
        break;
      case "50Icon.svg":
        setIsOnWorkPhase(true);
        setDefaultTime(3000);

        setTime(3000);
        setWorkTime(time);
        break;
      case "breakIcon.svg":
        setIsOnWorkPhase(false);
        setDefaultTime(300);

        setBreakTime(breakTime);
        setTime(breakTime);
        break;
      case "parameterIcon.svg":
        setIsModalOpen(true);
        break;
      default:
        setWorkTime(1500);
    }
  };

  if (isOnWorkPhase && time === 0) {
    setDefaultTime(breakTime);

    setTime(breakTime);
    setIsOnWorkPhase(false);
  } else if (!isOnWorkPhase && time === 0) {
    setDefaultTime(workTime);
    setTime(workTime);
    setIsOnWorkPhase(true);
  }
  return (
    <>
      <div className="w-[335px]">
        {/* Pomodoro bottom left part */}
        <div className="flex  justify-between mb-8">
          {svgStaticDatas.map((svg, index) => {
            return (
              index === iconIndex && (
                <ButtonPomodoro
                  handleClick={handleClickPomodoroPlayer}
                  key={index}
                  svgWidth={svg.width}
                  svgHeight={svg.height}
                  svgFill={svg.fill}
                  svgViewBox={svg.viewBox}
                  pathD={svg.path.d}
                  pathFill={svg.path.fill}
                />
              )
            );
          })}
          {svgStaticDatas.slice(2).map((svg, index) => {
            return (
              <ButtonPomodoro
                key={index + 2}
                handleClick={() => setTimeBasedOnButton(svg.name)}
                svgWidth={svg.width}
                svgHeight={svg.height}
                svgFill={svg.fill}
                svgViewBox={svg.viewBox}
                pathD={svg.path.d}
                pathFill={svg.path.fill}
                path2D={svg.path2?.d}
              />
            );
          })}
        </div>
        <PomodoroTimer isOnWorkPhase={isOnWorkPhase} time={time} />
        <hr
          style={{ width: progress + "%" }}
          className={`h-0.5 bg-hrBg border-0 mt-4 backdrop-blur-pomodoroBlur transition-all ease-in-out duration-[1000ms]`}
        />
      </div>
      <PomodoroModal
        breakTime={breakTime}
        workTime={workTime}
        setBreakTime={(newBreakTime: number) => setBreakTime(newBreakTime)}
        setWorkTime={(newWorkTime: number) => setWorkTime(newWorkTime)}
        setTime={(newTime: number) => setTime(newTime)}
        setModalClose={() => setIsModalOpen(false)}
        handleClick={() => setIsModalOpen(!isModalOpen)}
        isModalOpen={isModalOpen}
        isOnWorkPhase={isOnWorkPhase}
        setIsOnWorkPhase={setIsOnWorkPhase}
        setTimerActive={setTimerActive}
      />
    </>
  );
}

export default Pomodoro;
