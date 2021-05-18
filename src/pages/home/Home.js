import React, { useEffect, useState } from 'react'
import NewTweet from './components/NewTweet'
import Header from './components/Header'
import Divider from '@material-ui/core/Divider'
import {Home as HomeIcon} from "@material-ui/icons";
import TweetList from './components/TweetList'
import useStyles from './styles'
import { getAllTweets } from '../../api/api-tweet'
const tweets = [
    {
        sender: {
            name: 'sumsong',
            id: '@sumsong',
             img: '/public/images/koooh_user.png'
        },
        text:
            'در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.',
        likes: 5
    },
    {
        sender: {
            name: 'loobia',
            id: '@loobia',
             img: '/public/images/user.png'
        },
        text:
            'در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.',
        likes: 99
    },
    {
        sender: {
            name: 'piaz',
            id: '@piaz',
            img: '/public/images/user.png'
        },
        text:
            'در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.',
        likes: 2
    },
    {
        sender: {
            name: 'nokhodfarangi',
            id: '@nokhodfarangi',
            img: '/public/images/person.png'
        },
        text:
            'در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.',
        likes: 2
    },
    {
        sender: {
            name: 'cheshmbolboli',
            id: '@cheshmbolboli',
            img: '/public/images/person.png'
        },
        text:
            'در این مقاله با مفاهیم بنیادی گیت، طرز کار با آن، اصطلاحات گیت‌هاب و کاربردهای هرکدام آشنا شدید.',
        likes: 2
    }
]

const Home = () => {
    const classes = useStyles()
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getAllTweets((isok, data) => {
            if (isok)
                // return alert("not success")
                setTweets(data)
        })
        
    }, [])
    return (
        <div className={classes.root}>
            <Header titel={"خانه"} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <NewTweet />
            <TweetList data={tweets} />
        </div>
    )
}

export default Home
