
import React from 'react';
import Tweet from '../components/Tweet'
const TweetList = ({ data }) => {
    return (
        <div>

            {
                data.map(tweet => <Tweet data={tweet} key={data.id} />)
            }

        </div>
    );
};

export default TweetList;