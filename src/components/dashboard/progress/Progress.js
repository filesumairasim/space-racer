import React, { useState, useEffect } from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const Index = (props) => {
  const {
    additionMap,
    subtractionMap,
    divisionMap,
    multiplicationMap,
    fractionMap,
  } = props;
  const [procedure, setProcedure] = useState("addition");
  const [level, setLevel] = useState(1);
  const [data, setData] = useState([]);
  const [imgColl, setImgColl] = useState(
    additionMap.addition_level1_heatmap_hash
  );
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    const temp = Object.entries(imgColl);
    setData(temp);
  }, [procedure, level, imgColl]);

  const HandleTranslate = () => {
    setIsTranslated(!isTranslated);
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
        onClick={HandleTranslate}
      >
        Translate
      </div>
      <div className="d-flex align-items-center  pt-2 container">
        <LeftContent
          level={level}
          procedure={procedure}
          setImgColl={setImgColl}
          setLevel={setLevel}
          setProcedure={setProcedure}
          additionMap={additionMap}
          subtractionMap={subtractionMap}
          divisionMap={divisionMap}
          multiplicationMap={multiplicationMap}
          fractionMap={fractionMap}
          procedure={procedure}
          isTranslated={isTranslated}
        />
        <RightContent
          isTranslated={isTranslated}
          data={data}
          level={level}
          procedure={procedure}
          HandleTranslate={HandleTranslate}
        />
      </div>
    </>
  );
};

export default Index;
