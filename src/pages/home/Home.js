import React from 'react'
import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>Main Part</div>

    );
};

export default Home;