import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NewsFeed from "./pages/NewsFeed";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import UserPosts from "./pages/UserPosts";

export const useRoutes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <NewsFeed/>
            </Route>
            <Route path="/subscriptions" exact>
                <SubscriptionsPage/>
            </Route>
            <Route path="/userposts" exact>
                <UserPosts/>
            </Route>
        </Switch>
    )
}