import { Button, Grid, IconButton } from '@material-ui/core'
import React from 'react'
import useStyles from '../styles'
const Newtweet = () => {
    const classes = useStyles()

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img
                    src={'images/user img.png'}
                    alt={'user'}
                    style={{ width: 'max-content' }}
                />

                <textarea
                    placeholder={'توییت کن...'}
                    className={classes.input}
                ></textarea>
            </Grid>
            <Grid container direction={'row-reverse'} style={{ marginTop: '16px' }}>
                <Button
                style={{ borderRadius: '16px' }}
                    variant={'contained'}
                    color={'primary'}
                    className={classes.newTweetBtn}
                >
                    توییت
        </Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img
                        src={'../images/tweetpic.png'}
                        alt={'user'}
                        className={classes.newTweetImg}
                        style={{ borderRadius: '50%' }}
                    />
                </IconButton>
            </Grid>
        </div>
    )
}

export default Newtweet
