import { Paper, Typography, Tab, Tabs, Button } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles'
const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2
const AuthPage = () => {
    const classes = useStyles()
    const [tab, setTab] = useState(LOGIN_TAB_VALUE);
    const handleChangeTab = (e, newValue) => {
        setTab(newValue)
    }
    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerText}>به توییتر ما خیلی خوش اومدی</Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeTab}
                aria-label="disabled tabs example"
            >
                <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab} />
                <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab} />
            </Tabs>
            {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <input></input>
                    <Typography>رمز عبور </Typography>
                    <input></input>
                    <Button variant={"contained"} style={{ color: "primary" }} >ورود</Button>
                </div>}
            {
                tab === REG_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کامل</Typography>
                    <input className={"uni_m_b_small"}></input>
                    <Typography>نام کاربری</Typography>
                    <input className={"uni_m_b_small"}></input>
                    <Typography>رمز عبور </Typography>
                    <input className={"uni_m_b_small"}></input>
                    <Typography>رمز عبور تکرار </Typography>
                    <input className={"uni_m_b_small"}></input>
                    <Button variant={"contained"}>ثبت نام</Button>
                </div>
            }

        </Paper>
    );
};

export default AuthPage;