import React, { useState } from "react";
import Frame0 from "../../pictures/frames/frame0.png";
import Frame1 from "../../pictures/frames/frame1.png";
import Frame2 from "../../pictures/frames/frame2.png";
import Frame3 from "../../pictures/frames/frame3.png";
import Frame4 from "../../pictures/frames/frame4.png";

const FrameCarousel: React.FC<{
  setFrame: (value: number | ((prevVar: number) => number)) => void;
}> = ({ setFrame }) => {
  const [activeFrame, setActiveFrame] = useState<number>(0);

  return (
    <div className="frame-carousel">
      <div
        className={`frame-carousel__item${activeFrame === 0 ? "--active" : ""}`}
        onClick={() => {
          setActiveFrame(0);
          setFrame(0);
        }}
      >
        <img src={Frame0} />
      </div>
      <div
        className={`frame-carousel__item${activeFrame === 1 ? "--active" : ""}`}
        onClick={() => {
          setActiveFrame(1);
          setFrame(1);
        }}
      >
        <img src={Frame1} />
      </div>
      <div
        className={`frame-carousel__item${activeFrame === 2 ? "--active" : ""}`}
        onClick={() => {
          setActiveFrame(2);
          setFrame(2);
        }}
      >
        <img src={Frame2} />
      </div>
      <div
        className={`frame-carousel__item${activeFrame === 3 ? "--active" : ""}`}
        onClick={() => {
          setActiveFrame(3);
          setFrame(3);
        }}
      >
        <img src={Frame3} />
      </div>
      <div
        className={`frame-carousel__item${activeFrame === 4 ? "--active" : ""}`}
        onClick={() => {
          setActiveFrame(4);
          setFrame(4);
        }}
      >
        <img src={Frame4} />
      </div>
    </div>
  );
};

export default FrameCarousel;
