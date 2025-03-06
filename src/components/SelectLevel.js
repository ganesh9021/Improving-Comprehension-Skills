import React from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";
import { OlabsPage } from "english-olabsnxtg-library";
import { SelectLevelMidContent } from "./SelectLevelMidContent";
import QuizPopupContent from "./QuizPopupContent";

const SelectLevel = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  return (
    <>
      <OlabsPage
        H_title="Improving Comprehension Skills"
        HQ_yes="YES"
        HQ_cancel="CANCEL"
        HQ_quittext="Are you sure you want to quit?"
        M_midheight="90%"
        RSM_theory_tt="Theory"
        RSM_vivavoce_tt="Viva voce"
        RSM_procedure_tt="Procedure"
        RSM_ok="OK"
        M_midcontent_comp={<SelectLevelMidContent />}
        RSM_Intruc_popup_title_string="Instructions for quiz"
        RSM_QuizPopupContent_comp={<QuizPopupContent />}
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="9"
        labShortName="Improving Comprehension Skills"
      />
    </>
  );
};

export default SelectLevel;
