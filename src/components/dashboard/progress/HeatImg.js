import React from "react";

const HeatImg = (props) => {
  const { value, level, procedure } = props;
  return (
    <div style={{ margin: "0 4px 3px 0" }}>
      <img
        src={`https://bluestreak-production.s3.amazonaws.com/problem_images/problem_image_${procedure}_${level}_${value[0]}.png`}
        alt=""
        className={`heat-img ${
          Number(value[value - 1]) >= 7
            ? "mastered"
            : Number(value[value - 1]) < 7 && Number(value[value - 1]) >= 3
            ? "semi=mastered"
            : "not-mastered"
        }`}
      />
    </div>
  );
};

export default HeatImg;
