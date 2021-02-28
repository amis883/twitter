import React from "react";
import Layout from './layout/Layout'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import Page404 from '../pages/Page404'
import AuthPage from '../pages/auth/AuthPage';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/login" component={AuthPage} />
                    <PrivateRoute path={"/"}
                        render={() => {
                            <Layout>
                                <Switch>
                                    <Route exact path={"/"} compoenent={Home} />
                                    <Route exact path={"/hashtags/:hashtag"} compoenent={Page404} />
                                    <Route component={Page404} />
                                </Switch>
                            </Layout>
                        }} />
                </Switch>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
};
//public route
const isLogin = () => !!localStorage.getItem("x-auth-token")
const PublicRoute = ({ component, ...props }) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={"/"} />
        else return React.createElement(component, props)
    }} />

}
//Private route
const PrivateRoute = ({ render, ...props }) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return render(props);
        else return <Redirect to={"/login"} />
    }} />
}
export default App;