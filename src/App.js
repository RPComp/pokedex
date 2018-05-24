import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Home from './container/Home'

const App = () => (
    <div>
        <main>
            <HashRouter>
                <Route exact path="/" component={Home} />
            </HashRouter>
        </main>
    </div>
)

export default App;
