import React from 'react';
import RightSidebar from '../layout/rightSidebar/RightSidebar';
import useStyle from './styles'
import Divider from "@material-ui/core/Divider"


const Layout = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.leftSidebar}>leftSidebar</div>
            <div className={classes.mainPart}>Main Part</div>
            <Divider orientation={"vertical"} className={classes.divider} />
            <RightSidebar />
        </div>
    );
};

export default Layout;