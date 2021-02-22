import React from 'react'
import Search from './components/Search'
import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>

            Main Part
            <Search />
        </div>

    );
};

export default Home;