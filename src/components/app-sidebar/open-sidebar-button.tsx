import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuRounded";

export const OpenSideBarButton: React.FC<{ toggleSideBar: () => void }> = ({ toggleSideBar }) => {
  return (
    <IconButton
      aria-label="Open sidebar"
      size="large"
      sx={{ display: { xs: "grid", md: "none" } }}
      onClick={toggleSideBar}
    >
      <MenuIcon />
    </IconButton>
  );
};
