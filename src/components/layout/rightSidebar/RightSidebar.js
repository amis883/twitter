import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Link } from "react-router-dom"
import { getHashTags } from '../../../api/api-tweet'
//  const hashTags = [
//     "پرچم دار-جدید",
//     "کرونا",
//     "هلو-سامر",
//     "پیروزی",
//     "پرچم دار-جدید",
//     "کرونا",
//     "هلو-سامر",
//     "پیروزی",
// ]
const RightSidebar = () => {
    const [hashTags, setHashTags] = useState();
    useEffect(() => {
        getHashTags((isok, data) => {
            if (!isok)
                return alert("not success")
            setHashTags(data)
        })
    }, [])
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={'row'} alignItems={'center'}>
                    <Grid item>
                        <img className={classes.logoPic} src="/assets/logo.png" alt={'logo'} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logoType}>توییتر فارسی</Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={'column'} alignItems={'center'}>
                {hashTags.map(item => <ButtonBase key={item.id} className={classes.hashTagparent}>
                    <Link to={"/hastags/" + item} style={{ width: '100%' }}>
                        <Grid item container>
                            <Typography className={classes.hashtag} >{item}</Typography>
                            <img className={classes.hashtagPic} src='/hashtag.png' alt={'hashtag'} />

                        </Grid>
                    </Link>
                </ButtonBase>)}


            </Grid>
        </div>
    )
}

export default RightSidebar
