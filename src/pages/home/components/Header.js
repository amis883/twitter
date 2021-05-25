import React from 'react'
import useStyle from '../styles'
import Typography from '@material-ui/core/Typography'
const Header = ({title,icon}) => {
    const classes = useStyle()
    return (
        <div className={classes.header}>
            {icon}
            <Typography className={classes.headerTitle}>{title}</Typography>
        </div>
    )
}

export default Header
