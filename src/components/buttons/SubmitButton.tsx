import Button from "@mui/material/Button";

type SubmitButtonName = {
  buttonName: "Статус ТТН" | "Знайти";
};

export default function SubmitButton({ buttonName }: SubmitButtonName) {
  return (
    <Button
      sx={{
        height: "40px",
        width: "125px",
        marginTop: "8px",
      }}
      type="submit"
      variant="contained"
    >
      {buttonName}
    </Button>
  );
}
