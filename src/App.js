import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
	state = {
		isLoggedIn: false
	}

	render() {

		return (
			<div>
				<nav className="nav">
					<ul>
						<li>
							<NavLink to="/" exact activeClassName={'current-menu-item'}>Home</NavLink>
						</li>
						<li>
							<NavLink
								to={{
									pathname: '/about',
									// search: '?a=1&b=2',
									// hash: 'hash'
								}}
							>About</NavLink>
						</li>
						<li>
							<NavLink to="/cars">Cars</NavLink>
						</li>
					</ul>
				</nav>

				<hr/>
				<div style={{textAlign: 'center'}}>
					<h2>Is logged in: {this.state.isLoggedIn ? 'True' : 'False'}</h2>
					<button onClick={() => {
						this.setState({isLoggedIn: true})
					}}>Login
					</button>
				</div>
				<hr/>

				{/*localhost:3000*/}
				<Switch>
					<Route path="/" exact render={() => <h1>Home Page</h1>}/>
					{this.state.isLoggedIn ? <Route path="/about" component={About}/> : null}
					<Route path="/cars/:name" component={CarDetail}/>
					<Route path="/cars" component={Cars}/>
					<Route render={() => <h1 style={{textAlign: 'center'}}>404</h1>}/>
				</Switch>
			</div>
		);
	}
}

export default App
