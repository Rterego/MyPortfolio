import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    contents:{
        maxWidth:'100%'
    }
});


const Profile = () =>{
    const classes = useStyles();
    return(
        <div className={classes.contents}>
            <p></p>
        </div>
    )
}

export default Profile;