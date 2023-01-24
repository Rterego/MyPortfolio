import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { COMMON_CONTENTS_STYLE } from "../foundations/styles";
import WorkCard from "../parts/WorkCard";
import portfolioSite01 from "../images/portfolioSite01.png"

const common = COMMON_CONTENTS_STYLE;

const useStyles = makeStyles({
    container: {
        position: 'relative',
        maxWidth: '100%',
        alignItems: 'center',
        top: 64
    },
});

const Works = () => {
    const commonClasses = common();
    const classes = useStyles();
    return (
        <div className={commonClasses.contents}>
            <h1 className={commonClasses.title}>WORKS</h1>
            <div className={classes.container}>
                <Grid>
                    <WorkCard
                        title='ポートフォリオサイト(本サイト)'
                        text='ポートフォリオとして作成したWebサイトです。'
                        image={portfolioSite01}
                    ></WorkCard>
                </Grid>
            </div>
        </div>
    )
}
export default Works;