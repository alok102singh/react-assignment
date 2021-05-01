import App from "./App"
import PostListing from "./component/PostListing"
import { Switch, Route } from "react-router-dom"





export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/list" component={PostListing} />
        </Switch>
    )
}