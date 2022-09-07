import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#315d32',
        },
        secondary: {
            main: '#14bdeb',
        },
        warning: {
            main: '#d50000',
        },
        info: {
            main: '#c490d1',
        },
        divider: '#827d73',
    },
    typography: {
        fontFamily: 'Montserrat',
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <HomePage/>
            <Footer/>
        </ThemeProvider>
    )
}

export default App
