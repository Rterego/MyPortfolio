import { makeStyles } from "@material-ui/core/styles";
import { COMMON_CONTENTS_STYLE } from "../foundations/styles";
import profileImage from "../images/profileImageweb.jpg";

const common = COMMON_CONTENTS_STYLE;

const useStyles = makeStyles({
    container: {
        position: 'relative',
        display: 'grid',
        maxWidth: '100%',
        gridTemplateColumns: '1fr 1.2fr',
        alignItems: 'center',
        top: 64
    },
    picture: {
        position: 'relative',
        gridRow: 1 / 2,
        gridColumn: 1 / 2,
    },
    item: {
        position: 'relative',
        gridRow: 1 / 2,
        gridColumn: 2 / 3,
        textAlign: 'start',
        fontFamily: 'メイリオ',
    },
    subtitle: {
        fontSize: '1.5rem',
        background: 'linear-gradient(transparent 80%, #7e57c2 80%)'
    }
});

const Profile = () => {
    const commonClasses = common();
    const classes = useStyles();
    return (
        <div className={commonClasses.contents}>
            <h1 className={commonClasses.title}>PROFILE</h1>
            <div className={classes.container}>
                <div className={classes.picture}>
                    <img src={profileImage} alt="" />
                </div>
                <div className={classes.item}>
                    <p><span className={classes.subtitle}>学歴</span></p>
                    <p>埼玉県立坂戸高等学校　卒業（2020年3月）</p>
                    <p>東京電機大学　未来科学部　情報メディア学科　入学（2020年4月）</p>
                    <p>東京電機大学　未来科学部　情報メディア学科　卒業見込み（2024年3月）</p>

                    <p><span className={classes.subtitle}>保有資格</span></p>
                    <p>実用英語技能検定2級</p>
                    <p>基本情報技術者試験</p>
                    <p>第一種普通自動車免許</p>

                    <p><span className={classes.subtitle}>SKILLS</span></p>
                    <p>Java, JavaScript, TypeScript, Python, HTML, CSS</p>
                    <p>React.js, PostgreSQL, MySQL</p>
                    <p>Git</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;