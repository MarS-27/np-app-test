import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import { TTN_CHECK_PATTERN } from "../../constants/constants";
import ClearHistoryButton from "../buttons/ClearHistoryButton";
import TrackingHistoryItem from "./TrackingHistoryItem";
import { useTranslation } from "react-i18next";

interface HistoryProps {
  localStorageLength: number;
}

const drawerWidth = 240;

export default function TrackingHistory({ localStorageLength }: HistoryProps) {
  const { t } = useTranslation();
  const [trackingHistory, setTrackingHistory] = useState<string[]>([]);

  useEffect(() => {
    const localStorageValues = Object.values(localStorage).filter((value) =>
      TTN_CHECK_PATTERN.test(value)
    );
    setTrackingHistory(localStorageValues);
  }, [localStorageLength]);

  return (
    // <Drawer
    //   variant="permanent"
    //   sx={{
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
    //   }}
    // >
    //   <Toolbar sx={{ zIndex: "-999" }} />
    //   <Box sx={{ overflow: "auto" }}>
    //     <List>
    //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
    //         <ListItem key={text} disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon>
    //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} />
    //           </ListItemButton>
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {["All mail", "Trash", "Spam"].map((text, index) => (
    //         <ListItem key={text} disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon>
    //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} />
    //           </ListItemButton>
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Box>
    // </Drawer>
    <Box sx={{ width: { xs: "100%", md: "20%" } }}>
      <Typography
        color="primary"
        variant="h6"
        sx={{ textAlign: "center", marginBottom: "10px" }}
      >
        {t("history")}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          flexWrap: { xs: "wrap" },
          justifyContent: "space-between",
          padding: "10px",
          borderColor: "primary.main",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "6px",
          backgroundColor: "background.paper",
        }}
      >
        {trackingHistory.length ? (
          <>
            {trackingHistory.map((docNum) => (
              <TrackingHistoryItem
                key={docNum}
                docNum={docNum}
                setTrackingHistory={setTrackingHistory}
                trackingHistory={trackingHistory}
              />
            ))}
            <ClearHistoryButton
              setTrackingHistory={setTrackingHistory}
              trackingHistory={trackingHistory}
            />
          </>
        ) : (
          <Typography color="secondary" variant="body2" textAlign="center">
            {t("emptyHistory")}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
