import React, { useEffect, useState } from "react";
import data from "../supportingfiles/comprehension.json";
import apj from "../Img/activity_images/apj.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Exercise1Midcontent = () => {
  const [items, setItems] = useState([]);
  const [buttonColors, setButtonColors] = useState([]);
  const [showFB, setShowFB] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [randomNo, setRandomNo] = useState(Math.floor(Math.random() * 2) + 1);
  const [finish, setFinish] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [instruction, setInstruction] = useState("");
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
    const shuffledExercise2 = shuffleArray([...data[0].exercise2]);
    const shuffledExercise1 = shuffleArray([...data[0].exercise1]);
    setShuffledData({
      exercise1: shuffledExercise1,
      exercise2: shuffledExercise2,
    });
    setItems(shuffledExercise2); // For question 1, set the shuffled array
    setButtonColors(new Array(shuffledExercise2.length).fill("warning"));
  }, []);

  useEffect(() => {
    setInstruction(
      randomNo === 1
        ? "Read the passage and accordingly arrange the given jumbled sentences. To rearrange, drag and drop sentences."
        : "For each sentence, check if it is true and uncheck if it is false."
    );
  }, [randomNo, instruction]);

  const handleSubmit = () => {
    if (randomNo === 1) {
      setShowFB(false);
      compareItems();
    } else if (randomNo === 2) {
      setShowFB(true);
      checkAnswers();
    }
  };

  const compareItems = () => {
    const updatedButtonColors = items.map((item, index) =>
      item === data[0].exercise2[index] ? "success" : "danger"
    );
    setButtonColors(updatedButtonColors);
  };

  const checkAnswers = () => {
    const areAllElementsPresent = checkedItems.every((element) =>
      data[0].answer1.includes(element)
    );
    setFeedback(
      areAllElementsPresent && checkedItems.length === data[0].answer1.length
    );
  };

  const handleNext = (str) => {
    setShowFB(false);
    if (str === "FINISH") {
      navigate("/launchpage/englishactivity");
    } else {
      setFinish(true);
      toggleRandomNo();
    }
  };

  const toggleRandomNo = () => {
    setRandomNo(randomNo === 1 ? 2 : 1);
    setInstruction(
      randomNo === 1
        ? "Read the passage and accordingly arrange the given jumbled sentences. To rearrange, drag and drop sentences."
        : "For each sentence, check if it is true and uncheck if it is false."
    );
  };

  const handleCheckboxChange = (e, item) => {
    setShowFB(false);
    if (e.target.checked) {
      setCheckedItems((prev) => [...prev, item]);
    } else {
      setCheckedItems((prev) => prev.filter((i) => i !== item));
    }
  };

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index !== source.index) {
      const reorderedItems = Array.from(items);
      const [removed] = reorderedItems.splice(source.index, 1);
      reorderedItems.splice(destination.index, 0, removed);
      setItems(reorderedItems);
    }
  };

  const renderQuestion1 = () => (
    <div className="row">
      <div className="p-4">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className="d-flex flex-column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        className={`btn btn-${buttonColors[index]} m-2 d-block`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );

  const renderQuestion2 = () => (
    <div className="row">
      <div className="col-12" style={{ paddingLeft: "40%" }}>
        {shuffledData.exercise1.map((item, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={item}
              id={`flexCheckDefault${index}`}
              onChange={(e) => handleCheckboxChange(e, item)}
            />
            <label
              className="form-check-label"
              htmlFor={`flexCheckDefault${index}`}
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFeedback = () => (
    <div className="row m-3">
      <div
        className="p-3 text-light"
        style={{
          background: feedback ? "green" : "red",
          borderRadius: "10px",
        }}
      >
        <div className="fw-bolder">Feedback!</div>
        <div>
          {feedback
            ? "All answers are correct."
            : "Some answer(s) need to be reviewed."}
        </div>
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
            An Exemplary Boss
          </div>

          <div className="p-4">
            <div className="row">
              <div className="col">{data[0].comprehension_data1}</div>
              <div className="col-2 text-center">
                <img className="img-fluid" src={apj} alt="logo" />
              </div>
            </div>
            <div className="mb-2">{data[0].comprehension_data2}</div>

            <div className="text-center fw-bolder bg-warning p-2 mb-2">
              {instruction}
            </div>

            {randomNo === 1 ? renderQuestion1() : renderQuestion2()}
            {showFB && renderFeedback()}

            <div className="d-flex justify-content-around">
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
              <Button
                variant="contained"
                onClick={(e) => handleNext(e.target.innerText)}
              >
                {finish ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise1Midcontent;
