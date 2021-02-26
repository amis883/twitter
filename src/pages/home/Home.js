import React from 'react'
import NewTweet from './components/NewTweet'
import Header from './components/Header'
import Divider from '@material-ui/core/Divider'
import TweetList from './components/TweetList'
import useStyles from './styles'
const tweets = [
    {
        sender: {
            name: 'sumsong',
            id: '@sumsong',
            img: 'images/user.png'
        },
        text: "در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.",
        likes: 5
    },
    {
        sender: {
            name: 'loobia',
            id: '@loobia',
            img: 'images/user.png'
        },
        text: "در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.",
        likes: 99
    }, {
        sender: {
            name: 'piaz',
            id: '@piaz',
            img: 'images/user.png'
        },
        text: "در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.",
        likes: 2
    },
    {
        sender: {
            name: 'nokhodfarangi',
            id: '@nokhodfarangi',
            img: 'images/user.png'
        },
        text: "در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.",
        likes: 2
    }
    ,
    {
        sender: {
            name: 'cheshmbolboli',
            id: '@cheshmbolboli',
            img: 'images/user.png'
        },
        text: "در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.",
        likes: 2
    }

]

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header />
            <Divider />
            <NewTweet />
            <TweetList data={tweets} />
        </div>

    );
};

export default Home;