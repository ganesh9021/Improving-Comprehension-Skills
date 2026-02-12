import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const SelectLevelMidContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="row"
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
              <Card.Title>{t("exercise")} 1</Card.Title>
              <Button
                variant="contained"
                sx={{
                  background: "#0F477E",
                  color: "#ffffff",
                  fontSize: "calc(.6rem + .4vw)",
                }}
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise1")
                }
              >
                {t("lets_go")}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col animate__animated animate__bounceInUp d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>{t("exercise")} 2</Card.Title>
              <Button
                variant="contained"
                sx={{
                  background: "#0F477E",
                  color: "#ffffff",
                  fontSize: "calc(.6rem + .4vw)",
                }}
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise2")
                }
              >
                {t("lets_go")}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col animate__animated animate__bounceInUp d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>{t("exercise")} 3</Card.Title>
              <Button
                variant="contained"
                sx={{
                  background: "#0F477E",
                  color: "#ffffff",
                  fontSize: "calc(.6rem + .4vw)",
                }}
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise3")
                }
              >
                {t("lets_go")}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col animate__animated animate__bounceInUp d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>{t("exercise")} 4</Card.Title>
              <Button
                variant="contained"
                sx={{
                  background: "#0F477E",
                  color: "#ffffff",
                  fontSize: "calc(.6rem + .4vw)",
                }}
                onClick={() =>
                  navigate("/launchpage/englishactivity/exercise4")
                }
              >
                {t("lets_go")}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
