import React from 'react'
import useStyle from '../styles'
import HomeIcon from '@material-ui/icons/Home'
import Typography from '@material-ui/core/Typography'
const Header = () => {
    const classes = useStyle()
    return (
        <div className={classes.header}>
            <HomeIcon />
            <Typography>خانه</Typography>
        </div>
    )
}

export default Header
