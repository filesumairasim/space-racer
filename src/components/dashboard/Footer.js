import React, { useState } from "react";
import Switch from "react-switch";
import avatar from "../../images/avatar-boy.png";
import avatarsign from "../../images/icon-lightning-circle-lq.png";
import arwo from "../../images/arwo.png";
import playBtn from "../../images/play button.png";
import FooterImg from "../../images/play button.png";

const Footer = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    console.log(nextChecked);
    setChecked(nextChecked);
  };
  return (
    <>
      <div className="container footer-height">
        <div className="main-footer d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="position-relative">
              <img src={avatarsign} alt="avatarsign" className="master" />
              <img src={avatar} alt="avatar" className="avatar" />
            </div>
            <div className="user-stat">
              <p className>Wali FilesStudio</p>
              <div className="d-flex align-items-center">
                <img src={arwo} alt="arwo" className="arwo" />
                <p className="result">0</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="pe-5">
              <p>Addition</p>
              <p>LEVEL1</p>
              <p>LEARNING CARDS</p>
            </div>
            <div>
              <img src={playBtn} alt="playBtn" className="playBtn" />
            </div>
          </div>
        </div>
        <div className="text-center mb-3 footer-content-btm">
          <img src="" alt="" />
          <h2>Select Track</h2>
          <div className="d-flex justify-content-center align-items-center">
            <h5>WHOLE FRACTION</h5>
            <div className="Switch px-3">
              <div>
                <Switch
                  className="react-switch"
                  checked={checked}
                  onChange={handleChange}
                  onColor="#D4B7FF"
                  offColor="#D5F980"
                  onHandleColor="#fff"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={30}
                  width={60}
                />
              </div>
            </div>
            <h5>FRACTION FRACTION</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
