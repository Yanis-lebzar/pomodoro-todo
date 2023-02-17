import React from "react";
import { JsonObjectExpression } from "typescript";
import Lottie from "lottie-react";

type Props = {
  animation: Record<string, any>;
};
const style = {
  position: "absolute",
  width: "26%",
  height: "full",
  bottom: -30,
};
function LottieAnimation({ animation }: Props) {
  return <Lottie animationData={animation} style={style} />;
}

export default LottieAnimation;
