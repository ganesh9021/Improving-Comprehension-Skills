import React from "react";
import { Launchpage } from "english-olabsnxtg-library";
import ActStartPopupContent from "../components/ActStartPopupContent";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const { t } = useTranslation();
  var arr = [
    "Student will recognize the correct subject-verb agreement in both written and spoken sentences",
    "Student will able to apply the rules of subject-verb agreement.",
  ];

  return (
    <>
      <Launchpage
        L_title="Improving comprehension skills"
        L_objective={t("obj")}
        L_act_objective="To understand and apply the grammatical rule that the subject and verb in a sentence."
        L_learning_outcome={t("lo")}
        L_array={arr}
        L_startbutton={t("start")}
        WAWGTL_title_string={t("wawgtl")}
        WAWGTL_comp={<ActStartPopupContent />}
        ok={t("ok")}
        cancel={t("cancel")}
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="-"
        labShortName="Improving comprehension skills"
      />
    </>
  );
};

export default Homepage;
