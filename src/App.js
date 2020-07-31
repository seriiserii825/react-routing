import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
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
									search: '?a=1&b=2',
									hash: 'hash'
								}}
							>About</NavLink>
						</li>
						<li>
							<NavLink to="/cars">Cars</NavLink>
						</li>
					</ul>
				</nav>

				<hr/>

				{/*localhost:3000*/}
				<Route path="/" exact render={() => <h1>Home Page</h1>}/>
				<Route path="/about" component={About}/>
				<Route path="/cars" component={Cars}/>
			</div>
		);
	}
}

export default App
