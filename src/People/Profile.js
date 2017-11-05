import React, {Component} from 'react'

import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import asyncComponent from '../AsyncComponent'

const Rajib = asyncComponent(() =>
    import('./Rajib').then(module => module.default)
)

export default class Profile extends Component {
    render() {
        console.log('parent');
        return (
            <div className="container">
                <h1>Parent </h1>
                <Link to="/people/rajib">
                    <span className="navbar-item">Rajib</span>
                </Link>

                <div className='container'>
                    <Switch>
                        <Route path="/people/rajib" component={Rajib}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
