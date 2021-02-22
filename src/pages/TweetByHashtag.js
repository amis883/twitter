import React from 'react';
import useStyles from './styles'
import Divider from '@material-ui/core/Divider'
import Header from '../components/Header/header'

const TweetByHashtag = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title={"props.match.params.hashtag"} icon={<img src={"/assets/hashtag.png"} />} />
            <Divider className={classes.divider} />
            {/* <TweetList data={tweets}/> */}

        </div>
    );
};

export default TweetByHashtag;