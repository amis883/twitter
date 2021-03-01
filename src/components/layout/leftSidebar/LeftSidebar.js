import { ButtonBase, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../api/api-tweet'

import useStyles from './styles'
const Tweeter = ({ name, id, img }) => {
    const classes = useStyles()
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers((isok, data) => {
            if (!isok)
                return alert("not success")
            setUsers(data)
        })
    }, [])

    return <ButtonBase>
        <Grid container direction={"row"} className={classes.tweeterParent}>
            <Grid item container direction={"column"} style={{ width: 'max-content' }} className={classes.tweeterNameParent}>
                <img src={img} alt={"user"} style={{ width: 50 }} />
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>
            </Grid>
        </Grid>
    </ButtonBase>
}
const tweeter = [{
    name: 'Xiaomi',
    id: "@xiaomi",
    img: "images/user.png"
},
{
    name: 'Sumsong',
    id: "@sumsong",
    img: "images/user.png"
},
{
    name: 'Apple',
    id: "@apple",
    img: "images/user.png"
},
{
    name: 'Huawi',
    id: "@Huawi",
    img: "images/user.png"
}]
const LeftSidebar = () => {
    const [anchorMenu, setAnchorMenu] = useState([]);
    const handleToggleMenu = (e) => {
        if (anchorMenu)
            setAnchorMenu(null);
        else
            setAnchorMenu(e.currentTarget);
    };
    const classes = useStyles()
    return (
        <div className={classes.root}  >
            <Grid container direction={"row-reverse"} onClick={handleToggleMenu} style={{ cursor: 'pointer' }}>
                <Grid item container direction={"column"} style={{ width: 'max-content' }} className={classes.profText}>
                    <img src={"images/user.png"} alt={"user"} style={{ width: 'max-content' }} />
                    <Typography className={classes.profName}>سبذسبظیسبدظیدد</Typography>
                    <Typography className={classes.profId}>nedkesdskdsk</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>بهترین خبر نگاران </Typography>
                <Divider style={{ marginLeft: -24, marginRight: -24 }} />
                {
                    tweeter.map((item, index) => {
                        return (<>
                            <Tweeter
                                name={item.name}
                                id={item.id}
                                img={item.img}
                                key={tweeter.id}
                            />
                            {index !== tweeter.length - 1 &&
                                <Divider style={{ marginLeft: -24, marginRight: -24 }} />}
                        </>)
                    })
                }
            </Grid>
            <Menu open={Boolean(anchorMenu)} onClose={() => setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem onClick={() => { localStorage.clear(); window.location.reload() }}>خروج</MenuItem>
            </Menu>
        </div>
    );
};
export default LeftSidebar;