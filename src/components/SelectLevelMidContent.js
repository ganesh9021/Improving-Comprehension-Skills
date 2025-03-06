import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";

export const SelectLevelMidContent = () => {
  const [pageName, setpageName] = useState("Select Level");
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="row scrollbar-primary"
        style={{
          height: "100%",
          width: "93vw",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <div className="col animate__animated animate__bounceInLeft d-flex justify-content-center align-items-center mb-3 mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Exercise 1</Card.Title>
              <Button
                variant="contained"
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise1")
                }
              >
                Lets Go!
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col animate__animated animate__bounceInUp d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Exercise 2</Card.Title>
              <Button
                variant="contained"
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise2")
                }
              >
                Lets Go!
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col animate__animated animate__bounceInUp d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Exercise 3</Card.Title>
              <Button
                variant="contained"
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise3")
                }
              >
                Lets Go!
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col animate__animated animate__bounceInUp d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Exercise 4</Card.Title>
              <Button
                variant="contained"
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise4")
                }
              >
                Lets Go!
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
