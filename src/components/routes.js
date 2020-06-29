import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/home'
import VideoStream from './pages/videoStream'

class Routes extends Component {
    render() {
        // routing system for jibaro
        return (
            <section>
                <Switch>
                    <Route exact path='/' component={Home}  />
                    <Route exact path='/video/:id' component={VideoStream}  />
                </Switch> 
            </section>
        );
    }
}

export default Routes;
