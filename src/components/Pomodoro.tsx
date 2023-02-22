import React, { use, useEffect, useState } from "react";
import ButtonPomodoro from "./ButtonPomodoro";
import PomodoroTimer from "./PomodoroTimer";
import PomodoroModal from "./PomodoroModal";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ShortPomodoro,
  LongPomodoro,
  BreakTime,
  WorkTime,
  Parameter,
} from "@/datas/icons";

function Pomodoro() {
  const [playToggleIndex, setPlayToggleIndex] = useState(0); // enable to change icon play/pause onClick
  const [workToggleIndex, setWorkToggleIndex] = useState(0); // enable to change icon play/pause onClick
  const [timerActive, setTimerActive] = useState(false); //Stop or start the timer
  const [defaultTime, setDefaultTime] = useState(1500);
  const [time, setTime] = useState(defaultTime);
  const [workTime, setWorkTime] = useState(defaultTime); //Timer set by default for 25 minutes
  const [breakTime, setBreakTime] = useState(300);
  const [isOnWorkPhase, setIsOnWorkPhase] = useState(true);
  const [progress, setProgress] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWorkTime, setNewWorkTime] = useState<number>(workTime / 60);
  const [newBreakTime, setNewBreakTime] = useState<number>(breakTime / 60);
  const playPausedIcons = [Play, Pause];
  const pomodoroTimerIcons = [ShortPomodoro, LongPomodoro];
  const breakWorkIcons = [BreakTime, WorkTime];
  const audioBellFile = "/sounds/bell.mp3";
  const [audio] = useState(
    typeof Audio !== "undefined" && new Audio(audioBellFile)
  );
  if (audio) {
    audio.volume = 0.2;
  }
  //Make play pause button works
  const handleClickPomodoroPlayer = () => {
    setTimerActive(!timerActive);
    if (playToggleIndex === 0 && audio instanceof HTMLAudioElement) {
      audio.play();
    }
    setPlayToggleIndex(!timerActive ? 1 : 0);
  };

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

  useEffect(() => {
    if (timerActive && audio instanceof HTMLAudioElement) {
      audio.play();
    }
  }, [isOnWorkPhase]);

  useEffect(() => {
    setPlayToggleIndex(timerActive ? 1 : 0);
  }, [timerActive]);
  // Set timer depending on the button

  useEffect(() => {
    setWorkToggleIndex(!isOnWorkPhase ? 1 : 0);
  }, [isOnWorkPhase]);
  const setTimeBasedOnButton = (iconName: string) => {
    switch (iconName) {
      case "25Icon.svg":
        setIsOnWorkPhase(true);
        setDefaultTime(1500);
        setWorkTime(1500);
        setNewWorkTime(1500 / 60);
        setTime(1500);
        break;
      case "50Icon.svg":
        setIsOnWorkPhase(true);
        setDefaultTime(3000);
        setWorkTime(3000);
        setNewWorkTime(3000 / 60);
        setTime(3000);
        break;
      case "breakIcon.svg":
        setIsOnWorkPhase(false);
        setDefaultTime(breakTime);

        setBreakTime(breakTime);
        setTime(breakTime);
        break;
      case "workIcon.svg":
        setIsOnWorkPhase(true);
        setDefaultTime(workTime);
        setTime(workTime);
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
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="w-full md:w-[335px]"
      >
        {/* Pomodoro bottom left part */}
        <motion.div
          initial="out"
          animate="in"
          variants={ContainerVariants}
          className="flex  justify-between mb-8"
        >
          {playPausedIcons.map((icon, index) => {
            return (
              index === playToggleIndex && (
                <ButtonPomodoro
                  handleClick={handleClickPomodoroPlayer}
                  key={playToggleIndex}
                  icon={icon}
                />
              )
            );
          })}

          {pomodoroTimerIcons.map((icon, index) => {
            return (
              <ButtonPomodoro
                handleClick={() => setTimeBasedOnButton(icon.name)}
                key={index}
                icon={icon}
              />
            );
          })}

          {breakWorkIcons.map((icon, index) => {
            return (
              index === workToggleIndex && (
                <ButtonPomodoro
                  handleClick={() => setTimeBasedOnButton(icon.name)}
                  key={workToggleIndex}
                  icon={icon}
                />
              )
            );
          })}

          <ButtonPomodoro
            icon={Parameter}
            handleClick={() => setTimeBasedOnButton(Parameter.name)}
          />
        </motion.div>
        <PomodoroTimer isOnWorkPhase={isOnWorkPhase} time={time} />
        <hr
          style={{ width: progress + "%" }}
          className={`h-0.5 bg-hrBg border-0 mt-4 backdrop-blur-pomodoroBlur transition-all ease-in-out duration-[1000ms]`}
        />
      </motion.div>
      <PomodoroModal
        workTime={workTime}
        setBreakTime={(newBreakTime: number) => setBreakTime(newBreakTime)}
        setWorkTime={(newWorkTime: number) => setWorkTime(newWorkTime)}
        setTime={(newTime: number) => setTime(newTime)}
        setModalClose={() => setIsModalOpen(false)}
        handleClick={() => setIsModalOpen(!isModalOpen)}
        isModalOpen={isModalOpen}
        setTimerActive={setTimerActive}
        setDefaultTime={setDefaultTime}
        setNewBreakTime={(newBreakTime: number) =>
          setNewBreakTime(newBreakTime)
        }
        setNewWorkTime={(newWorkTime: number) => setNewWorkTime(newWorkTime)}
        newWorkTime={newWorkTime}
        newBreakTime={newBreakTime}
        setIsOnWorkPhase={setIsOnWorkPhase}
      />
    </>
  );
}

export default Pomodoro;

const ContainerVariants = {
  out: {
    y: 600,
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 2.4,
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.3,
    },
  },
};
