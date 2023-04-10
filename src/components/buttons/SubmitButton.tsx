import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

type SubmitButtonName = {
  buttonName: "Статус ТТН" | "Знайти";
};

export default function SubmitButton({ buttonName }: SubmitButtonName) {
  const { t } = useTranslation();

  return (
    <Button
      sx={{
        height: "40px",
        minWidth: "125px",
        marginTop: "8px",
      }}
      type="submit"
      variant="contained"
    >
      {buttonName === "Статус ТТН" ? t("getStatus") : t("find")}
    </Button>
  );
}
