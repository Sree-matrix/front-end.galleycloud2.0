import React from "react";
import Image from "next/image";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export interface INoDataFoundProps {
  message?: string;
  subMessage?: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  mobileImageWidth?: number;
  mobileImageHeight?: number;
  boxHeight?: number;
  mobileBoxHeight?: number;
}

export const NoDataFound: React.FC<INoDataFoundProps> = ({
  message = "No results found.",
  subMessage = "Try using another keyword.",
  imageSrc = "/images/icons/no-data-found.png",
  imageWidth = 300,
  imageHeight = 190,
  mobileImageWidth = 200,
  mobileImageHeight = 120,
  boxHeight = 400,
  mobileBoxHeight = 250,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: isMobile ? mobileBoxHeight : boxHeight,
        textAlign: "center",
      }}
    >
      <Image
        src={imageSrc}
        alt="No Data Found"
        width={isMobile ? mobileImageWidth : imageWidth}
        height={isMobile ? mobileImageHeight : imageHeight}
        quality={100}
        priority
      />
      <Typography variant="h5" fontWeight={500} sx={{ color: "text.primary", marginTop: "1rem" }}>
        {message}
      </Typography>
      {subMessage && (
        <Typography variant="subtitle1" color="text.secondary">
          {subMessage}
        </Typography>
      )}
    </Box>
  );
};
