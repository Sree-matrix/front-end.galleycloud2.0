"use client";

import { Typography, Stack } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const AirportEmptyState = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        gap: "1rem",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        textAlign: "center",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          backgroundColor: "grey.100",
        }}
      >
        <LocationOnOutlinedIcon sx={{ color: "secondary.light" }} />
      </Stack>

      <Typography variant="h3">
        Sorry, No Matching Airports Found. Try Adjusting Your Search.
      </Typography>
    </Stack>
  );
};
