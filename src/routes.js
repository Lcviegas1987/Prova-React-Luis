import React from "react";
import {Switch, Route} from "react-router-dom"
import Blocks from "./pages/Blocks/blocks"



export const Routes = () => {
    return (

        <Switch>
            <Route path = "/blocks" component={Blocks} exact/>
            <Route path = "/cards" component={Card} exact/>
            <Route path = "/forms" component={Form} exact/>
            <Route path = "/index" component={Index} exact/>
            <Route path ="/pricing" component={Pricing} exact/>
        </Switch>
    )


}