import React, { useEffect, useState } from 'react';
import useStyles from './styles'
import Divider from '@material-ui/core/Divider'
import Header from '../../components/Header/header'
import { getAllTweets } from '../../api/api-tweet';
import TweetList from './home/components/TweetList';

const TweetByHashtag = (props) => {
    const classes = useStyles();

    const [tweets, setTweets] = useState();
    useEffect(() => {

        getAllTweets((isok, data) => {
            if (!isok)
                return alert("not success")
            setTweets(data)
        })
    }, [])
    return (
        <div className={classes.root}>
            <Header title={"props.match.params.hashtag"} icon={'<img src={"/assets/hashtag.png"} />'} />
            <Divider className={classes.divider} />
            <TweetList data={tweets} />

        </div>
    );
};

export default TweetByHashtag;