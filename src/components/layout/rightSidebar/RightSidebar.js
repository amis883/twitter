import React from 'react'
import useStyle from './styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
const hashTags = [
    "پرچم دار-جدید",
    "کرونا",
    "هلو-سامر",
    "پیروزی",
    "پرچم دار-جدید",
    "کرونا",
    "هلو-سامر",
    "پیروزی",
]
const RightSidebar = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={'row'} textalign={'center'}>
                <Grid item>
                    <img className={classes.logoPic} src={'logo.png'} alt={'logo'} />
                </Grid>
                <Grid item>
                    <Typography className={classes.logoType}>توییتر فارسی</Typography>
                </Grid>
                <Typography className={classes.hashTagTitle}>
                    داغ ترین هشتگ ها
        </Typography>
                <Grid container direction={'column'} alignItems={'center'}>
                    {hashTags.map(item => <ButtonBase key={item.id} className={classes.hashTagparent}>
                        <Grid item container>
                            <Typography className={classes.hashtag} >{item}</Typography>
                            <img className={classes.hashtagPic} src={'hashtag.png'} alt={'hashtag'} />

                        </Grid>
                    </ButtonBase>)}

                </Grid>
            </Grid>
        </div>
    )
}

export default RightSidebar
