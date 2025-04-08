import React, { useEffect, useState } from "react";
import data from "../supportingfiles/comprehension.json";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Exercise3Midcontent = () => {
  const parse = require("html-react-parser").default;
  const [bgColor, setBGColor] = useState("warning");
  const [showFB, setShowFB] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [instruction, setInstruction] = useState("");
  const [selectedAns1, setSelectedAns1] = useState("");
  const [selectedAns2, setSelectedAns2] = useState("");
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [shuffledData, setShuffledData] = useState({
    exercise1: [],
    exercise2: [],
  });
  const navigate = useNavigate();

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    // Shuffle the arrays before setting them into state
    const shuffledExercise2 = shuffleArray([...data[2].exercise2]);
    const shuffledExercise1 = shuffleArray([...data[2].exercise1]);
    setShuffledData({
      exercise1: shuffledExercise1,
      exercise2: shuffledExercise2,
    });
    setInstruction(
      "Complete the given sentences by choosing an appropriate option."
    );
  }, []);

  const handleSubmit = () => {
    setShowFB(true);
    // console.log(selectedAns1);
    // console.log(selectedAns2);
    const answer1Check = data[2].answer1.includes(selectedAns1);
    const answer2Check = data[2].answer2.includes(selectedAns2);

    if (!selectedAns1 || !selectedAns2) {
      setFeedback("Please select atleast one option for each question.");
      setBGColor("danger");
    } else if (answer1Check && answer2Check) {
      setFeedback("Both the answers are correct!");
      setDisable1(true);
      setDisable2(true);
      setBGColor("success");
    } else if (answer1Check) {
      setFeedback("Only first answer is correct!");
      setDisable1(true);
      setBGColor("warning");
    } else if (answer2Check) {
      alert("only second answer is correct!");
      setDisable2(true);
      setBGColor("warning");
    } else {
      setFeedback("Both the answers are incorrect!");
      setBGColor("danger");
    }
  };

  const handleFinish = () => {
    navigate("/launchpage/englishactivity");
  };

  const handleRadioChange = (event, exercise) => {
    console.log(exercise);

    switch (exercise) {
      case "exercise1":
        setSelectedAns1(event.target.value);
        break;
      case "exercise2":
        setSelectedAns2(event.target.value);
        break;
      default:
        console.log("Something went wrong!");
        break;
    }
  };

  const renderQuestion1 = () => (
    <div className="row">
      <div className="">
        <div className="fw-bolder">
          The animals reacted to the frog's song with
        </div>
        <Table bordered>
          <tbody>
            {shuffledData.exercise1.map((item, index) => (
              <tr>
                <td>
                  <Form.Check
                    type="radio"
                    value={item}
                    name="exercise1"
                    onChange={(e) => handleRadioChange(e, "exercise1")}
                    disabled={disable1}
                  />
                </td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );

  const renderQuestion2 = () => (
    <div className="row">
      <div className="">
        <div className="fw-bolder">The frog croaked</div>
        <Table bordered>
          <tbody>
            {shuffledData.exercise2.map((item, index) => (
              <tr>
                <td>
                  <Form.Check
                    type="radio"
                    value={item}
                    name="exercise2"
                    onChange={(e) => handleRadioChange(e, "exercise2")}
                    disabled={disable2}
                  />
                </td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );

  const renderFeedback = () => (
    <div className="row p-2">
      <div className={`text-center p-2 bg-${bgColor} text-light rounded`}>
        <div className="fw-bolder">Feedback!</div>
        <div>{feedback}</div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid overflow-auto">
      <div className="row">
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "auto",
            width: "100%",
            padding: 0,
            borderRadius: "5px",
          }}
        >
          <div
            className="sticky-top text-center"
            style={{
              background: "#3bafda",
              padding: "10px",
              borderRadius: "5px 5px 0 0",
              color: "#fff",
              fontWeight: "bolder",
            }}
          >
            The Frog and the Nightingale
          </div>

          <div className="p-3">
            <div className="mb-2 text-center">
              {parse(data[2].comprehension_data)}
            </div>

            <div className="mb-2 text-center bg-warning fw-bolder p-2">
              {instruction}
            </div>

            <div>{renderQuestion1()}</div>

            <div>{renderQuestion2()}</div>

            {showFB && renderFeedback()}

            <div className="d-flex justify-content-around">
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="contained" onClick={handleFinish}>
                Finish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise3Midcontent;
