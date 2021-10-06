import React from "react";
import avatar from "../../images/avatar-boy.png";
import number0 from "../../images/0.png";
import number1 from "../../images/1.png";
import number2 from "../../images/2.png";
import number3 from "../../images/3.png";
import number4 from "../../images/4.png";
import number5 from "../../images/5.png";
import number6 from "../../images/6.png";
import number7 from "../../images/7.png";
import number8 from "../../images/8.png";
import number9 from "../../images/9.png";
import menu from "../../images/menu icon.png";
import lowerlines from "../../images/lower lines.png";
import innerlines from "../../images/inner line 3.png";
import bar from "../../images/bar.png";

const Testkeyboard = () => {
  return (
    <>
      <div class="wrapper">
        <div class="container pt-5">
          <section>
            <img
              src={lowerlines}
              alt=""
              style={{
                transform: "rotate(-180deg)",
                position: "absolute",
                left: "17%",
                top: "15px",
              }}
            />
          </section>
          <section class="counter-timer">
            <label id="minutes">00</label>:<label id="seconds">00</label>
          </section>
          <section class="">
            <div>
              <img
                src={menu}
                alt=""
                style={{
                  position: "absolute",
                  top: "-84px",
                  left: "-105px",
                  maxWidth: "55px",
                }}
              />
            </div>
          </section>
          <section class="pretest-test-sec">
            <div class="text-center">
              <img src={innerlines} alt="" class="text-center" />
            </div>
            <div class="pretest-test-part">
              <div class="d-flex value">
                <p id="num-1">6</p>
                <p id="operator">+</p>
                <p id="num-2">8</p>
                <p>=</p>
                <input id="ans" />
              </div>
              <div class="text-center data">
                <h2>Pretest</h2>
                <p class="font">
                  Solve all problems in 4 minutes to skip the posttest
                </p>
              </div>
              <div class="text-center">
                <img src="images/inner line 4.png" alt="" class="text-center" />
              </div>
            </div>
          </section>
          <section class="pretest-footer d-flex align-items-end">
            <div class="d-flex align-items-center justify-content-between">
              <div class="">
                <div class="img btns-1">
                  <img class="tag" src={number1} alt="" id="1" />
                  <img class="tag" src={number2} alt="" id="2" />
                  <img class="tag" src={number3} alt="" id="3" />
                  <img class="tag" src={number4} alt="" id="4" />
                  <img class="tag" src={number5} alt="" id="5" />
                </div>
              </div>
              <div class="position-avaar">
                <div
                  class="
                  d-flex
                  justify-content-center
                  flex-column
                  align-items-center
                "
                >
                  <div class="d-flex align-items-end">
                    <div class="py-3">
                      <img src={bar} alt="" />
                      <img src={bar} alt="" />
                      <img src={bar} alt="" />
                      <img src={bar} alt="" />
                    </div>
                    <div class="avatar-img">
                      <img src={avatar} alt="" />
                    </div>
                    <div class="py-3">
                      <img src={bar} alt="" />
                      <img src={bar} alt="" />
                      <img src={bar} alt="" />
                      <img src={bar} alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="avatar-lines">
                      <img src={lowerlines} alt="" />
                      <div
                        class="
                        d-flex
                        align-items-center
                        justify-content-lg-between
                        btm-line-content
                      "
                      >
                        <p>Master 0/66</p>
                        <h2>Hamza Hassan</h2>
                        <p>Addition 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="img btns-2">
                  <img class="tags" src={number0} alt="" id="0" />
                  <img class="tags" src={number6} alt="" id="6" />
                  <img class="tags" src={number7} alt="" id="7" />
                  <img class="tags" src={number8} alt="" id="8" />
                  <img class="tags" src={number9} alt="" id="9" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Testkeyboard;
