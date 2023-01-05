import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { PURPLE_BASE } from './foundations/colors';
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

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/works' element={<Works />} />
          <Route path='/links' element={<Links />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
