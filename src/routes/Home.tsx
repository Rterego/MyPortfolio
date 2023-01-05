import { makeStyles } from "@material-ui/core";
import Background from "../parts/Background";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
const useStyles = makeStyles({
    text: {
        fontSize: 176,
        paddingLeft:'5%'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Background />
            <Header />
            <p className={classes.text}>Thank you for coming this page</p>
            <Footer />
        </div>

    )
}

export default Home;