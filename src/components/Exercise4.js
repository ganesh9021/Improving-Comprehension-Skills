import React from "react";
import { OlabsPage } from "english-olabsnxtg-library";
import QuizPopupContent from "../components/QuizPopupContent";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";  
import Exercise4Midcontent from "./Exercise4Midcontent.js";

const Exercise4 = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });

  return (
    <>
     <OlabsPage
        H_title="Improving Comprehension Skills"    
        HQ_yes="YES"
        HQ_cancel="CANCEL"
        HQ_quittext="Are you sure you want to quit?"
        M_midheight="90%"
        RSM_procedure_tt="Procedure"
        RSM_animation_tt="Animation"
        RSM_theory_tt="Theory"
        RSM_vivavoce_tt="Viva voce"
        RSM_ok="OK"
        M_midcontent_comp={<Exercise4Midcontent />}
        RSM_Intruc_popup_title_string="Instructions for quiz"
        RSM_QuizPopupContent_comp={<QuizPopupContent />}
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="6"
        labShortName="Improving Comprehension Skills"        
      />
    </>
  );
};

export default Exercise4;




