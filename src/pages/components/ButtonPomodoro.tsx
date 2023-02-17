import Image from "next/image";
import React from "react";
// animate svgs with framer motion
type Props = {
  icon?: string;
  alt?: string;
  svgWidth: string;
  svgHeight: string;
  svgViewBox: string;
  svgFill: string;
  pathD: string;
  path2D?: string | undefined;
  pathFill: string;
  handleClick?: React.MouseEventHandler;
};

function ButtonPomodoro({
  icon,
  alt,
  svgWidth,
  svgHeight,
  svgFill,
  svgViewBox,
  pathD,
  pathFill,
  path2D,
  handleClick,
}: Props) {
  return (
    <div
      className={`w-[51px] h-10 bg-white rounded-md justify-center  items-center  flex object-contain  cursor-pointer
    ${path2D ? "p-1" : "p-2"} `}
      onClick={handleClick}
    >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={svgViewBox}
        fill={svgFill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={pathD} fill={pathFill} />
        {path2D ? (
          <>
            {/* Got a problem with the arrow shape when I imported it from props */}
            <path
              d="M4.64205 37H2.39205L6.48864 25.3636H9.09091L13.1932 37H10.9432L7.83523 27.75H7.74432L4.64205 37ZM4.71591 32.4375H10.8523V34.1307H4.71591V32.4375ZM14.7259 37V25.3636H16.8338V30.7102H16.9759L21.5156 25.3636H24.0895L19.5895 30.5852L24.1293 37H21.5952L18.1236 32.0114L16.8338 33.5341V37H14.7259Z"
              fill="#20414B"
            />
            <path
              d="M0.99905 23.9233C10.6204 23.7345 31.9121 21.2485 40.1082 12.8156M40.1082 12.8156C38.6079 12.8818 37.9523 13.0338 36.8963 12.9266M40.1082 12.8156C39.865 13.8106 39.9107 14.7621 40.0341 15.6487"
              stroke="#20414B"
            />
            <path
              d="M34.5 35.7C35.8791 35.7 37.2018 35.1521 38.177 34.177C39.1521 33.2018 39.7 31.8791 39.7 30.5C39.7 29.1209 39.1521 27.7982 38.177 26.823C37.2018 25.8479 35.8791 25.3 34.5 25.3C33.1209 25.3 31.7982 25.8479 30.823 26.823C29.8479 27.7982 29.3 29.1209 29.3 30.5C29.3 31.8791 29.8479 33.2018 30.823 34.177C31.7982 35.1521 33.1209 35.7 34.5 35.7ZM34.5 37C30.9101 37 28 34.0899 28 30.5C28 26.9101 30.9101 24 34.5 24C38.0899 24 41 26.9101 41 30.5C41 34.0899 38.0899 37 34.5 37ZM32.03 29.2L31.25 28.42L31.77 27.9L32.55 28.68L33.33 27.9L33.85 28.42L33.07 29.2L33.85 29.98L33.33 30.5L32.55 29.72L31.77 30.5L31.25 29.98L32.03 29.2ZM35.93 29.2L35.15 28.42L35.67 27.9L36.45 28.68L37.23 27.9L37.75 28.42L36.97 29.2L37.75 29.98L37.23 30.5L36.45 29.72L35.67 30.5L35.15 29.98L35.93 29.2ZM34.5 33.75C34.8448 33.75 35.1754 33.613 35.4192 33.3692C35.663 33.1254 35.8 32.7948 35.8 32.45C35.8 32.1052 35.663 31.7746 35.4192 31.5308C35.1754 31.287 34.8448 31.15 34.5 31.15C34.1552 31.15 33.8246 31.287 33.5808 31.5308C33.337 31.7746 33.2 32.1052 33.2 32.45C33.2 32.7948 33.337 33.1254 33.5808 33.3692C33.8246 33.613 34.1552 33.75 34.5 33.75Z"
              fill="#20414B"
            />
          </>
        ) : null}
      </svg>
    </div>
  );
}

export default ButtonPomodoro;
