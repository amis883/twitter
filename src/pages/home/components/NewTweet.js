import { Button, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles'
const Newtweet = () => {
    const classes = useStyles()

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"images/user.png"} alt={"user"} style={{ width: 'max-content' }} />
                <textarea placeholder={"توییت کن..."} className={classes.input}></textarea>
            </Grid>
            <Grid container direction={"row"} style={{ marginTop: 16 }}>
                <Button variant={"contained"} color={"primary"} className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={"images/user.png"} alt={"user"} className={classes.newTweetImg} />
                </IconButton>
            </Grid>

        </div>
    );
};

export default Newtweet;