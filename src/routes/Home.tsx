import { makeStyles } from "@material-ui/core";
import { WHITE } from "../foundations/colors";
import HomeBackground from "../parts/HomeBackground";

const useStyles = makeStyles({
    text: {
        color: WHITE,
        fontSize: '4.5rem',
        paddingLeft: '5%',
        maxWidth: '90%',
        opacity: 0.8,
        textAlign:'center'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <HomeBackground />
            <p className={classes.text}>Thank you for coming this website</p>
        </div>

    )
}

export default Home;