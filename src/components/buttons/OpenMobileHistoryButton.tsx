import { Dispatch, SetStateAction } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";

type OpenHistoryProps = {
  openHistory: boolean;
  setOpenHistory: Dispatch<SetStateAction<boolean>>;
};

export default function OpenMobileHistoryButton({
  openHistory,
  setOpenHistory,
}: OpenHistoryProps) {
  return (
    <IconButton
      sx={{
        display: { xs: "flex", md: "none" },
      }}
      color="primary"
      onClick={() => setOpenHistory(!openHistory)}
    >
      {!openHistory ? <ArrowUpwardIcon /> : <CloseIcon />}
    </IconButton>
  );
}
