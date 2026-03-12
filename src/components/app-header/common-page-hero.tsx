import { Container, Stack, Typography } from "@mui/material";

interface ICommonPageHeroSectionProps {
  title: string;
  subtitle: string;
  seconderySubtitle?: string;
}

export const CommonPageHeroSection: React.FC<ICommonPageHeroSectionProps> = (props) => {
  const { title, subtitle, seconderySubtitle } = props;

  return (
    <Stack
      sx={{
        backgroundColor: "grey.400",
        color: "text.primary",
        width: "100%",
        paddingTop: { xs: "2rem", md: "2.5rem" },
        paddingBottom: { xs: "2rem", md: "2.5rem" },
      }}
    >
      <Container>
        <Stack sx={{ alignItems: "center", textAlign: "center", gap: "2rem" }}>
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
          <Stack sx={{ gap: "0.25rem", alignItems: "center" }}>
            <Typography variant="subtitle1" component="h2">
              {subtitle}
            </Typography>

            {seconderySubtitle && <Typography variant="subtitle1">{seconderySubtitle}</Typography>}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
