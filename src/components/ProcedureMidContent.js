import React from "react";
import img1 from "../Img/ProcedureImages/apj.png";
import img2 from "../Img/ProcedureImages/apj1.png";
import img3 from "../Img/ProcedureImages/apj3.png";
import img4 from "../Img/ProcedureImages/E2_que1.png";
import img5 from "../Img/ProcedureImages/E2_que2.png";
import img6 from "../Img/ProcedureImages/crossword.png";

const ProcedureMidContent = () => {
  return (
    <div
      className="p-3 scrollbar-primary"
      style={{ overflow: "auto", width: "100%" }}
    >
      <div className="fw-bolder">Procedure:</div>
      <ol>
        <li>Read the given comprehension carefully.</li>
        {/* ************************************************** */}
        <div className="" style={{ display: "flex", alignItems: "start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid black",
              }}
              src={img1}
              alt="img"
            />
            <div className="fw-bold">Fig. 1: APJ Abdul Kalam</div>
          </div>
        </div>
        {/* ************************************************** */}
        <li>
          Arrange the given jumbled sentences in order as per the passage.
        </li>
        {/* ************************************************** */}

        <div className="" style={{ display: "flex", alignItems: "start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid black",
              }}
              src={img2}
              alt="img"
            />
            <div className="fw-bold">Fig. 2: Drag and drop</div>
          </div>
        </div>
        {/* ***************************************************** */}
        <li>
          To check the your answer, click on ‘Submit’ button. The green sentence
          are the correct position and the red are the wrong position.
        </li>
        {/* ************************************************************** */}
        <div className="" style={{ display: "flex", alignItems: "start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid black",
              }}
              src={img3}
              alt="img"
            />
            <div className="fw-bold">Fig. 3: Correct feedback</div>
          </div>
        </div>
        {/* **************************************************************** */}
        <li>
          For each sentence, check if the sentence is True. Click on submit to
          check your answer, which is displayed at the right of the question.
        </li>
        {/* ***************************************************************** */}

        <div className="" style={{ display: "flex", alignItems: "start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid black",
              }}
              src={img4}
              alt="img"
            />
            <div className="fw-bold">
              Fig. 4: Correct and incorrect feedback
            </div>
          </div>
        </div>
        {/* ********************************************************************* */}
        <li>
          Complete the sentences choosing an appropriate option. To check your
          answer click on ‘Submit’.
        </li>
        {/* ************************************************************************* */}

        <div className="" style={{ display: "flex", alignItems: "start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid black",
              }}
              src={img5}
              alt="img"
            />
            <div className="fw-bold">Fig. 5: Incorrect feedback</div>
          </div>
        </div>
        {/* ********************************************************************* */}
        <li>Complete the crossword with the help of given clues.</li>
        <ul type="disc">
          <li>
            To reveal the answer of particular row/column click on it and click
            on respective row/column Reveal’ button e.g. ‘Reveal 3D’.
          </li>
          <li>
            To check your particular answer click on the respective row/column
            ‘Check’ button e.g. ‘Check 3D’.
          </li>
          <li>To check all your answer click on ‘Check All’ button.</li>
        </ul>
        {/* ********************************************************** */}
        <div className="" style={{ display: "flex", alignItems: "start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid black",
              }}
              src={img6}
              alt="img"
            />
            <div className="fw-bold">Fig. 6: Crossword</div>
          </div>
        </div>
        {/* **************************************************************** */}
      </ol>
    </div>
  );
};

export default ProcedureMidContent;
