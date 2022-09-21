import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
