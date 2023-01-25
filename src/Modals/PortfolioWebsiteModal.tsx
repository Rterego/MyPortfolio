import { Modal } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import portfolioSite01 from "../images/portfolioSite01.png"
import portfolioSite02 from "../images/portfolioSite02.png"



type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 880,
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const PortfolioWebsiteModal = (props: Props) => {
    const classes = useStyles();
    const handleClose = () => {
        props.setIsOpen(false);
    }
    const body = (
        <div style={getModalStyle()} className={classes.paper}>
            <h2 id="simple-modal-title">ポートフォリオサイト</h2>
            <div id="simple-modal-description">
                <p>Skills: TypeScript, HTML, CSS, React.js（ver.18.2.0）,MaterialｰUI （ver.4.12.2）, GitHub Pages</p>
                <p>作成期間: 1週間ほど</p>
                <p>GitHub: <a href="https://github.com/Rterego/MyPortfolio">https://github.com/Rterego/MyPortfolio</a></p>
                <p>ポートフォリオとして作成したWebサイトです。シンプルなデザインとページ構成を意識して作成しました。</p>
                <img src={portfolioSite01} width={500} alt={"portfolioSite01"}></img>
                <p>ヘッダーにはページ遷移用のボタンを配置し、それを押すことで即座に読みたいコンテンツのページへ移動することができます。</p>
                <img src={portfolioSite02} width={500} alt={"portfolioSite02"}></img>

            </div>
        </div>
    );

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.isOpen}
            onClose={handleClose}
        >
            {body}
        </Modal>
    )
};

export default PortfolioWebsiteModal;