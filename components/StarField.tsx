import dynamic from "next/dynamic";
import React from "react";

const StarFieldAnimation = dynamic(() => import("react-starfield-animation"), {
  ssr: false,
});

const StarField = React.memo(() => {
  let width = 400;
  let height = 400;
  if (typeof window !== "undefined") {
    width = window?.innerWidth;
    height = window?.innerHeight;
  }

  return typeof window !== "undefined" ? (
    <StarFieldAnimation
      // @ts-ignore
      numParticles={200}
      style={{
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height,
      }}
    />
  ) : null;
});

export default StarField;
