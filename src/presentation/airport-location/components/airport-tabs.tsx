"use client";

import { Tabs, Tab, Stack } from "@mui/material";

const continents = ["All", "Asia", "Europe", "North America", "South America", "Africa", "Oceania"];

type TProps = {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
};

export const AirportTabs = ({ selectedTab, setSelectedTab }: TProps) => {
  return (
    <Stack
      sx={{
        marginBottom: "1.5rem",
        backgroundColor: "background.paper",
        borderRadius: "0.5rem 0.5rem 0 0",
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={(e, val) => setSelectedTab(val)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "text.secondary",
            minHeight: "3rem",
            "&.Mui-selected": {
              color: "primary.main",
            },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "primary.main",
          },
        }}
      >
        {continents.map((tab) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
      </Tabs>
    </Stack>
  );
};
