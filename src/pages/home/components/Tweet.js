import React from 'react'
import useStyles from '../styles'
import { Typography, Grid, IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

const Tweet = ({ data }) => {
    const classes = useStyles()

    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img
                    src={data.sender.img}
                    alt={'user'}
                    style={{ height: 'max-content' }}
                />
                <Grid item container>
                    <Grid item container direction={'column'} style={{ flex: '1', marginRight: '1rem' }}>
                        <Typography className={classes.tweetItemName}>{data.sender.name}</Typography>
                        <Typography className={classes.tweetItemId}>{data.sender.id}</Typography>
                    </Grid>
                    <Typography className={classes.tweetText}> {data.text}</Typography>
                </Grid>
            </Grid>
            <Grid
                container
                direction={'row'}
                style={{ marginTop: 16 }}
                alignItems={'center '}
            >
                <IconButton className={classes.newTweetImgBtn}>
                    <img
                        src={'images/user.png'}
                        alt={'user'}
                        className={classes.newTweetImg}
                    />
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}>
                    <FavoriteIcon />

                </IconButton>
                <Typography className={classes.likeCount}>{data.likes}</Typography>
            </Grid>
        </div>
    )
}

export default Tweet
