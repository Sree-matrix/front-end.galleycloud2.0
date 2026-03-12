"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Box, Stack } from "@mui/material";

const CommonAppHeader = dynamic(
  () => import("@/components/app-header/common").then((mod) => mod.CommonAppHeader),
  { ssr: false },
);

const AppFooter = dynamic(() => import("@/components/app-footer").then((mod) => mod.AppFooter), {
  ssr: false,
});

interface ILayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<ILayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Box sx={{ minHeight: "100vh", width: "100%" }}>
      <CommonAppHeader />

      <Stack
        component="main"
        sx={{
          width: "100%",
        }}
      >
        {children}
      </Stack>

      <AppFooter />
    </Box>
  );
};

export { CommonLayout };
