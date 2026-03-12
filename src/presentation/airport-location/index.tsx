"use client";

import React, { useMemo, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import { CommonPageHeroSection } from "@/components/app-header/common-page-hero";
import { airports } from "./components/data";
import { AirportTabs } from "./components/airport-tabs";
import { AirportSearch } from "./components/airport-search";
import { AirportCard } from "./components/airport-card";
import { AirportEmptyState } from "./components/airport-empty";

export const AirportSection = () => {
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const filteredAirports = useMemo(() => {
    return airports.filter((airport) => {
      const matchesContinent = selectedTab === "All" || airport.continent === selectedTab;

      const matchesSearch =
        airport.name.toLowerCase().includes(search.toLowerCase()) ||
        airport.code.toLowerCase().includes(search.toLowerCase()) ||
        airport.country.toLowerCase().includes(search.toLowerCase());

      return matchesContinent && matchesSearch;
    });
  }, [selectedTab, search]);

  return (
    <Box sx={{ backgroundColor: "background.paper", minHeight: "100vh" }}>
      <CommonPageHeroSection
        title="Airport location"
        subtitle="GalleyCloud transforms in-flight catering, linking operators with top caterers for simple ordering and reliable support."
      />

      <Box sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <Container maxWidth="xl">
          <AirportTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <AirportSearch search={search} setSearch={setSearch} />

          <Stack sx={{ gap: "1rem" }}>
            {filteredAirports.length > 0 ? (
              filteredAirports.map((airport) => <AirportCard key={airport.id} airport={airport} />)
            ) : (
              <AirportEmptyState />
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
