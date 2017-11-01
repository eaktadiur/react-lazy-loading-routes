import React, {Component} from 'react';
import {
    Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
// import Home from './Home/Home'
// import Maps from './Maps/Maps'
// import Blog from './Blog/Blog'


import NotFound from './NotFound/NotFound'

import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import asyncComponent from './AsyncComponent'


const Home = asyncComponent(() =>
    import('./Home/Home').then(module => module.default)
)

const Maps = asyncComponent(() =>
    import('./Maps/Maps').then(module => module.default)
)

const Blog = asyncComponent(() =>
    import('./Blog/Blog').then(module => module.default)
)

const Email = asyncComponent(() =>
    import('./Email/Email').then(module => module.default)
)
const People = asyncComponent(() =>
    import('./People/Profile').then(module => module.default)
)


const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <Link to='/' className='navbar-brand'>
                                    <img alt="Brand" src=""/>
                                </Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className='active'>
                                    <Link to="/">
                                        <span className="navbar-item">Lazy Loading Routes</span>
                                    </Link>
                                </li>
                                <li>

                                    <Link to="/maps">
                                        <span className="navbar-item">Maps</span>
                                    </Link>
                                </li>
                                <li>

                                    <Link to="/blog">
                                        <span className="navbar-item">Blog</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='container'>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/maps" component={Maps}/>
                            <Route path="/blog" component={Blog}/>
                            <Route path="/email" component={Email}/>
                            <Route path="/people" component={People}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
