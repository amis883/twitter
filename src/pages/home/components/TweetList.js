
import React from 'react';
import Tweet from '../components/Tweet'

const TweetList = ({ data }) => {

    return (
        <>
            {data.map(tweet => <Tweet data={tweet} />)}
        </>
    );
};

export default TweetList;