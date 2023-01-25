import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PortfolioWebsiteModal from '../Modals/PortfolioWebsiteModal';

type Props = {
    title: string,
    text: string,
    image?: string
}

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 240,
    },
});

const WorkCard = (props: Props) => {
    const classes = useStyles();

    const [isPortfolioWebSiteModalOpen, setIsPortfolioWebSiteModalOpen] = useState(false);

    const onclick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e.currentTarget.id);
        switch (e.currentTarget.id) {
            case 'portfolioSite':
                setIsPortfolioWebSiteModalOpen(true);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={onclick} id='portfolioSite'>
                        詳しく見る
                    </Button>
                </CardActions>
            </Card>
            <PortfolioWebsiteModal isOpen={isPortfolioWebSiteModalOpen} setIsOpen={setIsPortfolioWebSiteModalOpen} />
        </div>
    )
}

export default WorkCard;