import React from 'react'
import NewTweet from './components/NewTweet'
import Header from './components/Header'
import Divider from '@material-ui/core/Divider'
import TweetList from './components/TweetList'



import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header />
            <Divider />
            <NewTweet />
            <TweetList />
        </div>

    );
};

export default Home;