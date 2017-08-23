import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import Nav from './Nav';
import Resume from './Resume';
import About from './About';

const App = () => (
    <BrowserRouter>
        <div className="">
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/resume' component={Resume}/>
                <Route path='/about' component={About}/>
            </Switch>
         </div>
    </BrowserRouter>
);

export default App;