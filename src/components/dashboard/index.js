import React, { useState, useEffect } from "react";
import Header from "./Header";
import Mission from "./Mission/Mission";
import Progress from "./progress/Progress";
import Footer from "./Footer";

const Dashboard = (props) => {
  const [tab, setTab] = useState("Mission");
  const {
    additionMap,
    setAdditionMap,
    subtractionMap,
    setsubtractionMap,
    divisionMap,
    setDivisionMap,
    multiplicationMap,
    setMultiplicationMap,
    fractionMap,
    setFractionMap,
  } = props;

  // const [procedure, setProcedure] = useState("addition");
  // const [level, setLevel] = useState(1);
  // const [data, setData] = useState([]);
  // const [imgColl, setImgColl] = useState(
  //   additionMap.addition_level1_heatmap_hash
  // );

  // useEffect(() => {
  //   console.log("dashboard ");
  //   const temp = Object.entries(imgColl);
  //   setData(temp);
  // }, [procedure, level, imgColl]);
  // console.log(props);
  return (
    <div className="bg-main">
      <Header setTab={setTab} />
      {tab === "Mission" && <Mission />}
      {tab === "Agent" && <h1>Agent</h1>}
      {tab === "progress" && (
        <Progress
          additionMap={additionMap}
          subtractionMap={subtractionMap}
          divisionMap={divisionMap}
          multiplicationMap={multiplicationMap}
          fractionMap={fractionMap}
        />
      )}
      {tab === "Leaderboard" && <h1>Leaderboard</h1>}
      <Footer />
    </div>
  );
};

export default Dashboard;
