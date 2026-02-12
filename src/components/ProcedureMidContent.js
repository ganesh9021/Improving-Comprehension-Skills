import React from "react";
import img1 from "../Img/ProcedureImages/apj.png";
import img2 from "../Img/ProcedureImages/apj1.png";
import img3 from "../Img/ProcedureImages/apj3.png";
import img4 from "../Img/ProcedureImages/E2_que1.png";
import img5 from "../Img/ProcedureImages/E2_que2.png";
import img6 from "../Img/ProcedureImages/crossword.png";
import { useTranslation } from "react-i18next";

const ProcedureMidContent = () => {
  const { t } = useTranslation();
  return (
    <div
      className="py-3"
      style={{
        overflow: "auto",
        width: "100%",
        paddingRight: "10px",
        fontSize: "calc(.6rem + .4vw)",
      }}
    >
      <div className="fw-bolder">{t("procedure")}:</div>
      <ol>
        <li>{t("proc1")}</li>
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
            <div className="fw-bold">{t("proc_image_1")}</div>
          </div>
        </div>
        {/* ************************************************** */}
        <li>{t("proc2")}</li>
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
            <div className="fw-bold">{t("proc_image_2")}</div>
          </div>
        </div>
        {/* ***************************************************** */}
        <li>{t("proc3")}</li>
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
            <div className="fw-bold">{t("proc_image_3")}</div>
          </div>
        </div>
        {/* **************************************************************** */}
        <li>{t("proc4")}</li>
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
            {t("proc_image_4")}
            </div>
          </div>
        </div>
        {/* ********************************************************************* */}
        <li>{t("proc5")}</li>
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
            <div className="fw-bold">{t("proc_image_5")}</div>
          </div>
        </div>
        {/* ********************************************************************* */}
        {/* <li>{t("proc6")}</li>
        <ul type="disc">
          <li>{t("proc7")}</li>
          <li>{t("proc8")}</li>
          <li>{t("proc9")}</li>
        </ul> */}
        {/* ********************************************************** */}
        {/* <div className="" style={{ display: "flex", alignItems: "start" }}>
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
        </div> */}
        {/* **************************************************************** */}
      </ol>
    </div>
  );
};

export default ProcedureMidContent;
