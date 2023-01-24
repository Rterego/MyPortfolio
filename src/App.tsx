import { makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { PURPLE_BASE } from './foundations/colors';
import Footer from './parts/Footer';
import Header from './parts/Header';
import Home from './routes/Home';
import Links from './routes/Links';
import NoMatch from './routes/nomatch';
import Profile from './routes/Profile';
import Works from './routes/Works';

const theme = createTheme({
  palette: {
    primary: {
      main: PURPLE_BASE
    },
    secondary: {
      main: PURPLE_BASE
    },
  },
});

const useStyles = makeStyles({
  body: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
    width: '100%'
  },
  main: {
    flex: 1
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <ThemeProvider theme={theme}>
        <Header />
        <main className={classes.main}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/works' element={<Works />} />
            <Route path='/links' element={<Links />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
