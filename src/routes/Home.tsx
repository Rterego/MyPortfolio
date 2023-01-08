import { makeStyles } from "@material-ui/core";
import { WHITE } from "../foundations/colors";
import HomeBackground from "../parts/HomeBackground";

const useStyles = makeStyles({
    text: {
        color: WHITE,
        fontSize: 176,
        paddingLeft:'5%',
        opacity: 0.8
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <HomeBackground />
            <p className={classes.text}>Thank you for coming this page</p>
        </div>

    )
}

export default Home;