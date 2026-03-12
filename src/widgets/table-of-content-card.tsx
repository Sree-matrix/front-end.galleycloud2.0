import { useState } from "react";
import Link from "next/link";
import {
  useMediaQuery,
  Stack,
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { theme } from "@/theme";

interface ITableOfContentCardProps {
  title: string;
  sections: { title: string }[];
}

export const TableOfContentCard: React.FC<ITableOfContentCardProps> = ({ title, sections }) => {
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Stack
      sx={{
        flex: 1,
        paddingTop: "2rem",
        height: "max-content",
        alignItems: "flex-start",
        position: "sticky",
        top: "4rem",
      }}
    >
      <Container sx={{ padding: 0 }}>
        <Paper
          sx={{
            marginX: { xs: "auto", md: 0 },
            border: "1px solid #E0E0E0",
            backgroundColor: "#dae0fa",
            overflow: "hidden",
          }}
        >
          <Accordion
            expanded={isDesktopScreen ? true : expanded}
            onChange={() => !isDesktopScreen && setExpanded(!expanded)}
          >
            <AccordionSummary
              sx={{
                marginY: "0.75rem",
                "&.Mui-expanded": {
                  marginY: "0.75rem",
                },
              }}
            >
              <Typography variant="h5">{title}</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: "1.5rem", paddingTop: 0 }}>
              <Stack
                sx={{
                  maxHeight: "60vh",
                  overflowY: "auto",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                {sections.map((item, i) => {
                  if (!item.title) return null;

                  const isActive = i === activeIndex;

                  return (
                    <Link
                      key={item.title}
                      href={`#section-${i}`}
                      onClick={() => setActiveIndex(i)}
                      style={{ textDecoration: "none", width: "100%" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          padding: "0.5rem 0.75rem",
                          borderLeft: isActive ? "4px solid #2c3d7d" : "4px solid transparent",
                          backgroundColor: isActive ? "#e3edf9" : "transparent",
                          transition: "all 0.3s ease",
                          color: "#000",
                          "&:hover": {
                            borderLeft: "4px solid #2c3d7d",
                            backgroundColor: "#e3edf9",
                            color: "#2c3d7d",
                          },
                          borderRadius: "0 4px 4px 0",
                          cursor: "pointer",
                        }}
                      >
                        {i + 1}. {item.title}
                      </Typography>
                    </Link>
                  );
                })}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Container>
    </Stack>
  );
};
