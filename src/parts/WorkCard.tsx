import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

    return (
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
                <Button size="small" color="primary">
                    詳しく見る
                </Button>
            </CardActions>
        </Card>
    )
}

export default WorkCard;