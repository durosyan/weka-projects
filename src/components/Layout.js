import React from "react"

import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import Meta from '../utility/meta.js';
import theme from '../utility/theme.js';
import Navigation from './Navigation.js';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <CssBaseline />
      <Navigation />
      <div>
        {children}
      </div>
    </ThemeProvider >
  )
}
