import React from "react";
import minimize from "../../../images/minimize.png";
import progressLine from "../../../images/progress-line.png";

const LeftContent = (props) => {
  const {
    procedure,
    setLevel,
    setImgColl,
    setProcedure,
    additionMap,
    subtractionMap,
    divisionMap,
    multiplicationMap,
    fractionMap,
    isTranslated,
    level,
  } = props;
  const ProcedureHandler = (e) => {
    e.preventDefault();
    const sign = e.target.getAttribute("sign");
    if (sign === "+") {
      setProcedure("addition");
    } else if (sign === "-") {
      setProcedure("subtraction");
    } else if (sign === "*") {
      setProcedure("multiplication");
    } else if (sign === "/") {
      setProcedure("division");
    }
  };
  const LevelHandler = (e) => {
    e.preventDefault();
    const level = e.target.getAttribute("level");

    const obj = {
      additionMap,
      subtractionMap,
      divisionMap,
      multiplicationMap,
      fractionMap,
    };
    const temp = PerformOp(level, procedure, obj);
    setImgColl(temp);
    if (level === "1") {
      setLevel(1);
    } else if (level === "2") {
      setLevel(2);
    } else if (level === "3") {
      setLevel(3);
    }
  };
  const PerformOp = (level, proc, obj) => {
    console.log({ level, proc, obj });
    if (level === "1" && proc === "addition") {
      return obj.additionMap.addition_level1_heatmap_hash;
    } else if (level === "2" && proc === "addition") {
      return obj.additionMap.addition_level2_heatmap_hash;
    } else if (level === "3" && proc === "addition") {
      return obj.additionMap.addition_level3_heatmap_hash;
    } else if (level === "1" && proc === "subtraction") {
      return obj.subtractionMap.subtraction_level1_heatmap_hash;
    } else if (level === "2" && proc === "subtraction") {
      return obj.subtractionMap.subtraction_level2_heatmap_hash;
    } else if (level === "3" && proc === "subtraction") {
      return obj.subtractionMap.subtraction_level3_heatmap_hash;
    } else if (level === "1" && proc === "multiplication") {
      return obj.multiplicationMap.multiplication_level1_heatmap_hash;
    } else if (level === "2" && proc === "multiplication") {
      return obj.multiplicationMap.multiplication_level2_heatmap_hash;
    } else if (level === "3" && proc === "multiplication") {
      return obj.multiplicationMap.multiplication_level3_heatmap_hash;
    } else if (level === "1" && proc === "division") {
      return obj.divisionMap.division_level1_heatmap_hash;
    } else if (level === "2" && proc === "division") {
      return obj.divisionMap.division_level2_heatmap_hash;
    } else if (level === "3" && proc === "division") {
      return obj.divisionMap.division_level3_heatmap_hash;
    }
  };

  return (
    <>
      <div
        className={`progress-left me-4 ${
          isTranslated && "Translate-right-content"
        }`}
      >
        <h2>
          {procedure} Level {level}
        </h2>
        <div className="d-flex justify-content-between">
          <div className="sign-images d-flex flex-column">
            <img src={minimize} alt="" sign="+" onClick={ProcedureHandler} />
            <img src={minimize} alt="" sign="-" onClick={ProcedureHandler} />
            <img src={minimize} alt="" sign="*" onClick={ProcedureHandler} />
            <img src={minimize} alt="" sign="/" onClick={ProcedureHandler} />
          </div>
          <div className="d-flex justify-content-evenly flex-column">
            <p>PRETEST</p>
            <p className="dash">-</p>
            <p>Incomplete</p>
            <p>Semi Mastered</p>
            <p className="score">0/66</p>
          </div>
          <div className="d-flex justify-content-evenly flex-column">
            <p>POSTTEST</p>
            <p className="dash">-</p>
            <p className="invisible">g</p>
            <p> Mastered</p>
            <p className="score green">0/66</p>
          </div>
          <div className="number d-flex flex-column">
            <img src={minimize} alt="" level="1" onClick={LevelHandler} />
            <img src={minimize} alt="" level="2" onClick={LevelHandler} />
            <img src={minimize} alt="" level="3" onClick={LevelHandler} />
          </div>
        </div>
        <div className="line">
          <img src={progressLine} alt="" />
        </div>
        <div className="time-spent">
          <h2>Time Spent</h2>
          <div className="d-flex justify-content-center">
            <div className="px-3">
              <p className="time">0 m</p>
              <p className="blue">Today</p>
            </div>
            <div className="px-3">
              <p className="time">0 m</p>
              <p className="orange">Today</p>
            </div>
            <div className="px-3">
              <p className="time">0 m</p>
              <p className="green">Today</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
