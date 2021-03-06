import { ButtonBase, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from '../../../api/api-tweet'
import useStyles from './styles'

const Tweeter = ({ name, id, img }) => {
    const classes = useStyles()
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     getUsers((isok, data) => {
    //         if (!isok)
    //             // return alert("not success")
    //             setUsers(data)
    //     })
    // }, [])

    return <ButtonBase className={classes.ButtonBase}>
        <Grid container direction={"row"} className={classes.tweeterParent}>
            <img src={'/images/xiaomi.png'} alt={"xiaomi"} style={{ width: 50 }} className={classes.tweeterNameParent} />
            <Grid item container style={{ width: 'max-content' }} direction={"column"} className={classes.profTextavatar}>
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>

            </Grid>
        </Grid>
    </ButtonBase>
}
const tweeter = [{
    name: 'Xiaomi',
    id: "@xiaomi",
    img: "/images/xiaomi.png"
},
{
    name: 'Sumsong',
    id: "@sumsong",
    img: "/images/samsung.png"
},
{
    name: 'Mike',
    id: "@mike",
    img: "/images/mike.png"
},
{
    name: 'Bil',
    id: "@bil",
    img: "/images/bil.png"
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
    const getImage = () => {

    }
    return (
        <div className={classes.root}  >
            <Grid container direction={"row-reverse"} onClick={handleToggleMenu} style={{ cursor: 'pointer' }} >
                <img src={'/images/user img.png'} alt={"user"} style={{ width: 'max-content' }} />
                <Grid item container style={{ width: 'max-content' }} direction={"column"} className={classes.profText}>
                    <Typography className={classes.profName}>هدا سادات کاخکی</Typography>
                    <Typography className={classes.profId}>hodajoooooon</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>بهترین خبر نگاران </Typography>
                <Divider style={{ marginLeft: -16, marginRight: -16 }} />
                {
                    tweeter.map((item, index) => {
                        return (<Link to={`/users/${item.name}`} style={{ width: "100%" }} key={item.id}>
                            <Tweeter
                                name={item.name}
                                id={item.id}
                                img={item.img}
                            />
                            {index !== tweeter.length - 1 &&
                                <Divider style={{ marginLeft: -16, marginRight: -16 }} />}
                        </Link>)
                    })
                }
            </Grid>

        </div>
    );
};
export default LeftSidebar;