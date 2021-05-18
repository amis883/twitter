import React, { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider'
import Header from '../../components/Header/header'
import { getAllTweets } from '../../api/api-tweet';
import TweetList from '../home/components/TweetList';
import useStyles from '../home/styles';



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
            <Header title={"props.match.params.hashtag"} icon={'<img src={"/images/hashtag.png"} alt={}/>'} />
            <Divider className={classes.divider} />
            <TweetList data={tweets} />

        </div>
    );
};

export default TweetByHashtag;