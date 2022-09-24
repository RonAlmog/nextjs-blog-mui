import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useEffect, useMemo, useState } from "react";
import Header from "../components/layout/header";
import {
  Badge,
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import {
  getStoredTheme,
  getThemeOptions,
  setStoredTheme,
} from "../utils/theme";
import MailIcon from "@mui/icons-material/Mail";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark"); // default is dark mode
  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  // update the theme only if changed
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  // how to use a custom theme where needed
  // const customTheme = useTheme(); // for use in other components, could potentially use theme
  // customTheme.palette.error.main=...

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        mode={mode}
        onChange={() => {
          const newMode: PaletteMode = mode === "dark" ? "light" : "dark";
          setMode(newMode);
          setStoredTheme(newMode);
        }}
      />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <div>
          <Badge badgeContent={1} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="info">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="warning">
            <MailIcon />
          </Badge>
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color="success">
            <MailIcon />
          </Badge>
        </div>
      </Box>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
