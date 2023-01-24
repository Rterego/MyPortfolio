import { makeStyles } from "@material-ui/core/styles";
import { COMMON_CONTENTS_STYLE } from "../foundations/styles";

const common = COMMON_CONTENTS_STYLE;

const useStyles = makeStyles({
});

const Links = () =>{
    const commonClasses = common();
    return(
        <div className={commonClasses.contents}>
            <h1 className={commonClasses.title}>LINKS</h1>
            
        </div>
    )
}
export default Links;