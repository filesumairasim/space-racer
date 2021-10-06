import React from "react";
import HeatImg from "./HeatImg";

const RightContent = (props) => {
  const { data, level, procedure, HandleTranslate, isTranslated } = props;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        height: "472px",
        overflow: "hidden",
        width: "74rem",
      }}
      onClick={HandleTranslate}
    >
      {data.map((h) => {
        const value = h.at(-1);
        return <HeatImg value={value} level={level} procedure={procedure} />;
      })}
    </div>
  );
};

export default RightContent;
