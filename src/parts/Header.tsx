import { AppBar, Avatar, Box, Button, Toolbar } from '@material-ui/core';
import * as React from 'react';
import icon from "../images/icon.png";



const styles = {
  Box: {
    flexGrow: 1,
    zIndex: 10000
  }
};

const Header = () => {
  return (
    <Box sx={styles.Box}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Button href='/'>
            <Avatar src={icon}></Avatar>
          </Button>
          <div style={{ flexGrow: 1 }}></div>
          <Button color="inherit" href='/'>ホーム</Button>
          <Button color="inherit" href='/profile'>プロフィール</Button>
          <Button color="inherit" href='/works'>作品</Button>
          <Button color="inherit" href='/links'>リンク</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;