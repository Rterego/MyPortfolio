import { makeStyles } from "@material-ui/core/styles";
import { COMMON_CONTENTS_STYLE } from "../foundations/styles";

const common = COMMON_CONTENTS_STYLE;

const useStyles = makeStyles({
    container: {
        position: 'relative',
        maxWidth: '100%',
        alignItems: 'center',
        top: 64
    },
    text: {
        fontSize: 24
    }
});

const Links = () => {
    const commonClasses = common();
    const classes = useStyles();

    return (
        <div className={commonClasses.contents}>
            <h1 className={commonClasses.title}>LINKS</h1>
            <div className={classes.container}>
                <p className={classes.text}>GitHub: <a href='https://github.com/Rterego'>https://github.com/Rterego</a></p>
            </div>
        </div>
    )
}
export default Links;