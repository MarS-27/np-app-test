import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

type ButtonProps = {
  onChange: (e: string) => void;
  error: Boolean;
};

export default function ClearInputButton({ onChange, error }: ButtonProps) {
  return (
    <IconButton
      color={error ? "error" : "primary"}
      aria-label="delete"
      size="medium"
      onClick={() => onChange("")}
      sx={{
        alignSelf: "center",
        position: "absolute",
        right: "5px",
        top: "8px",
      }}
    >
      <ClearIcon fontSize="inherit" />
    </IconButton>
  );
}
