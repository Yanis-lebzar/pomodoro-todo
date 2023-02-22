import React from "react";
import Lottie from "lottie-react";

type Props = {
  animation: Record<string, any>;
};
const style = {
  position: "absolute" as const,
  width: "26%",
  height: "full",
  bottom: "-30px",
};
function LottieAnimation({ animation }: Props) {
  return <Lottie animationData={animation} style={style} />;
}

export default LottieAnimation;
