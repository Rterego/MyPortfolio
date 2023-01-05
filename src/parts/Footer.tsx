import React from "react";
import { AppBar, Box, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  }
});

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}></div>
          <p>Mail: ryuforsykt@gmail.com</p>
        </Toolbar>
      </AppBar>
    </Box>
  </div>;
};

export default Footer;