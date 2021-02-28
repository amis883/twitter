import { Divider } from '@material-ui/core'
import PersonIcon from '@material-ui/core/Person'
import React, { useEffect, useState } from 'react'
import { getAllTweets } from '../../api/api-tweet'
import useStyles from '../auth/styles'
import Header from '../home/components/Header'
import TweetList from '../home/components/TweetList';

const TweetsByUser = (props) => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getAllTweets((isok, data) => {
            if (!isok)
                return alert(data.message)
            else setTweets(data);
        })
    }, [])

    const classes = useStyles;
    return (
        <div className={classes.root}>
            <Header title={props.match.params.user} icon={<PersonIcon />} />
            <Divider />
            <TweetList data={tweets} />

        </div>
    )
}
export default TweetsByUser;