import React from "react";
import { makeStyles } from "@material-ui/core";
import { PURPLE_BASE, WHITE } from "../foundations/colors";

const useStyles = makeStyles({
  footer: {
    marginTop: 'auto',
    background: PURPLE_BASE,
    textAlign: "right"
  },
  text: {
    color: WHITE,
    marginRight: "20px"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.text}>Mail: ryuforsykt@gmail.com</p>
    </footer>
  )
};

export default Footer;