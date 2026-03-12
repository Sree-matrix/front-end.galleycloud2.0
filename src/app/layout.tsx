"use client";

import { Quattrocento, Roboto } from "next/font/google";

import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "@/theme";


const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: Readonly<IRootLayoutProps>) => {
  const { children } = props;

  return (
    <html lang="en" className={`${quattrocento.className} ${roboto.variable}`}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <body suppressHydrationWarning>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
              </ThemeProvider>
            </AppRouterCacheProvider>
        </body>
      </LocalizationProvider>
    </html>
  );
};

export default RootLayout;
