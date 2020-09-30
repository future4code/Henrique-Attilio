import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../components/screens/LoginPage/LoginPage'
import FeedPage from '../../components/screens/FeedPage/FeedPage'
import PostPage from '../../components/screens/PostPage/PostPage'
import SignUpPage from '../../components/screens/SignUpPage/SignUpPage'


const Router = () => {
    return(
        <Switch>
            <Route exact path={'/login'}>
                <LoginPage/>
            </Route>
            <Route exact path={'/feed'}>
                <FeedPage/>
            </Route>
            <Route exact path={'/post'}>
                <PostPage/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUpPage/>
            </Route>
        </Switch>

    )
}

export default Router