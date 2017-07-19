import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Resume from './components/Resume';

const App = () => (
    <BrowserRouter>
        <div className="">
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/resume' component={Resume}/>
            </Switch>
         </div>
    </BrowserRouter>
);

render(<App />, document.getElementById('app'));