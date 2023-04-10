import i18next from "i18next";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import UA from "../../images/ua-ico.svg";
import GB from "../../images/gb-ico.svg";
import { useTranslation } from "react-i18next";

export default function ChangeLanguageButtonsGroup() {
  const { i18n } = useTranslation();

  const onLanguageChange = (lang: "ua" | "en") => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <ToggleButtonGroup
      value={i18n.language}
      exclusive
      sx={{
        "& button": { height: "40px", width: "50px" },
        "& img": { width: "100%" },
        padding: "6px 16px",
      }}
    >
      <ToggleButton
        value="ua"
        onClick={() => onLanguageChange("ua")}
        disabled={i18n.language === "ua"}
      >
        <img src={UA} alt="UA" />
      </ToggleButton>
      <ToggleButton
        value="en"
        onClick={() => onLanguageChange("en")}
        disabled={i18n.language === "en"}
      >
        <img src={GB} alt="EN" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
