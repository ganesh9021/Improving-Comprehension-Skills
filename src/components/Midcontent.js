import React, { useEffect, useState } from "react";

export const Midcontent = () => {
  return (
    <div
      className="scrollbar-primary row d-flex"
      style={{
        width: "100vw",
        backgroundColor: "#F2FBFF",
        borderRadius: "14px",
        opacity: 1,
        boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
        display: "block",
        overflow: "auto",
      }}
    >
      <div className="col-sm-9 d-flex align-items-center justify-content-center">
        <div
          className="scrollbar-primary"
          style={{
            overflow: "auto",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            height: "85%",
            width: "95%",
            borderRadius: "13px",
            boxShadow: "0px 4px 7px #00000029",
            display: "block",
            padding: "2%",
            overflowX: "hidden",
          }}
        ></div>
      </div>
      <div className="col-sm-3 d-flex align-items-center">
        <div
          className="scrollbar-primary"
          style={{
            overflow: "auto",
            height: "85%",
            width: "95%",
            borderRadius: "13px",
            boxShadow: "0px 4px 7px #00000029",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
          }}
        >
          <div
            className="sticky-top text-center subheading"
            style={{
              background: "#002F65",
              borderRadius: "10px 10px 0px 0px",
              opacity: "1",
              color: "#FFFFFF",
              fontSize: "1.3rem",
              fontWeight: "bolder",
            }}
          >
            Instructions
          </div>
          <div style={{ maxHeight: "50vh", padding: "2%", lineHeight: "30px" }}>
            <div>
              <ul>
                <li>Read the passage carefully.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
