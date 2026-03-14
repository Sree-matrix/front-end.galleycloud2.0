"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Stack } from "@mui/material";

// Keep these dynamic
const CommonAppHeader = dynamic(
  () => import("@/components/app-header/common").then((mod) => mod.CommonAppHeader),
  { ssr: false }
);

const AppFooter = dynamic(
  () => import("@/components/app-footer").then((mod) => mod.AppFooter),
  { ssr: false }
);

interface ILayoutProps {
  readonly children: React.ReactNode;
}
export const CommonLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh",
        width: "100vw",        
        overflowX: "hidden",   
        position: "relative"
      }}
    >
      <CommonAppHeader />
      <Box component="main" sx={{ flexGrow: 1, width: "100%", overflowX: "hidden" }}>
        {children}
      </Box>
      <AppFooter />
    </Box>
  );
};