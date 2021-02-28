import React from 'react';
import Layout from './layout/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import Page404 from '../pages/Page404'
import AuthPage from '../pages/auth/AuthPage';
const App = () => {
    return (
        <div>

            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={AuthPage} />
                    <Route path={"/"}
                        render={() => {
                            return <Layout>
                                <Switch>
                                    <Route exact path={"/"} compoenent={Home} />
                                    <Route exact path={"/hashtags/:hashtag"} compoenent={Page404} />
                                    <Route component={Page404} />
                                </Switch>
                            </Layout>

                        }}>

                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;