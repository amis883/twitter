import React from 'react';
import useStyle from "../home/styles";

import Divider from "@material-ui/core/Divider";
import TweetList from "../home/components/TweetList";
import Header from '../../components/Header/header'

const TweetByHashTag = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header title={'corona-virus'} icon={<img className={classes.hashtagPic} src={'/images/hashtag.png'} alt={'hashtag'} />}/>
      <Divider className={classes.divider}/>
      <TweetList data={TweetList}/>
    </div>
  );
};

export default TweetByHashTag;