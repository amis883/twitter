import React from 'react'
import RightSidebar from '../layout/rightSidebar/RightSidebar'
import LeftSidebar from '../layout/leftSidebar/LeftSidebar'
import Divider from '@material-ui/core/Divider'
import useStyles from './styles'
import Home from '../../pages/home/Home'




const Layout = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <LeftSidebar />
            <Divider orientation={'vertical'} className={classes.divider} />
            {/* <div className={classes.content}>
                {props.children}
            </div> */}
            <Home />
            <Divider orientation={'vertical'} className={classes.divider} />
            <RightSidebar />
        </div>
    )
}

export default Layout
