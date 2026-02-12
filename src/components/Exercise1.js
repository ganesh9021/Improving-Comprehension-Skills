import React from "react";
import { OlabsPage } from "english-olabsnxtg-library";
import QuizPopupContent from "../components/QuizPopupContent";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";
import Exercise1Midcontent from "./Exercise1Midcontent.js";
import { useTranslation } from "react-i18next";

const Exercise1 = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const { t } = useTranslation();
  return (
    <>
      <OlabsPage
        H_title={t("title")}
        HQ_yes={t("yes")}
        HQ_cancel={t("cancel")}
        HQ_quittext={t("aysywtq")}
        M_midheight="90%"
        RSM_procedure_tt={t("procedure")}
        RSM_animation_tt={t("animation")}
        RSM_theory_tt={t("theory")}
        RSM_vivavoce_tt={t("vivavoce")}
        RSM_ok={t("ok")}
        RSM_Menu_tt={t("menu")}	
        M_midcontent_comp={<Exercise1Midcontent />}
        RSM_Intruc_popup_title_string={t("ifq")}
        RSM_QuizPopupContent_comp={<QuizPopupContent />}
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="8"
        labShortName={t("title")}
      />
    </>
  );
};

export default Exercise1;
