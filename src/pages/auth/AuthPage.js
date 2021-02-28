import { Paper, Typography, Tab, Tabs, Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { loginApi, registerApi } from '../../api/api-auth'
import useStyles from './styles'
const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2
const AuthPage = () => {
    const classes = useStyles()
    const [tab, setTab] = useState(LOGIN_TAB_VALUE)
    //register state
    const [fullNameRegister, setFullNameRegister] = useState('')
    const [usernameRegister, setUsernameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [confPasswordRegister, setConfPasswordRegister] = useState()

    //login state
    const [usernameLogin, setUsernameLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const handleRegister = () => {
        const user = {
            name: fullNameRegister,
            username: usernameRegister,
            password: passwordRegister,
            confPasswordRegister: confPasswordRegister
        }
        const error = validateRegister(user)
        if (error) return toast.warn(error)
        user.confPasswordRegister = undefined
        registerApi(user, (isok, data) => {
            if (!isok) return toast.error(data)
            toast.success('شما با موفقیت ثبت نام کردید!')
            localStorage.setItem('name', data.name)
            localStorage.setItem('image', data.image)
            localStorage.setItem('username', data.username)
            localStorage.setItem('x-auth-token', data['x-auth-token'])
            window.location.reload();

        })
    }
    const validateRegister = user => {
        if (!user.username) return 'باید حتما یوزرنیم راوارد کنید'
        if (!user.name) return 'باید حتما نام راوارد کنید'
        if (!user.password) return 'باید حتما پسورد راوارد کنید'
        if (user.password !== user.confPasswordRegister)
            return 'باید حتما رمز مشابه وارد کنید'
    }

    const handleChangeTab = (e, newValue) => {
        setTab(newValue)
    }
    const validateLogin = user => {
        if (!user.username) return 'باید یوزرنیم راوارد کنید'
        if (!user.password) return 'باید پسورد راوارد کنید'
    }
    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin
        }
        const error = validateLogin(user)
        if (error) return toast.warn(error)
        loginApi(user, (isok, data) => {
            if (!isok) return toast.error(data)
            toast.success('شما با موفقیت وارد شدید!')
            localStorage.setItem('name', data.name)
            localStorage.setItem('image', data.image)
            localStorage.setItem('username', data.username)
            localStorage.setItem('x-auth-token', data['x-auth-token'])
            window.location.reload();
        })
    }
    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerText}>
                به توییتر ما خیلی خوش اومدی
      </Typography>
            <Tabs
                value={tab}
                indicatorColor='primary'
                textColor='primary'
                onChange={handleChangeTab}
                aria-label='disabled tabs example'>
                <Tab label='ورود' value={LOGIN_TAB_VALUE} className={classes.tab} />
                <Tab label='ثبت نام' value={REG_TAB_VALUE} className={classes.tab} />
            </Tabs>
            {tab === LOGIN_TAB_VALUE && (
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <Input
                        className={'uni_m_b_small'}
                        value={usernameLogin}
                        onChange={e => setUsernameLogin(e.target.value)}
                    ></Input>
                    <Typography>رمز عبور </Typography>
                    <Input
                        className={'uni_m_b_small'}
                        value={passwordLogin}
                        onChange={e => setPasswordLogin(e.target.value)}
                    ></Input>
                    <Button
                        variant={'contained'}
                        style={{ color: 'primary' }}
                        onClick={handleLogin}
                    >
                        ورود
          </Button>
                </div>
            )}
            {tab === REG_TAB_VALUE && (
                <div className={classes.containerInput}>
                    <Typography>نام کامل</Typography>
                    <Input
                        className={'uni_m_b_small'}
                        value={fullNameRegister}
                        onChange={e => setFullNameRegister(e.target.value)}
                    ></Input>
                    <Typography>نام کاربری</Typography>
                    <Input
                        className={'uni_m_b_small'}
                        value={usernameRegister}
                        onChange={e => setUsernameRegister(e.target.value)}
                    ></Input>
                    <Typography>رمز عبور </Typography>
                    <Input
                        className={'uni_m_b_small'}
                        value={passwordRegister}
                        onChange={e => setPasswordRegister(e.target.value)}
                    ></Input>
                    <Typography>رمز عبور تکرار </Typography>
                    <Input
                        className={'uni_m_b_small'}
                        value={confPasswordRegister}
                        onChange={e => setConfPasswordRegister(e.target.value)}
                    ></Input>
                    <Button variant={'contained'} onClick={handleRegister}>
                        ثبت نام
          </Button>
                </div>
            )}
        </Paper>
    )
}

export default AuthPage
