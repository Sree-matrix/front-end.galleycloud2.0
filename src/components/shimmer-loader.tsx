import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ShimmerLoader = () => {
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
      {Array.from(new Array(5)).map((_, index) => (
        <ShimmerBox key={index} sx={{ flex: 1, minHeight: "9rem" }} />
      ))}
    </Box>
  );
};

export const ShimmerBox = styled(Box)({
  animation: "shimmer 1.5s infinite",
  background: "linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)",
  backgroundSize: "1000px 100%",
  borderRadius: "0.4rem",
  "@keyframes shimmer": {
    "0%": { backgroundPosition: "-1000px 0" },
    "100%": { backgroundPosition: "1000px 0" },
  },
});
