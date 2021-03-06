import React from 'react'
import RightSidebar from '../layout/rightSidebar/RightSidebar'
import LeftSidebar from '../layout/leftSidebar/LeftSidebar'
import Divider from '@material-ui/core/Divider'
import useStyle from './styles'
import Home from '../../pages/home/Home'
// import TweetByHashtag from '../../pages/tweetsByHashtag/TweetByHashtag'
// import TweetsByUser from '../../pages/tweetsByUser/TweetsByUser'

const Layout = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <RightSidebar />
            <Divider orientation={'vertical'} className={classes.divider} />
<Home/>
{/* <div className={classes.content}> <TweetByHashtag/></div> */}
            {/* <div className={classes.mainPart}>main part</div> */}
    {/* <div className={classes.content}>{process.children}</div> */}
            <Divider orientation={'vertical'} className={classes.divider} />
            <LeftSidebar />



            {/* <div className={classes.content}>
                <TweetsByUser />
            </div> */}
            {/* <div className={classes.root}>
                <Home />
            </div> */}
            {/* <div className={classes.LeftSidebar}>
                <Divider orientation={'vertical'} className={classes.divider} />
            </div> */}

        </div>
    )
}

export default Layout
