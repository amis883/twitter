import React from 'react';
import useStyles from '../styles'
import { Typography, Grid, IconButton } from '@material-ui/core';

const Tweet = () => {
    const classes = useStyles()

    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={"images/user.png"} alt={"user"} style={{ width: 'max-content' }} />
                <Typography>سیسیسیس</Typography>

                <Typography>@hesamjaferoo</Typography>

            </Grid>
            <Grid container direction={"row"} style={{ marginTop: 16 }} alignItems={'center '}>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={"images/user.png"} alt={"user"} className={classes.newTweetImg} />
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={"images/user.png"} alt={"user"} className={classes.newTweetImg} />
                </IconButton>
                <Typography>17</Typography>
            </Grid>

        </div>
    );
};

export default Tweet;